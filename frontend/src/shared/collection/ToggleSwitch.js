
import './ToggleSwitch.scss';

const ToggleSwitch = () => {
    return (
        <span className="flex space-x-1 px-1 items-center w-full cursor-pointer">
            <label htmlFor="s1">Switch</label>
            <input id="s1" type="checkbox" className="switch" />
        </span>
    )
}

export default ToggleSwitch;
