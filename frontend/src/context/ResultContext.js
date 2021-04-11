import { createContext, useContext, useState } from "react";
import { ViewportContext } from "./ViewportContext";
import { Redirect, useHistory } from "react-router-dom";
import ReportApi from "./report-api";
import ResponseApi from "./response-api";

export const ResultContext = createContext();


const breakpoint = 768;

const ResultContextProvider = props => {
    const [report, setReport] = useState([]);
    const [responses, setReponses] = useState([]);

    const getReport = (form_id) => {
        const fetchReport = async () => {
            try {
                const data = await ReportApi;

                setReport(data.boxes)

            } catch (err) { }
        };
        fetchReport();
    }

    const getResponses = (form_id) => {
        const fetchResponses = async () => {
            try {
                const data = await ResponseApi;
                setReponses(data.form);
            } catch (err) { }
        };
        fetchResponses();
    }

    return (
        <ResultContext.Provider value={{
            getReport, report,
            getResponses, responses
        }}>
            {props.children}
        </ResultContext.Provider>
    )
}
export default ResultContextProvider;