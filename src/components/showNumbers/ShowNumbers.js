import './style.css'
import InputedNumbersContext from '../../context/InputedNumbersContext'
import RandomNumbersContext from '../../context/RandomNumbersContext'
import { useContext } from 'react'
import { useState } from 'react/cjs/react.development'

export default function ShowNumbers({show, onClick}) {
    const InputedNumbers = useContext(InputedNumbersContext)
    const RandomNumbers = useContext(RandomNumbersContext)
    const [completeds, setCompleteds] = useState()
    return (
        <div 
            className='show-numbers' 
            style={{display: show ? 'block' : 'none'}}
            onClick={() => onClick()}
        >
            <button onClick={() => {
                console.log(RandomNumbers, InputedNumbers);
                for(let i = 0; i < RandomNumbers.length; i++) {
                    if(RandomNumbers[i] === InputedNumbers[i]){
                        console.log('yes');
                    }else if(RandomNumbers.includes(InputedNumbers[i])){
                        console.log('double yes');
                    }
                }
            }}>+</button>
        </div>
    )
}