import React, { useState, useRef } from 'react'
import JoditEditor from "jodit-react"

const Index = (props) => {
    const editor = useRef(null)
    const [content] = useState('')

    const config = {
        readonly: false
    }

    return (
        <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1}
            onBlur={newContent => props.value(newContent)}
        />
    );
}

export default Index;