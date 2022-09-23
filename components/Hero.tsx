import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, my name is JR",
            "Always learning and coding",
            "Salsa lover"],
        loop: true,
        delaySpeed: 1500,
    });
    return (
        <div>
            <h1>
                <span>{text}</span>
                <Cursor cursorColor='yellow' />
            </h1>
        </div>
    )
}
