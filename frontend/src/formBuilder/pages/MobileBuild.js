import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Payload } from "../../context/Payload";
import FormLabel from "../components/FormLabel";
import BuildHeader from "../components/BuildHeader";
import Button from "../../shared/collection/Button";
import QuestionType from "../questions/components/QuestionType";
import Properties from "../questions/components/Properties";

const MobileBuild = () => {

    const { form, setForm, getForm, currentType, setCurrentType, developQuestion } = useContext(Payload);
    let { form_id, q_id } = useParams();

    const [question, setQuestion] = useState();
    useEffect(() => {
        if (!form) {
            getForm(form_id);
        }
        if (form && form.questions) {
            let q = (form.questions.find(x => x.q_id === q_id));

            if (q.type && !currentType) {
                setCurrentType(q.type);
            }
            //  console.log(q.properties);
            if (q && (q.type !== currentType)) {
                let { q_id, title, response, properties } = q;
                developQuestion({ title, q_id, response, properties, type: currentType });
            }
            setQuestion(q);
            //  console.log(question);
        }
    }, [q_id, form_id, form, setForm, getForm, currentType, setCurrentType, developQuestion]);

    const changeHandler = e => {
        //  console.log(e);
        const { q_id, properties, type, title, response } = question;
        // console.log(q_id);
        // Check locally.. until save..
        if (e.target.name === "title") {
            developQuestion({ title: e.target.value, response, q_id, type, properties });
        } else if (e.target.name === "response") {
            developQuestion({ response: e.target.value, title, q_id, type, properties });
        }


    }
    const saveQuestion = (q) => {
        //  console.log(q);
        developQuestion(q);
        // developQuestion({ title: e.target.value, q_id, type, properties });
    }
    return (
        <>
            <header>
                <FormLabel />
            </header>
            <main>
                {currentType && question ? (
                    <div>
                        <BuildHeader {...question}  >
                            <Button onClick={() => saveQuestion(question)}>
                                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </Button>
                        </BuildHeader>

                        <div className="w-full bg-white h-5/6  flex justify-center mobile-build
                                                px-1 shadow rounded  relative">
                            <form className="flex flex-col space-y-2 w-full ">
                                <div>

                                    <textarea className="p-2 border w-full text-base rounded-md question-textarea
                                    focus:outline-none focus:shadow-md hover:shadow-md " name="title"
                                        placeholder="Type your Question Here.." value={question.title} onChange={changeHandler}
                                    >
                                    </textarea>
                                    <input placeholder="Give a response for your question if you like.."
                                        value={question.response} onChange={changeHandler} name="response"
                                        className="border-2 border-t-4 w-full p-1" />
                                </div>
                                <QuestionType  {...question} />
                                <Properties {...question} />
                            </form>
                        </div>
                        <footer className="fixed bottom-0 bg-white border-t w-full p-3 tracking-wider uppercase text-sm">
                            form made of love for you..
                        </footer>
                    </div>

                ) :
                    <div>
                        Not Found..
                    </div>
                }
            </main>



            {/* */}
        </>
    )
}
export default MobileBuild;