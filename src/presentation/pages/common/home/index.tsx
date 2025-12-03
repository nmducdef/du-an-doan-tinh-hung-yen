import AntBreadCrumb from '@/presentation/components/ui/breadcrumb/ant-breadcrumb'
import {
  CalendarOutlined,
  DashboardOutlined,
  FileTextOutlined,
  HeartOutlined,
  MedicineBoxOutlined,
  SafetyOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Card, Col, Row, Statistic } from 'antd'

const HomePage = () => {
  const features = [
    {
      icon: <UserOutlined className='text-3xl' />,
      title: 'Quản lý bệnh nhân',
      description: 'Theo dõi hồ sơ bệnh án điện tử, lịch sử khám chữa bệnh một cách đầy đủ và chính xác'
    },
    {
      icon: <CalendarOutlined className='text-3xl' />,
      title: 'Đặt lịch hẹn',
      description: 'Hệ thống đặt lịch thông minh, tối ưu hóa thời gian khám cho bệnh nhân và bác sĩ'
    },
    {
      icon: <MedicineBoxOutlined className='text-3xl' />,
      title: 'Quản lý thuốc',
      description: 'Kiểm soát kho thuốc, theo dõi xuất nhập tồn và cảnh báo hết hạn tự động'
    },
    {
      icon: <FileTextOutlined className='text-3xl' />,
      title: 'Kê đơn điện tử',
      description: 'Kê đơn nhanh chóng, chính xác với cơ sở dữ liệu thuốc cập nhật liên tục'
    },
    {
      icon: <TeamOutlined className='text-3xl' />,
      title: 'Quản lý nhân sự',
      description: 'Phân quyền và quản lý nhân viên y tế, lịch trực và đánh giá hiệu suất'
    },
    {
      icon: <DashboardOutlined className='text-3xl' />,
      title: 'Báo cáo thống kê',
      description: 'Dashboard trực quan, báo cáo chi tiết hỗ trợ ra quyết định quản lý'
    },
    {
      icon: <SafetyOutlined className='text-3xl' />,
      title: 'Bảo mật cao',
      description: 'Mã hóa dữ liệu, phân quyền chi tiết đảm bảo an toàn thông tin bệnh nhân'
    },
    {
      icon: <HeartOutlined className='text-3xl' />,
      title: 'Chăm sóc toàn diện',
      description: 'Tích hợp đầy đủ quy trình từ tiếp đón, khám chữa đến xuất viện'
    }
  ]

  const stats = [
    { title: 'Bệnh nhân', value: 15420, suffix: '+', icon: <UserOutlined /> },
    { title: 'Bác sĩ', value: 156, icon: <TeamOutlined /> },
    { title: 'Lượt khám/ngày', value: 450, suffix: '+', icon: <HeartOutlined /> },
    { title: 'Độ hài lòng', value: 98, suffix: '%', icon: <SafetyOutlined /> }
  ]

  return (
    <div className='flex flex-col gap-6'>
      <AntBreadCrumb />

      <div className='relative bg-gradient-to-br from-[#00B96B] via-[#04d37d] to-[#00B96B] rounded-2xl p-12 overflow-hidden shadow-2xl'>
        <div className='absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48' />
        <div className='absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full -ml-36 -mb-36' />

        <div className='relative z-10'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center'>
              <MedicineBoxOutlined className='text-2xl text-white' />
            </div>
            <h1 className='text-4xl font-bold text-white'>Hệ thống Thông tin Bệnh viện</h1>
          </div>

          <p className='text-xl text-white/90 mb-8 max-w-3xl leading-relaxed'>
            Giải pháp quản lý bệnh viện toàn diện, hiện đại và an toàn. Tối ưu hóa quy trình làm việc, nâng cao chất
            lượng chăm sóc sức khỏe người dân.
          </p>

          <div className='flex gap-4'>
            <button className='px-8 py-3 bg-white text-[#00B96B] rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg'>
              Bắt đầu sử dụng
            </button>
            <button className='px-8 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/30 transition-all duration-200 border border-white/30'>
              Tìm hiểu thêm
            </button>
          </div>
        </div>
      </div>

      <Row gutter={[16, 16]}>
        {stats.map((stat, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <Card className='text-center hover:shadow-lg transition-all duration-300 border-t-4 border-[#00B96B]'>
              <div className='text-4xl text-[#00B96B] mb-3'>{stat.icon}</div>
              <Statistic
                title={<span className='text-gray-600 font-medium'>{stat.title}</span>}
                value={stat.value}
                suffix={stat.suffix}
                valueStyle={{ color: '#00B96B', fontWeight: 'bold' }}
              />
            </Card>
          </Col>
        ))}
      </Row>

      <div className='mt-4'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl font-bold text-gray-800 mb-3'>Tính năng nổi bật</h2>
          <p className='text-gray-600 text-lg'>Giải pháp toàn diện cho quản lý bệnh viện hiện đại</p>
        </div>

        <Row gutter={[24, 24]}>
          {features.map((feature, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <Card
                className='h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0'
                bodyStyle={{ padding: '24px' }}
              >
                <div className='flex flex-col items-center text-center h-full'>
                  <div className='w-16 h-16 bg-gradient-to-br from-[#00B96B] to-[#04d37d] rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg'>
                    {feature.icon}
                  </div>
                  <h3 className='text-lg font-semibold text-gray-800 mb-3'>{feature.title}</h3>
                  <p className='text-gray-600 text-sm leading-relaxed'>{feature.description}</p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <Card className='bg-gradient-to-r from-gray-50 to-green-50 border-0 shadow-lg mt-4'>
        <div className='text-center py-8'>
          <h3 className='text-2xl font-bold text-gray-800 mb-3'>Sẵn sàng nâng cao chất lượng quản lý?</h3>
          <p className='text-gray-600 mb-6 text-lg'>
            Liên hệ với chúng tôi để được tư vấn và trải nghiệm hệ thống miễn phí
          </p>
          <button className='px-10 py-4 bg-[#00B96B] text-white rounded-lg font-semibold hover:bg-[#04d37d] transition-all duration-200 shadow-lg hover:shadow-xl'>
            Liên hệ ngay
          </button>
        </div>
      </Card>
    </div>
  )
}

export default HomePage
