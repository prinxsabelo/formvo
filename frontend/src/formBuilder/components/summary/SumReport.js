import { useContext, useState } from "react";
import { Context } from "../../../context/Context";
import ConfirmModal from "../../../shared/collection/ConfirmModal";
import SumChildReport from "./SumChildReport";

const SumReport = (props) => {
  const { report } = props;
    const { openConfirmModal } = useContext(Context);
    const tester = () =>{
        const content = <div>xxxxx</div>
        openConfirmModal('This will permanently delete response.');  
    }
  return (
    <>
      <div className="md:px-8 md:py-4 p-2">
        <div className="md:p-0 pt-2">
          <h3 className="md:text-2xl text-2xl">Response Summary</h3>
          <button className="bg-red-500 p-3 text-white" onClick={() => tester()}>
            xxx
          </button>
        </div>
        {report.length > 0 && (
          <div className="flex flex-col space-y-6 mb-4">
            {report.map((rep, index) => (
              <SumChildReport
                index={index + 1}
                key={index}
                title={rep.title}
                type={rep.type}
                content={rep.content}
                summary={rep.summary}
              />
            ))}
          </div>
        )}
      </div>
      <ConfirmModal />
    </>
  );
};
export default SumReport;
