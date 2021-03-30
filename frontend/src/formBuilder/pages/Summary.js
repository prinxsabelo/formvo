import SumChart from "../components/SumChart"
import SummaryDetail from "./SummaryDetail"
import SummaryReport from "./SummaryReport.js"

const Summary = (props) => {
    return (
        <>
            <div className="w-full h-full hidden md:flex h-summary space-x-2 px-16">
                <div className="w-1/4 border-r-2 shadow-lg">
                    <SummaryDetail />
                </div>
                <div className="overflow-y-auto flex-auto">
                    <SummaryReport />
                </div>

            </div>
            {/* <SumChart /> */}
        </>
    )
}
export default Summary