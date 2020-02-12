import React from 'react'

export default function Ref() {
    const myRef = React.useRef()

    return <div>
        <button onClick={() => myRef.current.focus()}>click</button>
        <input ref={myRef} />
    </div>
}