import { useContext, useEffect, useState } from "react";
import { Payload } from "../../../context/Payload";
import QTypeIcon from "../../../shared/collection/QTypeIcon";
import ToggleSwitch from "../../../shared/collection/ToggleSwitch"

const Properties = (props) => {
    const [properties, setProperties] = useState({ randomize: "", allow_multiple_selection: "" });
    const { developQuestion } = useContext(Payload);
    useEffect(() => {
        setProperties(props.properties);

    })
    let { title, response, q_id, type } = props;
    const onToggleChange = (index, isChecked) => {
        // console.log(arr[index]);
        let name = arr[index]['name'];
        arr[index]['name'] = isChecked
        properties[name] = isChecked;

        // console.table(properties);

        developQuestion({ title, response, q_id, properties, type });
    }
    const onShapeChange = (shape) => {

        properties.shape = shape;
        developQuestion({ title, response, q_id, properties, type });
    }
    const { randomize, allow_multiple_selection } = properties
    const arr = [
        {
            label: "Randomize",
            value: randomize,
            name: "randomize"
        }, {
            label: "Multiple Selection",
            value: allow_multiple_selection,
            name: "allow_multiple_selection"
        }
    ];
    const iconArr = [
        {
            shape: "star"
        },
        {
            shape: "heart"
        },
        {
            shape: "thumb"
        }
    ]
    return (
        <div className="flex w-full items-center md:space-x-2 mr-2 flex-start">
            <div className="h-8 hidden md:flex items-center justify-center text-lg pl-1">
                <div className="rounded-full h-8 w-8 text-sm flex items-center justify-center bg-gray-300">
                    {props.index}
                </div>
            </div>
            <div className="flex-auto md:h-16 flex items-center text-lg md:text-xl mb-4 md:mb-0">
                {
                    props.type === "CHOICE" && properties && (
                        <div className="w-full flex md:text-xl text-sm justify-evenly">
                            {arr.map((property, index) =>
                                <ToggleSwitch key={index} index={index} id={`${q_id}-${property.name}`} label={property.label}
                                    value={property.value} onToggleChange={onToggleChange} />

                            )}
                        </div>
                    )
                }
                {
                    props.type === "RATING" && properties && (
                        <div className="w-full py-2 flex md:flex-auto justify-center items-center space-x-4 mr-1 md:px-4">
                            <div className="md:text-xl w-1/3 flex justify-center">
                                Choose Icon
                            </div>
                            <div className="flex flex-auto justify-between items-center space-x-2">
                                {iconArr.map(icon => (
                                    <div
                                        className={`${props.properties.shape === icon.shape ? `bg-yellow-300` : `bg-white`} 
                                      w-full border border-red-500 md:border-none shadow cursor-pointer p-3 flex space-x-8 justify-between justify-evenly md:justify-center        
                                      `}
                                        key={icon.shape}
                                        onClick={() => onShapeChange(icon.shape)} >
                                        {icon.shape === "star" && (
                                            <QTypeIcon className="w-8" color="black" shape="star" type="RATING" />
                                        )}
                                        {icon.shape === "heart" && (
                                            <QTypeIcon className="w-8" color="black" shape="heart" type="RATING" />
                                        )}
                                        {icon.shape === "thumb" && (
                                            <QTypeIcon className="w-8" color="black" shape="thumb" type="RATING" />
                                        )}
                                    </div>

                                ))}
                            </div>
                        </div>
                    )
                }
                {
                    props.type === "YN" && (
                        <>
                        </>
                    )
                }
            </div>
        </div>
    )
}
export default Properties;