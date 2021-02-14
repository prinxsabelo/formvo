import { forwardRef } from "react";

const Button = forwardRef((props, ref) => (

    <button ref={ref} type="button" onClick={props.onClick}
        className={`text-white font-bold uppercase
                    px-2 py-2 text-xs    md:px-6 md:py-3 md:text-sm 
                    rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 
                    ${props.className}`}>
        {props.children}
    </button>
));
export default Button