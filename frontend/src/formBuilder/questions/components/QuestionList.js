
import { useContext } from 'react';
import { Payload } from '../../../context/Payload';
import QuestionItem from './QuestionItem';

const QuestionList = (props) => {
    const { drawerIsOpen, setDrawerIsOpen, setTypeAction, questionDetail,
        drawerPosition, setDrawerPosition } = useContext(Payload);
    const addQuestion = () => {
        drawerIsOpen
            ? closeDrawer()
            : openDrawer();
    }
    const openDrawer = () => {

        setTypeAction("new");
        setDrawerPosition("left")
        setDrawerIsOpen(true);

    };
    const closeDrawer = () => {
        setDrawerIsOpen(false);

    };
    const { questions } = props;

    return (
        <div className="relative">
            <div className="md:mx-1  md:py-2 q-list pb-8">
                {questions.map((q, index) => {
                    return <QuestionItem qlength={questions.length} {...q} key={q.q_id} index={index += 1} />
                })}
            </div>

        </div>
    )
}
export default QuestionList;