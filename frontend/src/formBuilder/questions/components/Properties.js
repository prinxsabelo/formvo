import { useContext, useEffect, useState } from "react";
import { Payload } from "../../../context/Payload";
import QTypeIcon from "../../../shared/collection/QTypeIcon";
import ToggleSwitch from "../../../shared/collection/ToggleSwitch"

const Properties = (prop) => {
    const [properties, setProperties] = useState({ randomize: "", allow_multiple_selection: "" });
    const { developQuestion } = useContext(Payload);
    useEffect(() => {
        setProperties(prop.properties);

    })
    let { title, response, q_id, type } = prop;
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
        <>
            {
                prop.type === "CHOICE" && properties && (
                    <div className="w-full flex justify-between justify-evenly md:justify-center text-lg md:text-xl">
                        {arr.map((property, index) =>
                            <ToggleSwitch key={index} index={index} id={`${q_id}-${property.name}`} label={property.label}
                                value={property.value} onToggleChange={onToggleChange} />

                        )}

                    </div>
                )
            }
            {
                prop.type === "RATING" && properties && (
                    <div className="w-full flex justify-center items-center space-x-4">
                        <div className="text-lg md:text-xl">
                            Choose an Icon
                        </div>
                        <div className="flex w-1/2 justify-between items-center space-x-2">
                            {iconArr.map(icon => (
                                <div
                                    className={`${prop.properties.shape === icon.shape ? `bg-yellow-200` : `bg-white`} 
                                      w-full border border-red-500 md:border-none shadow-2xl cursor-pointer p-3 flex space-x-8 justify-between justify-evenly md:justify-center        
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
        </>
    )
}
export default Properties;