import AntBreadCrumb from '@/presentation/components/ui/breadcrumb/ant-breadcrumb'
import AntButton from '@/presentation/components/ui/button/ant-button'
import AntCheckbox from '@/presentation/components/ui/check-box/ant-checkbox'
import AntInput from '@/presentation/components/ui/input/ant-input'
import AntInputDate from '@/presentation/components/ui/input/ant-input-date'
import AntInputDatetime from '@/presentation/components/ui/input/ant-input-datetime'
import AntInputNumber from '@/presentation/components/ui/input/ant-input-number'
import AntInputPassword from '@/presentation/components/ui/input/ant-input-password'
import AntInputTextArea from '@/presentation/components/ui/input/ant-input-textarea'
import AntSelectInput from '@/presentation/components/ui/input/ant-select-input'
import AntPagination from '@/presentation/components/ui/pagination/ant-pagination'
import AntRadio from '@/presentation/components/ui/radio/ant-radio'
import AntSwitch from '@/presentation/components/ui/switch/ant-switch'
import { Card } from 'antd'
import { useState } from 'react'

const StoryBookPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 10

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    console.log('Current page:', page)
  }

  return (
    <div>
      <AntBreadCrumb items={[{ title: 'Hệ thống' }, { title: 'Story book' }]} />
      <Card size='small' title='Button'>
        <div className='flex items-center gap-2 mb-2'>
          <AntButton variant='solid' color='primary'>
            Button
          </AntButton>
          <AntButton variant='solid' color='black'>
            Button
          </AntButton>
          <AntButton variant='solid' color='info'>
            Button
          </AntButton>
          <AntButton variant='solid' color='error'>
            Button
          </AntButton>
          <AntButton variant='solid' color='inherit'>
            Button
          </AntButton>
        </div>
      </Card>

      <Card size='small' title='Checkbox' className='flex flex-col gap-2 mb-2'>
        <AntCheckbox color='primary' defaultChecked>
          Default
        </AntCheckbox>
        <AntCheckbox color='primary' className='hover:opacity-80'>
          Hovered
        </AntCheckbox>
        <AntCheckbox color='primary' disabled>
          Disabled
        </AntCheckbox>
        <AntCheckbox color='primary' defaultChecked>
          Checked
        </AntCheckbox>
        <AntCheckbox color='primary' defaultChecked className='hover:opacity-80'>
          Hovered
        </AntCheckbox>
        <AntCheckbox color='primary' defaultChecked disabled>
          Disabled
        </AntCheckbox>
      </Card>

      <Card size='small' title='Checkbox' className='flex flex-col gap-2 mb-2'>
        <AntRadio color='primary' defaultChecked>
          Default
        </AntRadio>
        <AntRadio color='primary' className='hover:opacity-80'>
          Hovered
        </AntRadio>
        <AntRadio color='primary' disabled>
          Disabled
        </AntRadio>
        <AntRadio color='primary' defaultChecked>
          Checked
        </AntRadio>
        <AntRadio color='primary' defaultChecked className='hover:opacity-80'>
          Hovered
        </AntRadio>
        <AntRadio color='primary' defaultChecked disabled>
          Disabled
        </AntRadio>
      </Card>

      <Card size='small' title='Pagination' className='flex flex-col gap-4'>
        <div>
          <AntPagination
            className='mb-1'
            current={currentPage}
            onChange={handlePageChange}
            total={100}
            pageSize={pageSize}
          />
          <AntPagination
            current={currentPage}
            variant='soft'
            onChange={handlePageChange}
            total={100}
            pageSize={pageSize}
          />
          <AntPagination
            current={currentPage}
            variant='outlined'
            className='mt-1'
            onChange={handlePageChange}
            total={100}
            pageSize={pageSize}
          />
        </div>
      </Card>

      <Card size='small' title='Switch' className='flex flex-col gap-2 mb-2'>
        <AntSwitch defaultChecked />
      </Card>

      <Card title='Input' size='small' className='flex flex-col gap-4 '>
        {/* Row 1 - Small Size */}
        <div className='grid grid-cols-7 gap-4 mb-7'>
          <AntInput size='small' label='Input' placeholder='Input' />
          <AntInputPassword size='small' label='Password' placeholder='Password' />
          <AntInputNumber size='small' label='Number' placeholder='Number' />
          <AntSelectInput
            size='small'
            placeholder='Select'
            label='Select'
            options={[
              { value: '123', label: '123' },
              { value: '456', label: '456' }
            ]}
          />
          <AntSelectInput
            size='small'
            mode='multiple'
            placeholder='Multiple'
            label='Multiple'
            options={[
              { value: '123', label: '123' },
              { value: '456', label: '456' }
            ]}
          />
          <AntInputDate size='small' label='Date' placeholder='Date' />
          <AntInputDatetime size='small' label='Datetime' placeholder='Datetime' />
        </div>

        {/* Row 2 - Middle Size */}
        <div className='grid grid-cols-7 gap-4 mb-7'>
          <AntInput size='middle' label='Input' placeholder='Input' />
          <AntInputPassword size='middle' label='Password' placeholder='Password' />
          <AntInputNumber size='middle' label='Number' placeholder='Number' />
          <AntSelectInput
            size='middle'
            placeholder='Select'
            label='Select'
            options={[
              { value: '123', label: '123' },
              { value: '456', label: '456' }
            ]}
          />
          <AntSelectInput
            size='middle'
            mode='multiple'
            placeholder='Multiple'
            label='Multiple'
            options={[
              { value: '123', label: '123' },
              { value: '456', label: '456' }
            ]}
          />
          <AntInputDate size='middle' label='Date' placeholder='Date' />
          <AntInputDatetime size='middle' label='Datetime' placeholder='Datetime' />
        </div>

        {/* Row 3 - Large Size */}
        <div className='grid grid-cols-7 gap-4 mb-7'>
          <AntInput size='large' label='Input' placeholder='Input' />
          <AntInputPassword size='large' label='Password' placeholder='Password' />
          <AntInputNumber size='large' label='Number' placeholder='Number' />
          <AntSelectInput
            size='large'
            placeholder='Select'
            label='Select'
            options={[
              { value: '123', label: '123' },
              { value: '456', label: '456' }
            ]}
          />
          <AntSelectInput
            size='large'
            mode='multiple'
            placeholder='Multiple'
            label='Multiple'
            options={[
              { value: '123', label: '123' },
              { value: '456', label: '456' }
            ]}
          />
          <AntInputDate size='large' label='Date' placeholder='Date' />
          <AntInputDatetime size='large' label='Datetime' placeholder='Datetime' />
        </div>

        <div className='grid grid-cols-3 gap-4'>
          <AntInputTextArea size='small' label='Textarea Small' rows={3} />
          <AntInputTextArea size='middle' label='Textarea Middle' rows={3} />
          <AntInputTextArea size='large' label='Textarea Large' rows={3} />
        </div>
      </Card>
    </div>
  )
}

export default StoryBookPage
