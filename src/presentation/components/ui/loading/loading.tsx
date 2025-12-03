const Loading = () => {
  return (
    <>
      <div className='fixed inset-0 bg-black/20 z-[9998] backdrop-blur-sm' />

      <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20vw] h-1.5 bg-gray-200 rounded-full overflow-hidden z-[9999] shadow-xl'>
        <div className='h-full bg-gradient-to-r from-[#00B96B] via-[#04d37d] to-[#00B96B] shadow-lg animate-loading' />
      </div>

      <style>{`
        @keyframes loading {
          0% {
            width: 0%;
            margin-left: 0%;
          }
          50% {
            width: 75%;
            margin-left: 0%;
          }
          100% {
            width: 0%;
            margin-left: 100%;
          }
        }
        .animate-loading {
          animation: loading 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </>
  )
}

export default Loading
