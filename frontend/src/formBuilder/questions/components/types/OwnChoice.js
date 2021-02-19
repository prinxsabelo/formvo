import { useContext, useEffect, useState } from "react";
import { Payload } from "../../../../context/Payload";
import Button from "../../../../shared/collection/Button";
import Choice from "./Choice";

const OwnChoice = (props) => {
    const { q_id, properties } = props;
    const { developQuestion } = useContext(Payload);

    const [choices, setChoices] = useState([]);
    useEffect(() => {

        if (properties.choices.length > 0) {
            setChoices(properties.choices)
        } else {
            setChoices([{ label: "", index: 0 }]);

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
        setChoices([...choices, { label: "", index: choices.length }])

    }
    const deleteChoice = (choice) => {
        //  console.log(choices);
        let i = 0;
        const filterChoices = choices.filter(c => c.index !== choice.index).map(el => {
            el.index = i; i++;
            return el
        })
        setChoices(filterChoices);


    }
    if (choices.length === 0) {
        setChoices([{ label: "", index: 0 }])
    }
    return (
        <>

            <div className="w-full h-full  flex flex-col space-y-2 h-4/5 choice-auto">
                {choices.map((choice, index) =>
                    <Choice key={index} index={index} name={`c${index}`} addChoice={addChoice}
                        choicesLength={choices.length} deleteChoice={deleteChoice} label={choice.label}
                        onChange={(event, index) => handleChoice(event, index)} {...choice} />
                )}
                <div className="flex ">
                    {choices.length <= 4 &&

                        <Button className="w-1/3 h-12 md:w-auto bg-gray-700"
                            onClick={addChoice}
                            style={{ transition: "all .30s ease" }}>
                            Add Choice
                        </Button>
                    }
                </div>
            </div>
            {/* <div className="hidden md:flex flex-auto justify-center">
                {choices.length <= 4 &&
                    <Button
                        onClick={addChoice}
                        style={{ transition: "all .30s ease" }}>
                        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </Button>
                }

            </div> */}

        </>
    )
}
export default OwnChoice;