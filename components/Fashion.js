import Image from 'next/image'
import React from 'react'

const Fashion = () => {
  return (
    <div className="w-full h-full hidden xl:block">
      <Image src="/fashion.jpg" alt="fashion" width={330} height={300} />
    </div>
  )
}

export default Fashion
