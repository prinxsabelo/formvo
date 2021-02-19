
import QuestionItem from './QuestionItem';

const QuestionList = (props) => {


    const { questions } = props;

    return (
        <>
            <div className="md:mx-1  md:py-2 q-list ">
                {questions.map((q, index) => {

                    return <QuestionItem {...q} key={index} index={index + 1} />
                    // let qType = questionTypes.find(qt => qt.type === q.type);

                    // return <QuestionItem {...q} key={q.questionId} index={index + 1} qType={qType} />
                }

                )}

            </div>
            <div className="sticky bottom-12 mb-2 left-0 right-0 bg-green-500 ">
                <button className="w-12 h-12 w-full">Add Question</button>
            </div>
        </>
    )
}
export default QuestionList;