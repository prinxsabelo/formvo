import { useContext, useEffect, useState } from "react";
import { Payload } from "../../context/Payload";
import Button from "../../shared/collection/Button";
import ToggleSwitch from "../../shared/collection/ToggleSwitch";
import BuildHeader from "../components/BuildHeader";
import BuildRequired from "../components/BuildRequired";
import Properties from "../questions/components/Properties";
import QuestionType from "../questions/components/QuestionType";

const DesktopBuild = () => {
    const { showQuestion, questionDetail, form, currentType, developQuestion,
        drawerIsOpen, setDrawerIsOpen, setTypeAction, setDrawerPosition } = useContext(Payload);
    const { q_id } = questionDetail;

    const [question, setQuestion] = useState();
    const [index, setIndex] = useState(0);
    const arr = [{
        id: 1,
        label: "Required",
        value: false,
        name: "required"
    }];
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
    };

    const goto = (checker, q_id) => {
        console.log(checker, q_id);
        let index = form.questions.findIndex(quest => quest.q_id === q_id)
        if (checker === 'backward') {
            if (form.questions[index - 1]) {
                const { q_id, type } = form.questions[index - 1];
                showQuestion(q_id, type);
            }
        }
        else if (checker === 'forward') {
            if (form.questions[index + 1]) {
                const { q_id, type } = form.questions[index + 1];
                showQuestion(q_id, type);
            }
        }
    }

    useEffect(() => {
        if (form && form.questions) {
            let qIndex = form.questions.findIndex(qn => qn.q_id === q_id);
            setIndex(qIndex + 1);
            let q = form.questions[qIndex];

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
    if (question && question.properties) {
        const { properties } = question;
        const { required } = properties
        arr[0].value = required;

    }

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
                            <BuildRequired   {...question} />
                            <Button onClick={() => goto('backward', question.q_id)} className=" text-gray-500 bg-white flex items-center justify-center">
                                {index > 1 ?
                                    <svg className="w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                                    </svg>
                                    :
                                    <span>.</span>
                                }
                            </Button>
                            <Button onClick={() => goto('forward', question.q_id)} className=" text-gray-500 bg-white flex items-center justify-center" >
                                {index < form.questions.length ?

                                    < svg className="w-6 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>

                                    :
                                    <span>.</span>
                                }
                            </Button>
                            <Button className="bg-gray-900 uppercase" onClick={addQuestion}>Add Question</Button>
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