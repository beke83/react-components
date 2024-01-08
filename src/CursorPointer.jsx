import React from 'react'
import { useState } from 'react'

const CursorPointer = () => {

    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    return (
        <div
        onPointerMove={e => {
            setPosition({
                x: e.clientX,
                y: e.clientY,
            })
        }}
        style={{
            position: 'relative',
            width: '100vw',
            height: '100vh',
          }}>
        
        {/* this can be designed as you want it and doesn't have to be a color */}
            <div style={{
                position: 'absolute',
                backgroundColor: 'blue',
                borderRadius: '50%',
                transform: `translate(${position.x}px, ${position.y}px)`,
                left: -10,
                top: -10,
                width: 40,
                height: 40,
            }} />
        </div>
    )
}

export default CursorPointer