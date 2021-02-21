import { NavLink } from "react-router-dom";
import FormLink from "./FormLink";
const FormItem = ({ form, index }) => {

    const linksArr = [
        {
            id: 1,
            action: "share",
            name: "Share",
        },
        {
            id: 2,
            action: "results",
            name: " Results",
        },
        {
            id: 3,
            action: "build",
            name: "Edit"
        }
    ]

    return (

        <div className=" md:border-2  md:rounded-lg md:flex-row  md:px-6 md:py-3 md:m-3 hover:shadow

                        border-b-4   md:flex flex-col w-full 
                               
                        ">
            {/* Mobile Device Design Here.. */}
            <div className="md:hidden flex items-center border-b py-2 space-x-2">
                <NavLink to={`/form/${form.form_id}/questions`}
                    className="flex w-10 h-10 justify-center items-center p-2 ml-1 bg-red-400 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-8 h-8 md:hidden" fill="currentColor">
                        <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" />
                    </svg>
                </NavLink>
                <NavLink to={`/form/${form.form_id}/questions`} className="flex-auto w-10/12">

                    <h3 className="text-lg "> {form.title}</h3>
                    <div className="flex  space-x-4  w-full ">
                        <p className="text-xs">Modified on {form.date}</p>
                        <p className="text-xs">10 response</p>
                    </div>
                </NavLink>
                <div className="flex-auto w-16 border-8 py-2 relative font-bold font-black
                                    flex items-center justify-center" onClick={() => alert(form.title)}>
                    <div>::</div>
                </div>
            </div>
            {/* Large Device Design Here.. */}
            <div className="hidden md:flex space-x-16 w-full items-center ">
                <NavLink className="w-1/2" to={`/form/${form.form_id}/build`} >
                    <h3 className="text-xl"> {form.title}</h3>
                    <p className="text-sm"> modified on {form.date}</p>
                </NavLink>
                <div className="w-24  whitespace-nowrap">
                    {form.response} responses
                </div>
            </div>
            <div className="flex space-x-6 w-full md:w-auto p-1">
                {linksArr.map(a => <FormLink {...a} key={a.id} form_id={form.form_id} />)}
            </div>
        </div>


    )


}
export default FormItem;