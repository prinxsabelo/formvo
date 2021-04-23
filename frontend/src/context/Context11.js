import { useState, createContext, useEffect, useContext } from "react";
import { Payload } from "./Payload";
const QUESTION = "QUESTION";
export const Context = createContext();
const ContextProvider = (props) => {
  const sideBarItems = [
    { index: 0, item: "Home", link: "/home" },
    { index: 1, item: "All Forms", link: "/forms" },
    { index: 2, item: "Trash", link: "/trash" },
  ];

  const navItems = [
    { index: 0, item: "Home", link: "/home" },
    { index: 1, item: "Forms", link: "/forms" },
    { index: 2, item: "Trash", link: "/trash" },
    { index: 3, item: "Profile", link: "/profile" },
  ];

  const [headerContent, setHeaderContent] = useState(null);
  const [Dialog, showDialog] = useState(false);

  const [DialogContent, setDialogContent] = useState({
    type: "",
    header: "",
    placeholder: "",
  });

  const [modalShow, setModalShow] = useState(false);

  const closeDialog = () => {
    showDialog(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState("");
  const [confirmDelete, setConfirmDelete] = useState({});
  const closeModal = () => {
    setIsOpen(false);
  };
  // const openDeleteModal = ({ type, message, id }) => {
  //   setConfirmMessage({ type, message, id });
  //   setIsOpen(true);
  // };
  const closeDeleteModal = () => {
    // setConfirmDelete({});
    console.log('xxx');
    setConfirmDelete();
  };
  const handleDelete = () => {
    if (confirmMessage.type == QUESTION) {
      setIsOpen(false);
      setConfirmDelete({ type: QUESTION, q_id: confirmMessage.id });
    }
  };

  return (
    <Context.Provider
      value={{
        headerContent,
        setHeaderContent,
        sideBarItems,
        navItems,
        Dialog,
        showDialog,
        DialogContent,
        setDialogContent,
        closeDialog,
        modalShow,
        setModalShow,
        // ModalContent,
        // setModalContent,
        isOpen,
        closeModal,
        openDeleteModal,
        confirmMessage,
        handleDelete,
        confirmDelete,
        closeDeleteModal,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default ContextProvider;
