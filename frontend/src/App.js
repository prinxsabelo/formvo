import ContextProvider from "./context/Context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FormContextProvider from "./context/FormContext";
import FormBuilder from "./formBuilder/pages/FormBuilder";
import Header from "./shared/header/Header";
import Wrapper from "./shared/wrapper/Wrapper";
import ViewportProvider from "./context/ViewportContext";
import MobileBuild from "./formBuilder/pages/MobileBuild";
import PayloadProvider from "./context/Payload";
import Pop from "./shared/collection/Pop";
import Dialog from "./shared/collection/Dialog";
import ResultContextProvider from "./context/ResultContext";
import RespondentDetail from "./formBuilder/pages/RespondentDetail";
import ModalContextProvider from "./context/ModalContext";

function App() {
  return (
    <Router>
      <ContextProvider>
        <FormContextProvider>
          <ViewportProvider>
            <PayloadProvider>
              <ResultContextProvider>
                <ModalContextProvider>
                  <Switch>
                    <Route path="/form/:form_id/questions/compose">
                      <MobileBuild />
                    </Route>
                    <Route path="/form/:form_id/questions/:q_id">
                      <MobileBuild />
                    </Route>
                    <Route path="/form/:form_id/results/responses/:token">
                      <RespondentDetail />
                    </Route>
                    <Route path="/form/:form_id">
                      <FormBuilder />
                    </Route>

                    <Route path={["/", "/home", "/forms", "/trash"]} exact>
                      <div className=" bg-white text-black w-full text-white flex flex-col h-screen">
                        <Header />
                        <Wrapper />
                        <Dialog />
                        {/* <DeleteModal /> */}
                        {/* <Dialog /> */}
                      </div>
                    </Route>
                  </Switch>
                </ModalContextProvider>
              </ResultContextProvider>
            </PayloadProvider>
          </ViewportProvider>
        </FormContextProvider>
      </ContextProvider>
    </Router>
  );
}

export default App;
