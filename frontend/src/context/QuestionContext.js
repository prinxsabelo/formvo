import { useState, createContext } from "react";

export const QuestionContext = createContext();

const QuestionContextProvider = (props) => {


    const [questions, setQuestions] = useState(
        [
            { q_id: '1', form_id: '1', title: "Tell me if i'm fucked.", type: 'TEXT' },
            { q_id: '2', form_id: '1', title: "Miamixxxxxxxxxx?", type: 'TEXT' },
            // { q_id: '3', form_id: '1', title: "Miami fallinf got midnight?", type: 'TEXT' },
            // { q_id: '4', form_id: '1', title: "I be your puff daddy?", type: 'TEXT' },
            // { q_id: '5', form_id: '1', title: "Turn up for me tonight?", type: 'TEXT' },
            // { q_id: '6', form_id: '1', title: "Jealous?", type: 'TEXT' },
            // { q_id: '7', form_id: '1', title: "Aware i love you at all", type: 'TEXT' },
            // { q_id: '8', form_id: '1', title: "Do you need my drama?", type: 'TEXT' },
            // { q_id: '9', form_id: '1', title: "What's your shell about me?", type: 'TEXT' },
            // { q_id: '10', form_id: '1', title: "What's your mission?", type: 'TEXT' },
            // { q_id: '11', form_id: '1', title: "Fallig for my love?", type: 'TEXT' },
            // { q_id: '12', form_id: '1', title: "Do i got your back?", type: 'TEXT' },
            // { q_id: '13', form_id: '1', title: "Can i get drama?", type: 'TEXT' },
            // { q_id: '14', form_id: '1', title: "I be your puff daddy?", type: 'TEXT' },
            // { q_id: '15', form_id: '1', title: "Turn up for me tonight?", type: 'TEXT' },
            // { q_id: '16', form_id: '1', title: "Jealous?", type: 'TEXT' },
            // { q_id: '17', form_id: '1', title: "Aware i love you at all", type: 'TEXT' },
        ]
    );

    const [questionTypes, setQuestionTypes] = useState([
        { typeId: 1, label: "TEXT", type: "TEXT" },
        { typeId: 2, label: "Single Choice", type: "SINGLE", },
        { typeId: 3, label: "CHOICE Choice", type: "CHOICE", },
        { typeId: 4, label: "Rating", type: "STAR", },
        { typeId: 5, label: "Yes or No", type: "YN" }
    ]);

    const [currentType, setCurrentType] = useState("");
    const [typeAction, setTypeAction] = useState("");
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const [questionDetail, setQuestionDetail] = useState({ form_id: null, q_id: null });

    //ShowQuestion function works only on desktop..
    const showQuestion = (form_id, q_id, type) => {
        console.log(form_id, q_id, type);
        setQuestionDetail({ form_id, q_id });
        let questionType = questionTypes.find(q => q.type === type);
        setCurrentType(questionType.type);
        setTypeAction("edit");
    }

    // Develop questions works on both mobile and desktop.. Sending data to db..
    const developQuestion = qn => {
        // console.log(qn);
        const q = questions.map(q => q.q_id === qn.q_id ? qn : q);
        setQuestions(q);
    }
    const addQuestion = type => {
        alert(`add question for ${type}`);

    }
    return <QuestionContext.Provider value={{

        questions, setQuestions,
        currentType, setCurrentType,
        questionTypes, setQuestionTypes,
        showQuestion, developQuestion,
        drawerIsOpen, setDrawerIsOpen,
        typeAction, setTypeAction,
        addQuestion, questionDetail
    }}>
        {props.children}
    </QuestionContext.Provider>
}
export default QuestionContextProvider