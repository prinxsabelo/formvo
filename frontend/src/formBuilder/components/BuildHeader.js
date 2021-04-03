import { useContext } from "react";
import Button from "../../shared/collection/Button"

import QDrawer from "../../shared/collection/QDrawer";
import QTypeIcon from "../../shared/collection/QTypeIcon";
import { Payload } from "../../context/Payload";
import { useHistory } from "react-router-dom";
import ToggleSwitch from "../../shared/collection/ToggleSwitch";

const BuildHeader = ({ q_id, properties, type, children }) => {
    const history = useHistory();
    const { form, drawerIsOpen, setDrawerIsOpen, setTypeAction, questionTypes, currentType, setCurrentType, setDrawerPosition, developQuestion } = useContext(Payload);
    const qType = questionTypes.find(qt => qt.type === type);
    const { required } = properties
    const arr = [
        {
            id: 1,
            label: "Required",
            value: required,
            name: "required"
        }
    ];
    const onToggleChange = (index, isChecked) => {

        let name = arr[index]['name'];
        arr[index]['name'] = isChecked
        properties[name] = isChecked;

    }
    const openDrawer = () => {
        if (!currentType && qType.type) {

            setCurrentType(qType.type)
        }
        setDrawerPosition("right");
        setDrawerIsOpen(true);
        setTypeAction("edit");

    };
    let index = form.questions.findIndex(q => q.q_id === q_id);
    const goto = (checker) => {
        let new_q_id = -1;
        if (checker === 'backward') {
            if (form.questions[index - 1]) {
                new_q_id = form.questions[index - 1].q_id;
            }
        }
        else if (checker === 'forward') {
            if (form.questions[index + 1]) {
                new_q_id = form.questions[index + 1].q_id;
            }
        }
        setTypeAction('..');
        history.push(`/form/${form.form_id}/questions/${new_q_id}`);


    }
    return (
        <div className="flex md:flex-row-reverse justify-between justify-end  p-1 bg-gray-100 w-full md:w-3/4 text-right">
            <div className="md:hidden flex w-44 items-center">
                <Button className="text-gray-800 w-10 bg-white flex items-center justify-center">
                    {index > 0 ?

                        <svg className="w-6" onClick={() => goto('backward')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                        </svg>
                        :
                        <span>.</span>
                    }
                </Button>
                <Button className="text-gray-800 w-10 bg-white flex items-center justify-center">

                    {form.questions.length > index + 1 ?

                        <svg onClick={() => goto('forward')} className="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        :
                        <span>.</span>
                    }
                </Button>
                <div className="py-3 px-1 bg-white">
                    {arr.map((property, index) =>
                        <ToggleSwitch className="text-sm font-bold" key={property.id} index={index} id={`${q_id}-${property.name}`} label={property.label}
                            value={property.value} onToggleChange={onToggleChange} />
                    )}
                </div>

            </div>
            <div className="flex w-full justify-end md:flex-row-reverse md:justify-between">

                {qType &&

                    <Button className="bg-gray-900 uppercase" onClick={openDrawer}>
                        <span className="flex items-center">
                            <div className="px-1 ">
                                <QTypeIcon color="yellow" className="w-8 text-gray-100" type={qType.type} shape={properties.shape} />
                            </div>
                            {qType.label}
                        </span>

                    </Button>
                }
                {children}
            </div>


            <QDrawer show={drawerIsOpen} />
        </div>
    )
}
export default BuildHeader