import React, { useState, useEffect } from 'react';

interface Props {
    html: string;
    css: string;
    js: string;
}

const Result: React.FC<Props> = ({ html, css, js }) => {

    const [src, setSrc] = useState('');

    const srcCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrc(srcCode);
        }, 300);

        return () => clearTimeout(timeout);
    }, [html, css, js])

    return (
        <div>
            <iframe
                srcDoc={src}
                title="output"
                sandbox="allow-scripts"
                width="100%"
                height="100%"
            />
        </div>
    )
}

export default Result;