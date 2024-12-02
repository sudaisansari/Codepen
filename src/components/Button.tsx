import React from 'react'

interface Props {
    text: string;
    onClick?: () => void;
}

const Button: React.FC<Props> = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            className='text-[16px] hover:bg-gray-900 rounded-sm py-1 px-3 text-white text-center bg-gray-700'>
            {text}
        </button>
    )
}

export default Button