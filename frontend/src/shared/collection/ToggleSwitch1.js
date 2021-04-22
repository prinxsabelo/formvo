
import { useEffect, useState } from 'react';
import './ToggleSwitch.scss';

const ToggleSwitch = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    // console.log(props.value);
    useEffect(() => {

        if (props.value) {
            setIsChecked(props.value);
        } else {
            setIsChecked(false);
        }

    }, [setIsChecked, props.value]);


    const handleChange = (e, index) => {

        setIsChecked(!isChecked);
        const { checked } = e.target;


        props.onToggleChange(index, checked);
    }
    const { id, index, label, className } = props;

    return (
        <div className="flex items-center space-x-1 relative">
            <label htmlFor={id} className={`cursor-pointer ${className}`}>{label}</label>
            <input id={id} type="checkbox" className="switch" checked={isChecked}
                onChange={(event) => handleChange(event, index)}
            />
        </div>
    )
}

export default ToggleSwitch;
{/* <div className="flex items-center space-x-1 p-2 relative"> */ }