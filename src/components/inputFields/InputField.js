export default function InputField({value}) {
    return (
        <div>
            <input className='input-field' type="text" data-value={value} placeholder="Input value" /> 
        </div>
    )
}