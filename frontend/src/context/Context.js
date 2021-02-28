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
        const [dialog, showDialog] = useState(false);
        const [dialogContent, setDialogContent] = useState({
                type: "",
                header: "",
                placeholder: ""
        });
        const closeDialog = () => {
                showDialog(false);
        }
        return <Context.Provider value={{

                headerContent, setHeaderContent,
                sideBarItems, navItems,
                dialog, showDialog, dialogContent, setDialogContent, closeDialog
              
        }}>
                {props.children}
        </Context.Provider>
}
export default ContextProvider;