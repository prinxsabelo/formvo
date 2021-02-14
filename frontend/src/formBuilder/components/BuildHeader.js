import { useContext } from "react";
import Button from "../../shared/collection/Button"

import Drawer from "../../shared/collection/Drawer";
import QTypeIcon from "../../shared/collection/QTypeIcon";
import { Payload } from "../../context/Payload";
const BuildHeader = ({ properties, type, children }) => {
    // console.log(type);
    const { drawerIsOpen, setDrawerIsOpen, setTypeAction, questionTypes, currentType, setCurrentType, setDrawerPosition } = useContext(Payload);
    const qType = questionTypes.find(qt => qt.type === type);

    const openDrawer = () => {
        if (!currentType && qType.type) {

            setCurrentType(qType.type)
        }
        setDrawerPosition("right");
        setDrawerIsOpen(true);
        setTypeAction("edit");

    };

    return (
        <div className="flex md:flex-row-reverse md:justify-between justify-end  p-1 bg-gray-100 w-full md:w-3/4 text-right">

            {qType &&
                <Button className="bg-gray-800" onClick={openDrawer}>
                    <span className="flex items-center">
                        <div className="px-1 mr-1 ">
                            <QTypeIcon color="yellow" className="w-8 text-gray-100" type={qType.type} shape={properties.shape} />
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