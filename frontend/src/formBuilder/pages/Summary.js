import SumDetail from "../components/summary/SumDetail"
import SumReport from "../components/summary/SumReport"


const Summary = (props) => {
    return (
        <>
            <div className="w-full h-full hidden md:flex h-summary space-x-2 px-16">
                <div className="w-1/4 border-r-2 shadow-lg">
                    <SumDetail />
                </div>
                <div className="overflow-y-auto flex-auto">
                    <SumReport />
                </div>

            </div>
            {/* <SumChart /> */}
        </>
    )
}
export default Summary