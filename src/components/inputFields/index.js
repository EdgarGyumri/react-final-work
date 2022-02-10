import { useContext } from "react";
import InputField from "./InputField";
import RandomNumbersContext from "../../context/RandomNumbersContext";
import './style.css'

export default function InputFields() {
    const randomArray = useContext(RandomNumbersContext)
    return (
        <div>
            {
                randomArray.map((item, index) => {
                    return (
                        <InputField value={item} key={index} />
                    )
                })
            }
        </div>
    )
}