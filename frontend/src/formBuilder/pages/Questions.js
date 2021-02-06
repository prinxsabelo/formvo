import { useContext } from "react";
import { Payload } from "../../context/Payload";
import QuestionList from "../questions/components/QuestionList"

const Questions = (props) => {
    const { form } = useContext(Payload);
    return <div>
        <div className="flex p-1">
            <input placeholder="Search Question" className="border h-8 border-red-500 w-full p-2 rounded-lg focus:rounded-lg" />
        </div>
        {(form && form.questions) ? <QuestionList questions={form.questions} /> : 'xxx'}

    </div>
}
export default Questions;