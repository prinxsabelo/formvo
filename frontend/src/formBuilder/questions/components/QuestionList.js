
import { useContext } from 'react';
import { Payload } from '../../../context/Payload';
import Button from '../../../shared/collection/Button';
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
            <div className="md:mx-1  md:py-2 q-list ">
                {questions.map((q, index) => {
                    return <QuestionItem {...q} key={index} index={index + 1} />
                })}
            </div>
            <div className="md:hidden absolute bottom-1 p-2 w-full flex justify-between items-center bg-white">
                <div>Total Questions = {questions.length}</div>
                <Button onClick={addQuestion} className="bg-gray-800 py-2">
                    Create Question
                </Button>
                {/* <button onClick={addQuestion} className="bg-gray-800 text-white w-1/2 py-2 my-1">Create Question</button> */}
            </div>
        </div>
    )
}
export default QuestionList;