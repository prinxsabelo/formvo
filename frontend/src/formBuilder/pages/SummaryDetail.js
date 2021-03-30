import SumChildDetail from "../components/SumChildDetail"

const SummaryDetail = (props) => {
    const detail = {
        views: 20,
        started: 10,
        completed: 10
    }
    console.log(Object.keys(detail));
    return (
        <div className="flex flex-col space-y-2 px-4 text-xl py-6">
            {Object.keys(detail).map(det => (
                <SumChildDetail key={det} label={det} value={detail[det]} />

            ))}
        </div>
    )
}
export default SummaryDetail