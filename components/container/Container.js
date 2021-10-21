import React from 'react'
import Navbar from '../navbar/Navbar'

export default function Container(props) {
    return (
        <>
            <Navbar />
            {props.children}
        </>
    )
}