import QTypeIcon from "../../../shared/collection/QTypeIcon";
import SumChart from "./SumChart";

const SumChildReport = (props) => {
    const { title, type, summary, index } = props;
    console.log(summary);
    return (
        <div className="shadow border  mt-4">
            <div className="flex items-center shadow w-full space-x-6 ">
                <div className="flex items-center justify-center bg-gray-100 p-3 w-18 space-x-3">
                    <QTypeIcon color="red" type={type} shape={summary.shape} className="w-8 text-gray-100" />
                    <span> {index}</span>
                </div>
                <div>
                    <div className=" text-xl font-semibold">{title}</div>
                    <div className="text-xs">2 out of 5 people answered this question</div>

                </div>
            </div>
            <div>
                <div className="flex mx-4 space-x-2">
                    <div className="w-7/12  border-r">
                        <SumChart />
                    </div>

                    <div className="flex flex-col space-y-1 mt-3">
                        Born and Explain ..
                    </div>
                </div>
            </div>
        </div>

    )
}
export default SumChildReport