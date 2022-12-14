import { Spin } from 'antd'
import React from 'react'

const Loader = () => {
  return (
    <div className='flex items-center justify-center h-[100vh] w-[100vw]'>
        <Spin />
    </div>
  )
}

export default Loader