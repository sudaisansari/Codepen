"use client"
import Heading from './Heading';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import "codemirror/mode/xml/xml"
import "codemirror/mode/javascript/javascript"
import { useEffect, useRef } from 'react';

interface Props {
    val: string;
    setVal: React.Dispatch<React.SetStateAction<string>>;
    heading?: string;
    bgColor?: string;
    icon?: string;
    lang: string
}

const Editor: React.FC<Props> = ({ lang, val, setVal, heading, bgColor, icon }) => {
    const editorRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        return () => {
            if (editorRef.current) {
                editorRef.current.innerHTML = ""; // Clear the DOM for the editor
            }
        };
    }, []);
    return (
        <div className='w-full md:w-1/3 rounded-t-lg bg-[#263238]'>
            <Heading heading={heading} icon={icon} bgColor={bgColor} />
            <CodeMirror
                className=''
                value={val}
                options={{
                    theme: 'material',
                    lineNumbers: true,
                    lineWrapping: true,
                    //lint:true,
                    mode: lang,
                }}
                onBeforeChange={(editor, data, value) => {
                    setVal(value);
                }}
                onChange={(editor, data, value) => {
                    console.log('Content :', value);
                }}
            />
        </div>
    )
}

export default Editor