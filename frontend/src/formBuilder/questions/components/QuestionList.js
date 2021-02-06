
import QuestionItem from './QuestionItem';

const QuestionList = (props) => {


    const { questions } = props;

    return (
        <div className="md:mx-1  md:py-2 q-list ">
            {questions.map((q, index) => {

                return <QuestionItem {...q} key={index} index={index + 1} />
                // let qType = questionTypes.find(qt => qt.type === q.type);

                // return <QuestionItem {...q} key={q.questionId} index={index + 1} qType={qType} />
            }

            )}

        </div>
    )
}
export default QuestionList;