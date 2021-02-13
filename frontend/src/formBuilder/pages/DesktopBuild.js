import { useContext, useEffect, useState } from "react";
import { Payload } from "../../context/Payload";
import BuildHeader from "../components/BuildHeader";
import Properties from "../questions/components/Properties";
import QuestionType from "../questions/components/QuestionType";

const DesktopBuild = () => {
    const { questionDetail, form, currentType, developQuestion } = useContext(Payload);
    const { q_id, index } = questionDetail;

    const [question, setQuestion] = useState();

    const changeHandler = e => {
        const { q_id, properties, type, title, response } = question;

        if (e.target.name === "title") {
            developQuestion({ title: e.target.value, response, q_id, type, properties });
        } else if (e.target.name === "response") {
            developQuestion({ response: e.target.value, title, q_id, type, properties });
        }

    }
    useEffect(() => {
        if (form && form.questions) {
            let q = (form.questions.find(x => x.q_id === q_id));
            setQuestion(q);
            if (q && (q.type !== currentType)) {
                let { q_id, title, response, properties } = q;

                developQuestion({ title, response, q_id, type: currentType, properties });
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
                        <form className="flex flex-col md:justify-end  p-1 bg-white md:w-3/4 border shadow">
                            <div>
                                <textarea className="px-4 py-2 border w-full text-lg rounded-md question-textarea
                                    focus:outline-none focus:border-red-400 hover:shadow-md" name="title"
                                    onChange={changeHandler} placeholder="Type your Question Here.." value={question.title}
                                ></textarea>
                                <input placeholder="Give a response for your question if you like.."
                                    value={question.response} onChange={changeHandler} name="response"
                                    className="border w-full px-4 py-1 rounded-md  focus:outline-none focus:border-red-400" />
                            </div>

                            {(question && question.type) &&
                                <>
                                    <QuestionType {...question} />

                                </>
                            }

                        </form>
                    </>
                    :
                    <div>Pick Question</div>
                }

            </div>
        </>
    )

}
export default DesktopBuild;