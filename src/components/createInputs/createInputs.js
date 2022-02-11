import InputFields from "../inputFields"
import ShowNumbers from "../showNumbers/ShowNumbers"

export default function createInputs({setShow, setContext, onShow, show, onAdd, onClick}) {
    return (
        <div>
            <InputFields
              onShow={context => {
                setContext(context)
                setShow(!show)
              }}
            />
        </div>
    )
}