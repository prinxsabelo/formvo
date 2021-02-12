
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
        //  console.log(e.target);
        //  console.log(index, checked);
        // console.log(id, checked);
        props.onToggleChange(index, checked);
    }
    const { id, index, label } = props;
    return (
        <div className="flex items-center space-x-1 p-2 relative">
            <label htmlFor={id} className="cursor-pointer ">{label}</label>
            <input id={id} type="checkbox" className="switch" checked={isChecked}
                onChange={(event) => handleChange(event, index)}
            />
        </div>
    )
}

export default ToggleSwitch;
