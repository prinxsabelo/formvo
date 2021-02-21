import { createContext, useContext, useState } from "react";
import PayloadApi from "./payload-api";
import { v4 as uuid } from "uuid";
import { ViewportContext } from "./ViewportContext";
import { Redirect, useHistory } from "react-router-dom";

export const Payload = createContext();


const breakpoint = 768;

const PayloadProvider = props => {
    const history = useHistory();
    const { width } = useContext(ViewportContext);
    const [form, setForm] = useState();
    const [questionDetail, setQuestionDetail] = useState({ q_id: null, index: 0 });
    const [currentType, setCurrentType] = useState("");
    const [typeAction, setTypeAction] = useState("");
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const [drawerPosition, setDrawerPosition] = useState("left");
    const [question, setQuestion] = useState();
    const [questionTypes, setQuestionTypes] = useState([
        { typeId: 1, label: "Text", type: "TEXT" },
        { typeId: 2, label: "Choice", type: "CHOICE", },
        { typeId: 4, label: "Rating", type: "RATING", },
        { typeId: 5, label: "Yes/No", type: "YN" }
    ]);

    const getForm = (form_id) => {

        const fetchForm = async () => {
            try {
                const data = await PayloadApi;
                const { form } = data;
                setForm(form);
            } catch (err) { }
        };
        fetchForm();
    }
    const developQuestion = qn => {

        if (qn.type === "RATING" && typeof qn.properties.shape === "undefined") {
            qn.properties = { shape: "star" }
        }

        const questions = form.questions.map(q => q.q_id === qn.q_id ? qn : q);
        setForm({ ...form, questions });

    }

    //ShowQuestion function works only on desktop..
    const showQuestion = (q_id, type, index) => {
        console.log(q_id, type, index)
        setQuestionDetail({ q_id, type, index });

        let questionType = questionTypes.find(q => q.type === type);
        if (questionType) {
            console.log('xxx');
            setCurrentType(questionType.type);
        }
        console.log(questionDetail)
        setTypeAction("edit");
        if (width <= breakpoint) {
            history.push(`/form/${form.form_id}/questions/${q_id}`);
        }

    }
    const addQuestion = type => {
        const qn = {
            title: "",

            type,
            q_id: uuid(),
            properties: {
                "shape": "star",
                "allow_multiple_selection": false,
                "randomize": false,
                "responses": [],
                "choices": []
            }
        }
        form.questions = [...form.questions, qn];
        setForm(form);
        let qIndex = form.questions.findIndex(({ q_id }) => q_id === qn.q_id);
        let q_id = form.questions[qIndex].q_id;
        showQuestion(q_id, type, qIndex += 1);

    }
    const deleteQuestion = question => {
        let index = question.index - 1;
        console.log(question, form.questions[question.index - 1]);
        if (index != -1) {
            console.log(form.questions[index]);
            const { type, q_id } = form.questions[index];
            showQuestion(q_id, type, index);
            form.questions = form.questions.filter(x => x.q_id !== question.q_id);
            setForm(form);
        }

        //
    }
    return (
        <Payload.Provider value={{
            getForm, setForm,
            form, questionDetail,
            showQuestion, developQuestion,
            currentType, setCurrentType,
            questionTypes, setQuestionTypes,
            drawerIsOpen, setDrawerIsOpen,
            typeAction, setTypeAction,
            question, setQuestion,
            addQuestion, deleteQuestion,
            drawerPosition, setDrawerPosition
        }}>
            {props.children}
        </Payload.Provider>
    )
}
export default PayloadProvider;