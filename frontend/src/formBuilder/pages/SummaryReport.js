import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Payload } from "../../context/Payload";
import SumChildReport from "../components/SumChildReport"

const SummaryReport = (props) => {
    let { form_id } = useParams();
    const { getReport, report } = useContext(Payload);
    useEffect(() => {
        getReport(form_id);
    }, [getReport, form_id])
    console.log(report);
    return (
        <div className="px-8 py-4">
            <div>
                <h3 className="text-2xl">Response Summary</h3>
            </div>
            {report.length > 0 &&
                <div>
                    {report.map((rep, index) =>

                        <SumChildReport index={index + 1} key={index}
                            title={rep.title} type={rep.type} content={rep.content} summary={rep.summary} />

                    )}

                </div>
            }
        </div>
    )
}
export default SummaryReport