import { NavLink, useRouteMatch } from "react-router-dom";

const RespondentItem = ({ index, token }) =>{
    const { url } = useRouteMatch();
    return (
        <NavLink to={url+"/"+token} className="shadow-sm p-4 flex flex-col space-y-2 border-b-4">
            <div>
                Respondent {index}
            </div>
            <div className="text-sm">
                20-11-2020
            </div>
        </NavLink>
    )
}
export default RespondentItem;