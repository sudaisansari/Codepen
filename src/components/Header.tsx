import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='h-[52px] flex justify-center items-center md:h-[64px] bg-black'>
            <div className=''>
                <Image src={"/codepen.png"} height={50} width={50} alt='Codepen Logo' />
            </div>
        </div>
    )
}

export default Header