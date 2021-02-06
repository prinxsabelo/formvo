import { useEffect, useState } from "react";
import Button from "../../../../shared/collection/Button";

const Choice = (props) => {

    const [label, setLabel] = useState(props.label);
    useEffect(() => {
        setLabel(props.label);
    }, [props, setLabel])
    const handleChoice = (event, index) => {
        props.onChange(event, index)
        setLabel(event.target.value);
    }
    return (
        <>
            <div className=" flex space-x-2 items-center">
                <input autoFocus={props.index === 0} autoComplete="off" placeholder={`Choice ${props.index + 1}`}
                    className="border w-full p-3  outline-none rounded focus:border-black"
                    onChange={(event) => handleChoice(event, props.index)}
                    index={props.index}
                    name={`choice${props.index}`}
                    value={label}
                />
                {
                    props.choicesLength !== props.index + 1 && (
                        <Button onClick={() => props.addChoice(props)} className="md:hidden">
                            <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </Button>
                    )
                }



                {(props.choicesLength === props.index + 1 && props.choicesLength <= 3) &&
                    <Button onClick={() => props.addChoice(props)} className="md:hidden">
                        <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </Button>
                }
            </div>

        </>
    )
}
export default Choice; 