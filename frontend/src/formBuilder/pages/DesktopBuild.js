import { useContext, useEffect, useState } from "react";
import { Payload } from "../../context/Payload";
import Button from "../../shared/collection/Button";
import BuildHeader from "../components/BuildHeader";
import Properties from "../questions/components/Properties";
import QuestionType from "../questions/components/QuestionType";

const DesktopBuild = () => {
    const { questionDetail, form, currentType, developQuestion,
        drawerIsOpen, setDrawerIsOpen, setTypeAction, setDrawerPosition } = useContext(Payload);
    const { q_id, index } = questionDetail;

    const [question, setQuestion] = useState();
    const addQuestion = () => {
        drawerIsOpen
            ? closeDrawer()
            : openDrawer();
    }
    const openDrawer = () => {
        setTypeAction("new");
        setDrawerPosition("right");
        setDrawerIsOpen(true);
    };
    const closeDrawer = () => {
        setDrawerIsOpen(false);
    };
    const changeHandler = e => {
        const { q_id, properties, type, title } = question;

        if (e.target.name === "title") {
            developQuestion({ title: e.target.value, q_id, type, properties });
        }
    }
    useEffect(() => {
        if (form && form.questions) {
            let q = (form.questions.find(x => x.q_id === q_id));
            setQuestion(q);
            if (q && (q.type !== currentType)) {
                let { q_id, title, properties } = q;

                developQuestion({ title, q_id, type: currentType, properties });
            }
            // Send Form Data here.. for db update
            if (form) {
                // console.log(form);
            }

        }
    }, [form, question, q_id, currentType, developQuestion]);

    return (
        <>
            <div className="hidden md:flex flex-col items-center build shadow-xl p-2 m-2 ">
                {currentType && question ?
                    <>
                        <BuildHeader  {...question} >
                            <Properties {...question} index={index} />
                        </BuildHeader>
                        <form className="flex flex-col md:justify-end  p-1 bg-white w-3/4 border shadow">
                            <div>
                                <textarea autoFocus={true} className="px-4 py-2 border w-full text-xl rounded-md question-textarea
                                    focus:outline-none focus:border-red-400 hover:shadow-md" name="title"
                                    onChange={changeHandler} placeholder="Type your Question Here.." value={question.title}
                                ></textarea>

                            </div>

                            {(question && question.type) &&
                                <>
                                    <QuestionType {...question} />

                                </>
                            }

                        </form>
                        <div className=" w-3/4 flex justify-end p-2 shadow">
                            <Button className="bg-gray-800" onClick={addQuestion}>Add Question</Button>
                        </div>
                    </>
                    :
                    <div>Pick Question</div>
                }

            </div>
        </>
    )

}
export default DesktopBuild;