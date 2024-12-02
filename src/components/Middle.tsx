"use client"
import React, { useState } from 'react'
import Result from './Result';
import Editor from './Editor';

const Middle = () => {
    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');

    return (
        <div>
            <div className='md:block hidden'>
                <div className='bg-black flex gap-x-2 px-2 pb-2'>
                    <Editor lang='xml' bgColor='bg-[#FF3C41]' icon='/' val={html} setVal={setHtml} heading='HTML' />
                    <Editor lang='css' bgColor='bg-[#0EBEFF]' icon='*' val={css} setVal={setCss} heading='CSS' />
                    <Editor lang='javascript' bgColor='bg-[#FCD000]' icon='( )' val={js} setVal={setJs} heading='JS' />
                </div>
            </div>
            <div className='md:hidden block bg-black'>
                <div className='flex flex-col gap-y-[4px]'>
                    <Editor lang='xml' bgColor='bg-[#FF3C41]' icon='/' val={html} setVal={setHtml} heading='HTML' />
                    <Editor lang='css' bgColor='bg-[#0EBEFF]' icon='*' val={css} setVal={setCss} heading='CSS' />
                    <Editor lang='javascript' bgColor='bg-[#FCD000]' icon='( )' val={js} setVal={setJs} heading='JS' />
                </div>
            </div>
            <div>
                {/* <h1>Sudais</h1> */}
                <Result html={html} css={css} js={js} />
            </div>

        </div>
    )
}

export default Middle