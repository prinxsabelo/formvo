import { createContext, useContext, useState } from "react";
import PayloadApi from "./payload-api";
import { v4 as uuid } from "uuid";
import { ViewportContext } from "./ViewportContext";
import { Redirect, useHistory } from "react-router-dom";
import ReportApi from "./report-api";

export const Payload = createContext();


const breakpoint = 768;

const PayloadProvider = props => {
    const history = useHistory();
    const { width } = useContext(ViewportContext);
    const [form, setForm] = useState();
    const [report, setReport] = useState([]);
    const [questionDetail, setQuestionDetail] = useState({ q_id: null, index: 0 });
    const [currentType, setCurrentType] = useState("");
    const [typeAction, setTypeAction] = useState("");

    //Default Drawer position should be left..
    const [drawerPosition, setDrawerPosition] = useState("left");
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

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
        console.log(form);
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
            q_id: uuid(),
            properties: {
                "shape": "star",
                "allow_multiple_selection": false,
                "randomize": false,
                "responses": [],
                "choices": []
            }
        }
        console.log(qn);

        form.questions = [...form.questions, qn];

        let qIndex = form.questions.findIndex(({ q_id }) => q_id === qn.q_id);
        let q_id = form.questions[qIndex].q_id;
        showQuestion(q_id, type);
    }

    const copyQuestion = question => {
        let index = form.questions.findIndex(q => q.q_id === question.q_id);

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

    }

    const deleteQuestion = question => {
        console.log(question.q_id)
        let index = form.questions.findIndex(q => q.q_id === question.q_id);

        console.log(index);
        console.log(form.questions, index);
        if (index > 0) {
            const { type, q_id } = form.questions[index - 1];
            showQuestion(q_id, type);
        }

        const questions = form.questions.filter(({ q_id }) => q_id !== question.q_id);
        setForm({ ...form, questions });
    }


    const getReport = (form_id) => {
        const fetchReport = async () => {
            try {
                const data = await ReportApi;

                setReport(data.boxes)

            } catch (err) { }
        };
        fetchReport();
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
            drawerPosition, setDrawerPosition,

            getReport, report
        }}>
            {props.children}
        </Payload.Provider>
    )
}
export default PayloadProvider;