import { useContext, useEffect, useState } from "react";
import { Payload } from "../../context/Payload";
import Button from "../../shared/collection/Button";
import QuestionList from "../questions/components/QuestionList"

const Questions = (props) => {
    const { form, drawerIsOpen, setDrawerIsOpen, setTypeAction,
        setDrawerPosition } = useContext(Payload);
    const addQuestion = () => {
        drawerIsOpen
            ? closeDrawer()
            : openDrawer();
    }
    const openDrawer = () => {

        setTypeAction("new");
        setDrawerPosition("left")
        setDrawerIsOpen(true);

    };
    const closeDrawer = () => {
        setDrawerIsOpen(false);
    };


    return <div>
        {form && <>
            <div className="flex p-1 md:hidden">
                <input placeholder="Search Question" className="border h-8 border-red-500 w-full p-2 rounded-lg focus:rounded-lg" />
            </div>
            {(form && form.questions.length > 0) ? <QuestionList questions={form.questions} /> :
                <div className="flex flex-col w-full justify-center items-center">
                    <div>
                        Feel free to create questions..
                    </div>
                    <Button onClick={addQuestion} className="bg-gray-800 py-2 w-1/2">
                        Create Question
                    </Button>
                </div>

            }
        </>}


    </div>
}
export default Questions;