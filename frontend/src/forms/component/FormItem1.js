import { useContext, useState } from "react";

import { NavLink, useHistory } from "react-router-dom";
import { FormContext } from "../../context/FormContext";
import Backdrop from "../../shared/collection/Backdrop";
import Pop from "../../shared/collection/Pop";
import ActionItem from "./ActionItem";
const FormItem = ({ form, checkDelete }) => {
  const [pop, setPop] = useState(false);
  const history = useHistory();
  const { editForm } = useContext(FormContext);
  const openPop = () => {
    setPop(true);
  };
  const copy = () => {
    console.log({});
  };
  const del = () => {
    setPop(false);
    checkDelete(form_id);
  };
  const rename = () => {
    editForm(form);
    setPop(false);
  };
  const settings = () => {
    history.push(`form/${form_id}/settings`);
  };

  const handleAction = (checkAction) => {
    console.log(checkAction);
    const { action } = checkAction;
    if (action === "rename") {
      rename();
    } else if (action === "delete") {
      checkDelete(form_id);
    }
  };
  const ActionsArr = [
    {
      id: 1,
      action: "share",
      name: "Share",
      link: true,
    },
    {
      id: 2,
      action: "results",
      name: " Results",
      link: true,
    },

    {
      id: 3,
      action: "delete",
      name: "Delete",
      link: false,
    },

    {
      id: 4,
      action: "copy",
      name: "Copy",
      link: false,
    },
    {
      id: 5,
      action: "rename",
      name: "Rename",
      link: false,
    },
    {
      id: 6,
      action: "settings",
      name: "Settings",
      link: false,
    },
  ];

  const { form_id, title, no_questions, no_responses, updated_at } = form;
  return (
    <>
      <div
        className=" md:border-2  md:rounded-lg md:flex-row  md:m-3 hover:shadow-md
                                shadow-sm   border-b-4   md:flex flex-col w-full 
                               
                        "
      >
        {/* Mobile Device Design Here.. */}
        <div className="md:hidden flex items-center border-b py-2 space-x-2  bg-red-400">
          <NavLink
            to={`/form/${form_id}/questions`}
            className="flex w-10 h-10 justify-center items-center p-2 ml-1 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="w-8 h-8 md:hidden"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z"
                clipRule="evenodd"
              />
            </svg>
          </NavLink>
          <NavLink
            to={`/form/${form_id}/questions`}
            className="flex-auto w-10/12"
          >
            <h3 className="text-lg "> {title}</h3>
            <div className="flex  space-x-4  w-full">
              <p className="text-xs">Modified on {updated_at} </p>
             
            </div>
          </NavLink>
          <div
            className="flex-auto w-16 border-8 py-2 relative font-bold font-black
                                    flex items-center justify-center"
            onClick={() => openPop()}
          >
            <div>::</div>
          </div>
        </div>

        <div className="hidden md:flex w-full">
          <NavLink
            className="w-6/12 flex p-2 items-center "
            to={`/form/${form_id}/build`}
          >
            <div className="w-10/12">
              <h3 className="text-xl"> {title}</h3>
              <p className="text-sm"> modified on {updated_at}</p>
            </div>
            <div className="w-24  whitespace-nowrap text-sm tracking-wide">
              <div>{no_questions} questions</div>
              <div>{no_responses} responses</div>
            </div>
          </NavLink>
          <div className="flex-auto flex space-x-3 w-full md:w-auto p-1 ">
            {ActionsArr.map((a) => (
              <ActionItem
                {...a}
                key={a.id}
                form_id={form_id}
                onHandle={() => handleAction(a)}
              />
            ))}
          </div>
        </div>
      </div>
      <Pop
        show={pop}
        message="form"
        copy={() => copy()}
        del={() => del()}
        rename={() => rename()}
        settings={() => settings()}
      />
      {pop && <Backdrop onClick={() => setPop(false)} />}
    </>
  );
};
export default FormItem;
