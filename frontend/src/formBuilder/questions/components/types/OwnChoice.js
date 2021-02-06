import { useContext, useEffect, useState } from "react";
import { Payload } from "../../../../context/Payload";
import Button from "../../../../shared/collection/Button";
import Choice from "./Choice";

const OwnChoice = (props) => {
    const { q_id, properties } = props;
    const { developQuestion } = useContext(Payload);

    const [choices, setChoices] = useState([]);
    useEffect(() => {
        if (properties.choices) {
            setChoices(properties.choices)
        }
    }, [setChoices, properties.choices])
    const handleChoice = (event, index) => {
        const { value } = event.target;
        choices[index].label = value;
        properties.choices = choices;
        let { title, type } = props;
        developQuestion({ title, q_id, properties, type });
    }
    const addChoice = () => {

        setChoices([...choices, { label: "" }])
    }

    return (
        <>
            <div className="w-full md:w-10/12 flex flex-col space-y-2">
                {choices.map((choice, index) =>
                    <Choice key={index} index={index} name={`c${index}`} addChoice={addChoice} choicesLength={choices.length}
                        onChange={(event, index) => handleChoice(event, index)} {...choice} />
                )}
            </div>
            <div className="hidden md:flex flex-auto justify-center">
                {choices.length <= 3 &&
                    <Button
                        onClick={addChoice}
                        style={{ transition: "all .30s ease" }}>
                        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </Button>
                }

            </div>

        </>
    )
}
export default OwnChoice;