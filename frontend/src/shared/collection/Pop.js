import './Pop.css';
import ReactDOM from 'react-dom';
import { useRef } from 'react';

import { CSSTransition } from 'react-transition-group';

const Pop = props => {
    const nodeRef = useRef(null);


    let content = (
        <CSSTransition
            nodeRef={nodeRef} in={props.show} timeout={400} mountOnEnter unmountOnExit
        // classNames={typeAction === "new" ? `slide-in-left` : `slide-in-right`}
        >
            <aside className="pop" onClick={props.onClick}>
                {props.message === "question" &&
                    <div className="p-4 flex flex-col space-y-4 text-lg">
                        <button onClick={props.copy} className="border-4 capitalize w-full text-left p-3  tracking-wide flex items-center space-x-2">
                            <svg className="w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            <span> Copy Question</span>
                        </button>
                        <button onClick={props.del} className="border-4 w-full text-left p-3  tracking-wide flex items-center space-x-2">
                            <svg className="w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            <span> Delete Question</span>
                        </button>
                    </div>

                }
            </aside>
        </CSSTransition>)
    return ReactDOM.createPortal(content, document.getElementById('pop-hook'));
}
export default Pop