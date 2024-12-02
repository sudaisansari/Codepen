import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='h-[52px] items-center md:h-[64px] bg-black'>
            <div className='pl-4 md:pt-2'>
                <Image src={"/codepen.png"} height={50} width={50} alt='Codepen Logo' />
            </div>
        </div>
    )
}

export default Header