import { useState, createContext } from "react";

export const Context = createContext();
const ContextProvider = (props) => {

        const sideBarItems = [
                { index: 0, item: 'Home', link: '/home' },
                { index: 1, item: 'All Forms', link: '/forms' },
                { index: 2, item: 'Trash', link: '/trash' }
        ]

        const navItems = [
                { index: 0, item: 'Home', link: '/home' },
                { index: 1, item: 'Forms', link: '/forms' },
                { index: 2, item: 'Trash', link: '/trash' },
                { index: 3, item: 'Profile', link: '/profile' }
        ]

        const [headerContent, setHeaderContent] = useState(null);
        const [showModal, setShowModal] = useState(false);
        const [modalContent, setModalContent] = useState(null);
        return <Context.Provider value={{

                headerContent, setHeaderContent,
                sideBarItems, navItems,
                showModal, modalContent, setShowModal, setModalContent
        }}>
                {props.children}
        </Context.Provider>
}
export default ContextProvider;