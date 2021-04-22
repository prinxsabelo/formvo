import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ResultContext } from "../../context/ResultContext";
import Backdrop from "../../shared/collection/Backdrop";
import Drawer from "../../shared/collection/Drawer";
import QTypeIcon from "../../shared/collection/QTypeIcon";
import { ViewportContext } from "../../context/ViewportContext"

import './Responses.css';
import ResponsesList from "../components/responses/ResponsesList";
import Pop from "../../shared/collection/Pop";
const Responses = (props) =>{
    let { form_id } = useParams();
    const breakpoint = 768;
    const { width } = useContext(ViewportContext);
    const { getFormResponses, formResponses} = useContext(ResultContext);
    const [ respondents, setRespondents ] = useState([]);
    const [ detail, setDetail] = useState({});
    const [ questions, setQuestions ] = useState([]);
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const [arr, setArr] = useState([]);

    const showRespondent = (resp) => {
        setDrawerIsOpen(true);
        setDetail(resp);
    }
    const closeDrawer = () => {
        setDrawerIsOpen(false);
    };
    const handleRespondent = event => {
        const { name, checked } = event.target;
        let index = respondents.findIndex(x => x.token === name);
        if(checked){
            console.log(name);
            setArr([...arr,name]);
            respondents[index].isChecked = true;
      
        }else{
            respondents[index].isChecked = false;
            const newArr = arr.filter(x => x !== name);
            setArr(newArr);
        }
        setRespondents(respondents);
    };
    const clearAll = () =>{
        let resp = respondents.map(x => {
            x.isChecked = false;
            return x;
        })
        setRespondents(resp);
        setArr([]);
    }
    const selectAll =() =>{
        // console.log(respondents);
        const newArr=[];
        let resp = respondents.map(x => {
            x.isChecked = true;
            newArr.push(x.token);
            return x;
        })
        setArr(newArr);
        setRespondents(resp);
    }
    const handleAll = (event) =>{
        const { name, checked } = event.target;
        if(checked){
            selectAll();
        }else{
            clearAll();
        }
    }
    const checkDelete = () => {
        alert('xx');
        // showQuestion(q_id, type);
        // setDialogContent({
        //     type: 'delete',
        //     message: `When you delete question it is irreversible`,
        //     q_id
        // })
        // showDialog(true);
    }
    useEffect(() => {
        getFormResponses(form_id);
        // console.log(formResponses);
        if(formResponses){
            if(formResponses.questions){
                let q = formResponses.questions;
                if(q){
                    setQuestions(q);
                }
            }
            if(formResponses.respondents){
                let resp =  formResponses.respondents;
                if(resp){
                    setRespondents(resp);
                }
            }
        }

    }, [getFormResponses, form_id, formResponses]);
    // console.log(respondents,questions);
    return (
        <>
            {width > breakpoint ?
                  <div className="flex w-full px-8   main-container">
                   
                    <div className="w-full flex flex-col shadow-lg p-1 m-1">
                            <div className="bg-red-100 w-full h-12">
                               
                            </div>
                            <div className="w-full cont overflow-x-auto">
                                <table className=" w-full border text-base">
                                <thead className="border-b-2 text-sm uppercase tracking-wider p-2">
                                    <tr align="left" className="shadow">
                                        <th className="sticky top-0 bg-white shadow p-4 font-normal" >
                                            <input
                                                name="all"
                                                className="form-checkbox"
                                                type="checkbox"
                                                onChange={handleAll}
                                            />
                                        </th>
                                        <th className="sticky  top-0  bg-white shadow  p-4 font-normal" >User Name</th>
                                        <th className="sticky top-0 bg-white shadow p-4 font-normal" >Response Info..</th>
                                        {questions && questions.length > 0 &&
                                            <>
                                                {questions.map(question =>
                                                    <th key={question.q_id} className="sticky  top-0  bg-white shadow  px-4 py-2  font-normal">
                                                        <p className="truncate ...">
                                                            {question.title}
                                                        </p>
                                                    </th>
                                                )}
                                            </>
                                        }
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    {respondents && respondents.length > 0 &&
                                        <>
                                          {respondents.map((respondent,index) =>
                                            <tr key={respondent.token} className="border-b   hover:bg-gray-100 cursor-pointer" >
                                                <td className=" p-4"  >
                                                 
                                                    <input
                                                        name={respondent.token}
                                                        className="form-checkbox"
                                                        type="checkbox"
                                                        checked = {respondent.isChecked}
                                                        onChange={handleRespondent} />
                                                </td>
                                                <td onClick={() => showRespondent(respondent)}>
                                                    <div className="flex p-4">
                                                            Respondent {index+1}
                                                    </div>
                                                </td>
                                                <td onClick={() => showRespondent(respondent)}>
                                                      <div className="flex p-4">
                                                        10-12-2021
                                                    </div>
                                                </td>
                                                {respondent.answers.map((answer, index) =>
                                                    <td className="px-4 py-2" key={index}      onClick={() => showRespondent(respondent)}>
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
                                        </>
                                    }
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                :
                <div>
                    Mobile
                </div>
        
        }
        {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
        <Drawer show={drawerIsOpen} type="response" detail={detail} />
        {arr.length > 0 && <> <Pop  show={true} total={respondents.length}  del={() => checkDelete()}  clearAll={() => clearAll()} selectAll={() => selectAll()} length={arr.length} type="response" /> </> }
            
        </>
    )
}

export default Responses