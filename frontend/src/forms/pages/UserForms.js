import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import { FormContext } from "../../context/FormContext";
import DeleteModal from "../../shared/collection/DeleteModal";
import CustomHeader from "../../shared/header/CustomHeader";
import FormList from "../component/FormList";
const UserForms = () => {
  const { openDeleteModal, closeModal } = useContext(Context);
  const { forms, deleteForm } = useContext(FormContext);
  const [formId, setFormId] = useState();
  useEffect(() => {
    console.log(forms);
  }, [forms]);
  const checkDelete = (form_id) => {
    setFormId(form_id);
    openDeleteModal();
  };
  const handleDelete = () => {
    closeModal();
    deleteForm(formId);
  };
  return (
    <>
      <div className="md:mx-2">
        <CustomHeader />
        <FormList forms={forms} checkDelete={checkDelete} />
      </div>
      <DeleteModal
        onDelete={handleDelete}
        message="Hmnm.. Really want to erase form?"
      />
    </>
  );
};
export default UserForms;
