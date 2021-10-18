import React from 'react'
import { useMousePosition } from './hooks'

export default function App() {
    const {x, y} = useMousePosition()
    return (
        <div>
            current position x: {x}, y: {y}
        </div>
    )
}