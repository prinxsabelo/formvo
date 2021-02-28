import { useContext } from "react";
import Button from "../../shared/collection/Button"

import Drawer from "../../shared/collection/Drawer";
import QTypeIcon from "../../shared/collection/QTypeIcon";
import { Payload } from "../../context/Payload";
import { useHistory } from "react-router-dom";

const BuildHeader = ({ q_id, properties, type, children }) => {
    const history = useHistory();
    const { form, drawerIsOpen, setDrawerIsOpen, setTypeAction, questionTypes, currentType, setCurrentType, setDrawerPosition, developQuestion } = useContext(Payload);
    const qType = questionTypes.find(qt => qt.type === type);

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
            <div className="md:hidden flex w-48">
                <Button className="bg-gray-900 w-16" onClick={() => goto('backward')} disabled={index === 0}>B</Button>
                <Button className="bg-gray-900 w-16" onClick={() => goto('forward')} disabled={form.questions.length === index + 1}> F </Button>

            </div>
            <div className="flex w-full justify-end md:flex-row-reverse md:justify-between">
                {qType &&

                    <Button className="bg-gray-900 uppercase" onClick={openDrawer}>
                        <span className="flex items-center">
                            <div className="px-1 mr-1 ">
                                <QTypeIcon color="yellow" className="w-8 text-gray-100" type={qType.type} shape={properties.shape} />
                            </div>
                            {qType.label}
                        </span>

                    </Button>
                }
                {children}
            </div>


            <Drawer show={drawerIsOpen} />
        </div>
    )
}
export default BuildHeader