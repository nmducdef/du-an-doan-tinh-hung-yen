import { Button, Input, message, Modal } from 'antd'
import { domToPng } from 'modern-screenshot'
import { useCallback, useRef, useState } from 'react'
import Cropper from 'react-easy-crop'

const { TextArea } = Input

type Area = {
  x: number
  y: number
  width: number
  height: number
}

const FormDienNguoiDung = () => {
  const [imageUrl, setImageUrl] = useState<string>('')
  const [tempImageUrl, setTempImageUrl] = useState<string>('')
  const [showCropModal, setShowCropModal] = useState(false)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)

  const [formData, setFormData] = useState({
    hoVaTen: '',
    chucVu: '',
    phongBan: '',
    loiNhan: ''
  })
  const fileInputRef = useRef<HTMLInputElement>(null)
  const previewRef = useRef<HTMLDivElement>(null)

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setTempImageUrl(e.target?.result as string)
        setShowCropModal(true)
      }
      reader.readAsDataURL(file)
    }
  }

  const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const createImage = (url: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
      const image = new Image()
      image.addEventListener('load', () => resolve(image))
      image.addEventListener('error', (error) => reject(error))
      image.src = url
    })

  const getCroppedImg = async (imageSrc: string, pixelCrop: Area): Promise<string> => {
    const image = await createImage(imageSrc)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    if (!ctx) {
      throw new Error('No 2d context')
    }

    canvas.width = pixelCrop.width
    canvas.height = pixelCrop.height

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    )

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          return
        }
        const fileUrl = URL.createObjectURL(blob)
        resolve(fileUrl)
      }, 'image/jpeg')
    })
  }

  const handleCropConfirm = async () => {
    try {
      if (croppedAreaPixels) {
        const croppedImage = await getCroppedImg(tempImageUrl, croppedAreaPixels)
        setImageUrl(croppedImage)
        setShowCropModal(false)
        setTempImageUrl('')
        setCrop({ x: 0, y: 0 })
        setZoom(1)
        message.success('Đã cắt ảnh thành công!')
      }
    } catch (e) {
      console.error(e)
      message.error('Có lỗi khi cắt ảnh!')
    }
  }

  const handleCropCancel = () => {
    setShowCropModal(false)
    setTempImageUrl('')
    setCrop({ x: 0, y: 0 })
    setZoom(1)
  }

  const handleChooseImage = () => {
    fileInputRef.current?.click()
  }

  const handleSubmit = async () => {
    if (!formData.hoVaTen || !formData.chucVu || !formData.phongBan || !formData.loiNhan) {
      message.warning('Vui lòng điền đầy đủ thông tin!')
      return
    }

    if (!imageUrl) {
      message.warning('Vui lòng chọn ảnh!')
      return
    }

    try {
      message.loading({ content: 'Đang tạo ảnh...', key: 'download' })

      if (previewRef.current) {
        const dataUrl = await domToPng(previewRef.current, {
          quality: 1,
          scale: 2
        })

        const link = document.createElement('a')
        link.href = dataUrl
        link.download = `loi-nhan-dai-hoi-${formData.hoVaTen.replace(/\s+/g, '-')}.png`
        link.click()
        message.success({ content: 'Tải ảnh thành công!', key: 'download' })
      }
    } catch (error) {
      console.error(error)
      message.error({ content: 'Có lỗi khi tải ảnh!', key: 'download' })
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-500 via-purple-600 to-blue-600 p-4 md:p-8'>
      <input ref={fileInputRef} type='file' accept='image/*' className='hidden' onChange={handleImageSelect} />

      <Modal
        title='Chỉnh sửa ảnh'
        open={showCropModal}
        onOk={handleCropConfirm}
        onCancel={handleCropCancel}
        width={600}
        okText='Xác nhận'
        cancelText='Hủy'
        centered
      >
        <div className='relative h-[400px] bg-gray-100'>
          <Cropper
            image={tempImageUrl}
            crop={crop}
            zoom={zoom}
            aspect={1}
            cropShape='round'
            showGrid={false}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        </div>
        <div className='mt-4'>
          <label className='block text-sm font-medium mb-2'>Zoom</label>
          <input
            type='range'
            value={zoom}
            min={0.1}
            max={3}
            step={0.1}
            onChange={(e) => setZoom(Number(e.target.value))}
            className='w-full'
          />
        </div>
      </Modal>

      <div className='text-center mb-6 md:mb-8'>
        <h1 className='text-yellow-300 font-bold text-lg md:text-2xl lg:text-3xl px-4 leading-tight'>
          CHÀO MỪNG ĐẠI HỘI ĐẠI BIỂU ĐOÀN TNCS HỒ CHÍ MINH TỈNH HƯNG YÊN LẦN THỨ XIII, NHIỆM KỲ 2025-2030
        </h1>
      </div>

      <div className='max-w-[80vw] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8'>
        <div className='bg-white rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10'>
          <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 text-center'>Tạo thông điệp</h2>

          <div className='space-y-5 md:space-y-6'>
            <div>
              <Button
                type='primary'
                size='large'
                onClick={handleChooseImage}
                className='w-full h-12 md:h-14 text-base md:text-lg font-semibold rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 border-0 hover:from-indigo-600 hover:to-purple-700'
              >
                Chọn ảnh
              </Button>
            </div>

            <div>
              <div className='mb-2'>
                <span className='inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm md:text-base font-semibold'>
                  Họ và tên
                </span>
              </div>
              <Input
                placeholder='Họ và tên...'
                size='large'
                className='rounded-xl h-12 md:h-14'
                value={formData.hoVaTen}
                onChange={(e) => setFormData({ ...formData, hoVaTen: e.target.value })}
              />
            </div>

            <div>
              <div className='mb-2'>
                <span className='inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm md:text-base font-semibold'>
                  Chức vụ
                </span>
              </div>
              <TextArea
                placeholder='Chức vụ...'
                size='large'
                className='rounded-xl'
                rows={2}
                value={formData.chucVu}
                onChange={(e) => setFormData({ ...formData, chucVu: e.target.value })}
              />
            </div>

            <div>
              <div className='mb-2'>
                <span className='inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm md:text-base font-semibold'>
                  Phòng ban
                </span>
              </div>
              <TextArea
                placeholder='Phòng ban...'
                size='large'
                className='rounded-xl'
                rows={2}
                value={formData.phongBan}
                onChange={(e) => setFormData({ ...formData, phongBan: e.target.value })}
              />
            </div>

            <div>
              <div className='mb-2'>
                <span className='inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm md:text-base font-semibold'>
                  Gửi lời nhắn đến đại hội
                </span>
              </div>
              <TextArea
                placeholder='Lời nhắn...'
                size='large'
                className='rounded-xl'
                rows={5}
                value={formData.loiNhan}
                onChange={(e) => setFormData({ ...formData, loiNhan: e.target.value })}
              />
            </div>

            <div className='pt-4'>
              <Button
                type='primary'
                size='large'
                onClick={handleSubmit}
                className='w-full h-12 md:h-14 text-base md:text-lg font-semibold rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 border-0 hover:from-indigo-600 hover:to-purple-700'
              >
                Tải lời nhắn về
              </Button>
            </div>
          </div>
        </div>

        <div className='bg-transparent rounded-3xl overflow-hidden lg:col-span-2 flex items-center justify-center'>
          <div
            ref={previewRef}
            className='relative w-full max-w-[800px] aspect-[16/9] bg-white rounded-xl overflow-hidden'
          >
            <img
              src='/assets/images/main-image-form.png'
              alt='Template'
              className='absolute inset-0 w-full h-full object-cover'
            />

            {imageUrl && (
              <div className='absolute top-[31.5%] left-[7.88%] w-[19%] aspect-square'>
                <img src={imageUrl} alt='Uploaded' className='w-full h-full object-cover rounded-full' />
              </div>
            )}

            {formData.hoVaTen && (
              <div className='absolute top-[70%] left-[9%] w-[17%] text-center flex items-center justify-center'>
                <p
                  className='text-white font-bold text-[19px] uppercase leading-tight whitespace-nowrap'
                  style={{
                    transform:
                      formData.hoVaTen.length > 15 ? `scale(${Math.max(0.6, 15 / formData.hoVaTen.length)})` : 'none',
                    transformOrigin: 'center'
                  }}
                >
                  {formData.hoVaTen}
                </p>
              </div>
            )}

            {formData.chucVu && (
              <div className='absolute top-[78%] left-[9%] w-[17%] text-center'>
                <p className='text-white text-[11px] italic break-words leading-tight'>{formData.chucVu}</p>
              </div>
            )}

            {formData.phongBan && (
              <div className='absolute top-[84%] left-[9%] w-[17%] text-center'>
                <p className='text-white text-[11px] italic break-words leading-tight'>{formData.phongBan}</p>
              </div>
            )}

            {formData.loiNhan && (
              <div className='absolute top-[29%] left-[36%] right-[5%] p-4'>
                <p className='text-white text-sm leading-relaxed break-words'>{formData.loiNhan}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormDienNguoiDung
