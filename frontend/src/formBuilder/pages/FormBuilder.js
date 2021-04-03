import { Redirect, useParams } from "react-router-dom";
import FormLabel from "../components/FormLabel";
import Tabs from "../components/tabs/Tabs";
import { ViewportContext } from "../../context/ViewportContext";
import { useContext } from "react";
import TabContent from "../components/tabs/TabContent";
import NavBar from "../../shared/wrapper/NavBar";
import { Payload } from "../../context/Payload";
import Questions from "./Questions";
const FormBuilder = () => {
    let { form_id } = useParams();
    const { getForm, form } = useContext(Payload);
    if (!form) {
        getForm(form_id);
    }



    const { width } = useContext(ViewportContext);

    const breakpoint = 768;

    const mobileTabs = [
        { id: 1, label: "Questions", link: `questions` },
        { id: 2, label: "Share", link: `share` },
        { id: 3, label: "Results", link: `results/summary` },
        { id: 4, label: "Settings", link: `settings` }];

    const desktopTabs = [
        { id: 1, label: "Build", link: `build` },
        { id: 2, label: "Share", link: `share` },
        { id: 3, label: "Results", link: `results/summary` },
        { id: 4, label: "Settings", link: `settings` }
    ]

    return (
        <>
            {/* Redirect to fit in for mobile phones.. */}
            {(window.location.pathname === `/form/${form_id}/build` && width <= breakpoint) &&
                <Redirect to={`/form/${form_id}/questions`} />
            }
            {/* Redirect to fit in for large devices.. */}
            {(window.location.pathname === `/form/${form_id}/questions` && width > breakpoint) &&
                <Redirect to={`/form/${form_id}/build`} />
            }

            {width > breakpoint && (
                <div className="hidden md:block builder-block"  >
                    <header className="flex w-full py-1 justify-center shadow fixed bg-white z-50" >
                        <div className="w-1/3" >
                            <FormLabel />
                        </div>

                        <div className="w-1/2 flex-grow">
                            <Tabs tabs={desktopTabs} />
                        </div>
                        <div className=" w-64">xxx</div>
                    </header>
                    <main className="flex w-full absolute bottom-0 top-12">
                        {window.location.pathname === `/form/${form_id}/build` &&
                            <div className="w-1/3 border-r shadow-xl" >
                                <Questions />
                            </div>
                        }
                        <div className="flex-auto">
                            <TabContent />
                        </div>
                    </main>
                </div>
            )}
            {width <= breakpoint && (
                <div className="md:hidden">
                    <header className="shadow">
                        <FormLabel />
                        <Tabs tabs={mobileTabs} />
                    </header>
                    <main >
                        <TabContent />
                    </main>
                    <footer>
                        <NavBar />
                    </footer>
                </div>
            )}

        </>
    )
}
export default FormBuilder