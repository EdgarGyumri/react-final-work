import React, { useRef, useState } from "react";

function InputField({onNext, randomNumbers}) {
    const inputEl = useRef(null)
    const [value, setValue] = useState('')
    
    return (
        <div>
            <input
                ref={inputEl}
                className='input-field' 
                type="text" 
                value={value} 
                placeholder="Input value"
                onChange={e => {
                    if(!isNaN(parseInt(e.target.value))) {
                        if(!randomNumbers.includes(e.target.value)){
                            setValue(e.target.value)
                            onNext(e.target.value)
                        }
                    }
                }}
            /> 
        </div>
    )
}

export default InputField;