import { createContext, useContext, useState } from "react";
import { ViewportContext } from "./ViewportContext";
import { Redirect, useHistory } from "react-router-dom";
import ReportApi from "./report-api";
import ResponseApi from "./response-api";

export const ResultContext = createContext();


const breakpoint = 768;

const ResultContextProvider = props => {
    const [report, setReport] = useState([]);
    const [formResponses, setFormReponses] = useState([]);

    const getReport = (form_id) => {
        const fetchReport = async () => {
            try {
                const data = await ReportApi;

                setReport(data.boxes)

            } catch (err) { }
        };
        fetchReport();
    }

    const getFormResponses = (form_id) => {
        const fetchFormResponses = async () => {
            try {
                const data = await ResponseApi;
                setFormReponses(data.form);
            } catch (err) { }
        };
        fetchFormResponses();
    }

    return (
        <ResultContext.Provider value={{
            getReport, report,
            getFormResponses, formResponses
        }}>
            {props.children}
        </ResultContext.Provider>
    )
}
export default ResultContextProvider;