import { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { Context } from '../../context/Context';
import { FormContext } from '../../context/FormContext';
import Backdrop from './Backdrop';

const ModalOverLay = (props) => {

    const { title, setTitle, submitForm } = useContext(FormContext);
    const changeHandler = e => {
        setTitle(e.target.value);
    }
    let content = useState(null);
    if (props.type === "form") {
        content = (
            <form className={` ${props.className}`}>
                <div className="py-4 border-b text-center">
                    <h3 className="text-xl font-black tracking-wide text-black">{props.header}</h3>
                </div>
                <div className="py-6">
                    <input value={title} placeholder={props.placeholder} onChange={changeHandler}
                        className="px-4 py-2 w-full border-2 rounded" />
                </div>
                <div className="flex justify-between space-x-4">
                    <button type="button" className="text-md underline font-black " onClick={props.closeModal}>
                        Cancel
                    </button>
                    <button onClick={submitForm}
                        className="px-4 py-2 text-xl  rounded bg-black text-white rounded">
                        Save
                    </button>
                </div>
            </form>
        )

    } else {
        content = "xxx";
    }

    return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
}
const Modal = props => {

    const { showModal, setShowModal, modalContent } = useContext(Context);
    const closeModal = () => {
        setShowModal(false);
    }
    return <>   {showModal && <>
        <Backdrop onClick={closeModal} />
        <div>
            <ModalOverLay {...modalContent} closeModal={closeModal} />
        </div>
    </>
    }
    </>
}
export default Modal;