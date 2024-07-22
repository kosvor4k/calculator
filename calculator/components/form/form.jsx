import './form.css'
import { useState } from 'react'

export default function Form (props) {
    let [value, setValue] = useState('')
    
    function magic (value) {
        return eval(value)
    }

    return (
        <div className='calculator-main'>
            <div className='Stroke'>
                <p>{value}</p>
            </div>
            <div className='Buttons'>
                <button className='button' onClick={() => setValue(value + '1')}>1</button>
                <button className='button' onClick={() => setValue(value + '2')}>2</button>
                <button className='button' onClick={() => setValue(value + '3')}>3</button>
                <button className='button' onClick={() => setValue(value + '+')}>+</button>
                <button className='button' onClick={() => setValue(value + '4')}>4</button>
                <button className='button' onClick={() => setValue(value + '5')}>5</button>
                <button className='button' onClick={() => setValue(value + '6')}>6</button>
                <button className='button' onClick={() => setValue(value + '-')}>-</button>
                <button className='button' onClick={() => setValue(value + '7')}>7</button>
                <button className='button' onClick={() => setValue(value + '8')}>8</button>
                <button className='button' onClick={() => setValue(value + '9')}>9</button>
                <button className='button' onClick={() => setValue(value + '*')}>*</button>
                <button className='button' onClick={() => setValue(value = '')}>CE</button>
                <button className='button' onClick={() => setValue(value + '0')}>0</button>
                <button className='button' onClick={() => setValue(value = value.substring(0, value.length - 1))}>DE</button>
                <button className='button' onClick={() => setValue(value + '/')}>/</button>
                <span className='the-last-element-position'><button className='button the-last-element' onClick={() => setValue(value = magic(value))}>=</button></span>
            </div>
        </div>
    )
}