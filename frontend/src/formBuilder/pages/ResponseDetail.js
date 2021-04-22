import FormLabel from "../components/FormLabel";
import { ResultContext } from "../../context/ResultContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import QTypeIcon from "../../shared/collection/QTypeIcon";

const ResponseDetail = () =>{
    let { form_id, token } = useParams();
    // console.log(token);
    const { getResponses, responses } = useContext(ResultContext);
    useEffect(() => {
        getResponses(form_id);
    }, [getResponses, form_id])
    let response;
    let index;
    if(responses.responses){
        response = responses.responses.find(resp => resp.token === token);
        index = responses.responses.findIndex(resp => resp.token === token)+1;
     
    }
    // console.log(response);
    // console.log(responses.responses);

    return (
        <>
            {response ?
                    <>
                         <header>
                            <FormLabel />
                            <div className="pl-4 pr-6 py-3 shadow-lg border-b flex items-center justify-between">
                                <div className="">
                                        Respondent {index}
                                </div>
                                <div className="text-sm">
                                        10-20-2011
                                </div>
                            </div>
                        </header>
                        <main className="ra-list">
                            {response.answers && response.answers.length > 0 ?
                                <>
                                    {response.answers.map((answer,index) =>
                                        <div key={index} className="p-4 pt-6 border-b-2 shadow-md">
                                            <div className="flex space-x-4">
                                                <span >{index+1}. </span> 
                                                <span>{answer.title} </span>
                                            </div>
                                            <div className="flex space-x-4 px-8 pt-2">
                                                {answer.skipped === false ?
                                                    <>
                                                        {answer.type !== "RATING" ?
                                                            <div className="px-1">{answer.text}</div>
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
                                                    <div className="px-1">
                                                        ..
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    )}
                                </>
                                :<div>
                                    No answer found..
                                </div>
                            }
                        
                        
                        </main> 
                    </>
                    :
                    <div>RESPODENT NOT FOUND..</div>
            }
                 {/* <header>
                    <FormLabel />
                    <div className="pl-4 pr-6 py-3 shadow-lg border-b flex items-center justify-between">
                        <div className="flex w-11/12 items-center space-x-12">
                            <div>
                                 Respondent {index}
                            </div>
                            <div className="text-sm">
                                10-20-2011
                            </div>
                        </div>
                        <div>
                            :
                        </div>
                    </div>
                </header>
                <main className="ra-list">
                    {response.answers && response.answers.length > 0 ?
                        <>
                            {response.answers.map((answer,index) =>
                                <div key={index} className="px-8 py-4">
                                    {index+1}
                                </div>
                            )}
                        </>
                        :<div>
                            No answer found..
                        </div>
                    }
                   
                 
                </main> */}
        </>
    );
}
export default ResponseDetail;