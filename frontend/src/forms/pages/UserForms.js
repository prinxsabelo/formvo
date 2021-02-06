import { useContext, useEffect } from "react";
import { FormContext } from "../../context/FormContext";
import CustomHeader from "../../shared/header/CustomHeader";
import FormList from "../component/FormList";
const UserForms = () => {
    useEffect(() => {

    })
    const { forms } = useContext(FormContext);
    return (
        <>
            <div className="md:mx-2">
                <CustomHeader />
                <FormList forms={forms} />
            </div >

        </>
    )



}
export default UserForms;