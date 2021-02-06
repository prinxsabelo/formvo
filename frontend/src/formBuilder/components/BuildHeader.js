import { useContext } from "react";
import Button from "../../shared/collection/Button"

import Drawer from "../../shared/collection/Drawer";
import QTypeIcon from "../../shared/collection/QTypeIcon";
import { Payload } from "../../context/Payload";
const BuildHeader = ({ type, children }) => {
    // console.log(type);
    const { drawerIsOpen, setDrawerIsOpen, setTypeAction, questionTypes, currentType, setCurrentType } = useContext(Payload);
    const qType = questionTypes.find(qt => qt.type === type);

    const openDrawer = () => {
        if (!currentType && qType.type) {
            setCurrentType(qType.type)
        }
        setDrawerIsOpen(true);
        setTypeAction("edit");

    };

    return (
        <div className="flex md:flex-row-reverse md:justify-between justify-end  p-1 bg-gray-100 w-full md:w-3/4 text-right">

            {qType &&
                <Button onClick={openDrawer}>
                    <span className="flex items-center">
                        <div className="px-1 mr-1 ">
                            <QTypeIcon type={qType.type} />
                        </div>
                        {qType.label}
                    </span>

                </Button>
            }
            {children}

            <Drawer show={drawerIsOpen} />
        </div>
    )
}
export default BuildHeader