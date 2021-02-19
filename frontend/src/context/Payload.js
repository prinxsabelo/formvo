import { createContext, useState } from "react";
import PayloadApi from "./payload-api";
import { v4 as uuid } from "uuid";

export const Payload = createContext();
const PayloadProvider = props => {
    const [form, setForm] = useState();
    const [questionDetail, setQuestionDetail] = useState({ form_id: null, q_id: null });
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
        //  console.log(qn.properties);
        console.log(qn);
        if (qn.type === "RATING" && typeof qn.properties.shape === "undefined") {
            qn.properties = { shape: "star" }
        }
        console.log(qn);
        const questions = form.questions.map(q => q.q_id === qn.q_id ? qn : q);
        setForm({ ...form, questions });


        // //Send to db..
        // console.log(form.form_id, qn);
    }

    //ShowQuestion function works only on desktop..
    const showQuestion = (q_id, type, index) => {
        setQuestionDetail({ q_id, index });
        let questionType = questionTypes.find(q => q.type === type);
        setCurrentType(questionType.type);
        setTypeAction("edit");
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
            addQuestion,
            drawerPosition, setDrawerPosition
        }}>
            {props.children}
        </Payload.Provider>
    )
}
export default PayloadProvider;