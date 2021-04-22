import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ResultContext } from "../../context/ResultContext";
import Backdrop from "../../shared/collection/Backdrop";
import Drawer from "../../shared/collection/Drawer";
import QTypeIcon from "../../shared/collection/QTypeIcon";
import { ViewportContext } from "../../context/ViewportContext"

import './Responses.css';
import ResponsesList from "../components/responses/ResponsesList";
const Responses = (props) => {
    const breakpoint = 768;
    const { width } = useContext(ViewportContext);
    let { form_id } = useParams();
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const [responseDetail, setResponseDetail] = useState({});
    const { getResponses, responses } = useContext(ResultContext);
    useEffect(() => {
        getResponses(form_id);
    }, [getResponses, form_id])

    const showResponse = (resp) => {
        setDrawerIsOpen(true);
        setResponseDetail(resp);
    }
    const closeDrawer = () => {
        setDrawerIsOpen(false);
    };
    const handleChange = e => {
        e.preventDefault()
    };
    console.log(responses);
    return (
        <>
            {width > breakpoint ?
                <div className="flex w-full   relative main-container">
                    <div className="w-1/5 border-r-2">
                        SORT
                    </div>
                    <div className="w-10/12 flex flex-col">
                        <div className="bg-red-100 w-full h-12">
                            xx
                        </div>
                        <div className="w-full relative cont overflow-x-auto">
                            <table className="relative w-full border text-base">
                                <thead className="border-b-2 text-sm uppercase tracking-wider p-2">
                                    <tr align="left" className="shadow">
                                        <th className="sticky top-0 bg-white shadow p-4 font-normal" >x</th>
                                        <th className="sticky  top-0  bg-white shadow  p-4 font-normal" >User Name</th>
                                        <th className="sticky top-0 bg-white shadow p-4 font-normal" >Response Info..</th>
                                        {responses.questions && responses.questions.length ?
                                            <>
                                                {responses.questions.map(question =>
                                                    <th key={question.q_id} className="sticky  top-0  bg-white shadow  px-4 py-2  font-normal">
                                                        <p className="truncate ...">
                                                            {question.title}
                                                        </p>
                                                    </th>
                                                )}
                                            </>
                                            :
                                            <th>
                                                xxx
                                        </th>
                                        }
                                    </tr>
                                </thead>
                                {responses.responses &&
                                    <tbody className="text-sm">
                                        {responses.responses.map(response =>
                                            <tr key={response.token} className="border-b   hover:bg-gray-100 cursor-pointer"
                                                onClick={() => showResponse(response)}
                                                >
                                                <td className=" p-4  ">
                                                  
                                                    <input
                                                        name="isGoing"
                                                        type="checkbox"
                                                        checked={true}
                                                        onChange={handleChange} />
                                                  
                                               
                                                </td>
                                                <td >
                                                    <div className="flex p-4">
                                                        Anonymous
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex p-4">
                                                        10-12-2021
                                                    </div>
                                         
                                                </td>
                                                {response.answers.map((answer, index) =>
                                                    <td className="px-6 py-3" key={index}>
                                                        {answer.skipped === false ?
                                                            <>
                                                                {answer.type !== "RATING" ?
                                                                    <div className="flex space-x-1">{answer.text}</div>
                                                                    :

                                                                    <div className="flex space-x-1">
                                                                        {Array.from(Array(parseInt(answer.value)), (rating, index) => {
                                                                            return (

                                                                                <QTypeIcon key={index} color="red" className="w-8 text-gray-800"
                                                                                    type={answer.type} shape={answer.shape} />
                                                                            )
                                                                        })}
                                                                    </div>

                                                                }
                                                            </>
                                                            :
                                                            <div  className="flex space-x-1">
                                                                ..
                                                            </div>
                                                        }
                                                    </td>


                                                )}
                                            </tr>
                                        )}


                                    </tbody>
                                }

                            </table>
                        </div>
                    </div>
                </div>
                :
                <ResponsesList responses={responses.responses} />
            }
            
            {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
            <Drawer show={drawerIsOpen} type="response" responseDetail={responseDetail} />
        </>
    )
}
export default Responses