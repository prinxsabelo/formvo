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
                console.log(data.form);
                setForm(data.form)

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
    const showQuestion = (q_id, type) => {
        console.log(q_id, type)
        setQuestionDetail({ q_id, type });
        let questionType = questionTypes.find(q => q.type === type);
        if (questionType) {
            setCurrentType(type);
        }
        if (typeAction === "new") {
            setTypeAction("edit");
            if (width <= breakpoint) {
                history.push(`/form/${form.form_id}/questions/${q_id}`);
            }
        }



    }
    const addQuestion = type => {
        const id = form.questions.length + 1;
        const qn = {
            title: "",

            type,
            q_id: `${id}`,
            properties: {
                "shape": "star",
                "allow_multiple_selection": false,
                "randomize": false,
                "responses": [],
                "choices": []
            }
        }
        console.log(qn);
        if (form.questions) {
            form.questions = [...form.questions, qn];
        } else {
            console.log(form);
            form.questions = [];
            form.questions.push(qn);
            console.log(qn);
        }

        setForm(form);
        if (form.questions) {
            let qIndex = form.questions.findIndex(({ q_id }) => q_id === qn.q_id);
            let q_id = form.questions[qIndex].q_id;
            showQuestion(q_id, type);
        }


    }
    const copyQuestion = question => {
        let index = form.questions.findIndex(q => q.q_id === question.q_id);
        // console.log(index);
        // console.log(form.questions[index]);

        const { title, type, properties } = form.questions[index];
        console.log(title, type, properties);

        const qn = {
            q_id: uuid(),
            title,
            type,
            properties,
        }
        console.log(qn);
        const questions = form.questions.concat(qn);
        setForm({ ...form, questions });
        showQuestion(qn.q_id, qn.type)
        // form.questions.splice(index + 1, 0, qn);
        // setForm(form => { });
        // 
    }
    const deleteQuestion = question => {
        //After deleting pick and set the higher question for access..
        let index = form.questions.findIndex(q => q.q_id === question.q_id);
        console.log(form);
        console.log(form.questions[index]);
        console.log(index);
        if (index === 0) {
            if (form.questions.length === 1) {
                console.log('xxx');
                form.questions.splice(index, 1);
                setForm(form => console.log(form));

            } else {
                form.questions.splice(index, 1);
                setForm(form);
            }
        }
        // if (index === 0) {
        //     form.questions = form.questions.filter(x => x.q_id !== question.q_id);
        //     setForm(form => console.log('xx'));
        // }
        else {
            console.log('normal 2');
            // console.log(form);
            const { type, q_id } = form.questions[index - 1];
            showQuestion(q_id, type);
            form.questions = form.questions.filter(x => x.q_id !== question.q_id);
            setForm(form);
        }

        // console.log(form);
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
            addQuestion, deleteQuestion, copyQuestion,
            drawerPosition, setDrawerPosition
        }}>
            {props.children}
        </Payload.Provider>
    )
}
export default PayloadProvider;