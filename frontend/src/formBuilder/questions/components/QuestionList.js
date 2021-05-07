import { useContext, useState } from "react";
import { Context } from "../../../context/Context";
import { QuestionContext } from "../../../context/QuestionContext";
import DeleteModal from "../../../shared/collection/DeleteModal";
import QuestionItem from "./QuestionItem";

const QuestionList = (props) => {
  const { deleteQuestion } = useContext(QuestionContext);

  const { openDeleteModal, closeModal } = useContext(Context);
  const [question, setQuestion] = useState();

  const checkDelete = (q) => {
    setQuestion(q);
    openDeleteModal();
  };
  const handleDelete = () => {
    closeModal();
    deleteQuestion(question);
  };
  const { questions } = props;

  return (
    <>
      <div className="relative">
        <div className="md:mx-1  md:py-2 q-list pb-8">
          {questions.map((q, index) => {
            return (
              <QuestionItem
                qlength={questions.length}
                {...q}
                key={q.q_id}
                index={(index += 1)}
                checkDelete={checkDelete}
              />
            );
          })}
        </div>
      </div>
      <DeleteModal
        onDelete={handleDelete}
        message="Do you really want to delete question?"
      />
    </>
  );
};
export default QuestionList;
