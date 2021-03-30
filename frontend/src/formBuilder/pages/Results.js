import { Route, Switch, useRouteMatch } from "react-router"
import ResultTabs from "../components/tabs/ResultTabs";
import Responses from "./Responses";
import Summary from "./Summary";

const result_tabs = [
    { id: 1, label: "Summary", link: `summary` },
    { id: 2, label: "Responses", link: `responses` },
]
const Results = (props) => {
    const { path, url } = useRouteMatch();
    return (
        <>
            <header className="w-full bg-white shadow md:flex md:justify-center pb-1 shadow md:fixed top-14 left-0 right-0">
                <ResultTabs result_tabs={result_tabs} />
            </header>
            <main className="md:mt-12 main pb-4">
                <Route path={`${url}/summary`} exact>
                    <Summary />
                </Route>
                <Route path={`${url}/responses`} exact>
                    <Responses />
                </Route>
            </main>
        </>
    )
}
export default Results;