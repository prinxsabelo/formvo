import { useContext } from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import { Payload } from "../../../context/Payload";

import QTypeIcon from "../../../shared/collection/QTypeIcon";
const QuestionItem = ({ q_id, title, type, properties, index }) => {
    const { showQuestion, questionDetail, setTypeAction } = useContext(Payload);

    const { url } = useRouteMatch();
    return (
        <>
            <div onClick={() => showQuestion(q_id, type, index)}
                className={`hidden md:flex q-item text-sm pr-2 rounded m-2 shadow  whitespace-no-wrap min-h-12 items-center
                border-2 cursor-pointer justify-between break-words relative
                ${questionDetail.q_id === q_id && 'bg-gray-100'}
                `}
            >

                <div className="w-full py-1 flex items-center">
                    <div className="px-2 bg-gray-800 flex absolute top-0 bottom-0 ">
                        <QTypeIcon color="white" className="w-8 text-gray-100" type={type} shape={properties.shape} />
                    </div>
                    <div className="ml-14">
                        <span className="font-semibold mr-1">{index}. </span>{title}
                    </div>
                </div>
                <div className=" q-actions opacity-0 bg-gray-200 w-18 flex absolute top-0 bottom-0 right-0  items-center space-x-4 px-2">
                    <div className="bg-gray-100 p-1 rounded-full" onClick={() => alert('copy')}>
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div className="bg-gray-100 p-1 rounded-full">
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="md:hidden">
                <div className="flex items-center my-1 border-b-2 shadow space-x-1 w-full text-sm font-medium">
                    <NavLink onClick={() => setTypeAction('xxx')} className="flex items-center w-11/12" to={`${url}/${q_id}`}>
                        <div className="flex bg-gray-200 p-2 m-1 rounded-full h-12 w-12 ">
                            <QTypeIcon color="red" className="w-10" type={type} shape={properties.shape} />
                        </div>
                        <div className=" py-4 px-1 ">{title}</div>
                    </NavLink>

                    <div className="flex-auto relative  bg-red-300 text-white  font-black" onClick={() => alert(title)}>
                        <button>
                            <div>::</div>
                            <div>::</div>
                            <div>::</div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default QuestionItem;