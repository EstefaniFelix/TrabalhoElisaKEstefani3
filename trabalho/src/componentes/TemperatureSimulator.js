import React, { useState } from 'react'
function TemperatureSimulator() {
    const [cel, setcel] = useState('')
    const [far, setfar] = useState('')
    const [celr, setcelr] = useState(null);
    const [farr, setfarr] = useState(null);


    const calcularcel = () => {
        const celr = (cel * 1.8) + 32

        setcelr(celr)
    }

    const calcularfar = () => {
        const farr = (far - 32) / 1.8

        setfarr(farr)
    }

    return (
        <div>
            <div className='Temperatura'>
                <h3> Digite a temperatura em Celsius </h3>
                <input type='number' value={cel} onChange={(e) => setcel(e.target.value)} placeholder='Temperatura em Celsius' />
                <button onClick={calcularcel}> Calcular media</button>
                {celr !== null && <p> Resultado: {celr} </p>}</div>
            <div className='Temperaturafar'>
            <h3> Digite a temperatura em Fahrenheit </h3>
                <input type='number' value={far} onChange={(e) => setfar(e.target.value)} placeholder='Temperatura em Fahrenheit' />
                <button onClick={calcularfar}> Calcular media</button>
                {farr !== null && <p> Resultado: {farr} </p>}
            </div>

        </div>
    )
}
export default TemperatureSimulator