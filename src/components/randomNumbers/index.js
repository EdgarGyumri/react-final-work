import { useContext } from "react";
import RandomNumber from "./RandomNumber";
import RandomNumbersContext from "../../context/RandomNumbersContext";
import './style.css'

export default function RandomNumbers() {
    const randomArray = useContext(RandomNumbersContext)
    return (
        <div className="random-numbers">
            {
                randomArray.map((item, index) => {
                    return (
                        <RandomNumber number={item} key={index} />
                    )
                })
            }
        </div>
    )
}