import ToggleSwitch from "../../../shared/collection/ToggleSwitch"

const Properties = (props) => {
    return <div className="flex flex-col space-y-4">
        <ToggleSwitch />
        <ToggleSwitch />
    </div>
    // return (
    //     <>
    //         {
    //             props.type === "CHOICE" && (
    //                 <>
    //                     <div className="flex justify-between flex-wrap px-2 space-x-4 md:space-x-8 md:px-4">

    //                         <div className="flex items-center space-x-2">
    //                             <div>Randomize </div>
    //                             <ToggleSwitch />
    //                         </div>

    //                         <div className="flex items-center space-x-2">
    //                             <div>Multiple Selection </div>
    //                             <ToggleSwitch />
    //                         </div>
    //                     </div>
    //                 </>
    //             )
    //         }
    //     </>
    // )
}
export default Properties;