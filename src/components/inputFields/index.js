import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import InputField from "./InputField";
import RandomNumbersContext from "../../context/RandomNumbersContext";
import './style.css'

export default function InputFields({onShow}) {
    const randomArray = useContext(RandomNumbersContext)
    const [randomNumbers, setRandomNumbers] = useState([]);
    const [inputsLinks, setInputsLinks] = useState([]);
    const [count, setCount] = useState(0)
    const inputFields = useRef(null)
    useEffect(() => {
        inputFields.current.childNodes.forEach(item => {
            setInputsLinks(prev => {
                return [
                    ...prev,
                    item.firstElementChild
                ]
            })
        });
    }, [])
    return (
        <div ref={inputFields} className="input-fields">
            {
                randomArray.map((item, index) => {
                    return (
                        <InputField 
                            value={item} 
                            key={index}
                            onNext={num => {
                                if(count === inputsLinks.length - 1){
                                    inputsLinks[count].blur();
                                    console.log(num);
                                    setRandomNumbers(prev => {
                                        return [
                                            ...prev,
                                            num
                                        ]
                                    })
                                    console.log(1, randomNumbers);
                                    onShow(randomNumbers)
                                    return;
                                }
                                setRandomNumbers(prev => {
                                    return [
                                        ...prev,
                                        num
                                    ]
                                })
                                inputsLinks[count + 1].focus()
                                setCount(prev => prev + 1)
                            }}
                            randomNumbers={randomNumbers}
                        />
                    )
                })
            }
        </div>
    )
}