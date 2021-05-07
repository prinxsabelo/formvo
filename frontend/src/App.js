import ContextProvider from "./context/Context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FormContextProvider from "./context/FormContext";
import FormBuilder from "./formBuilder/pages/FormBuilder";
import Header from "./shared/header/Header";
import Wrapper from "./shared/wrapper/Wrapper";
import ViewportProvider from "./context/ViewportContext";
import MobileBuild from "./formBuilder/pages/MobileBuild";

import Dialog from "./shared/collection/Dialog";
import ResultContextProvider from "./context/ResultContext";
import RespondentDetail from "./formBuilder/pages/RespondentDetail";
import ModalContextProvider from "./context/ModalContext";
import QuestionProvider from "./context/QuestionContext";

function App() {
  return (
    <Router>
      <ContextProvider>
        <ViewportProvider>
          <FormContextProvider>
            <QuestionProvider>
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
                      </div>
                    </Route>
                  </Switch>
                </ModalContextProvider>
              </ResultContextProvider>
            </QuestionProvider>
          </FormContextProvider>
        </ViewportProvider>
      </ContextProvider>
    </Router>
  );
}

export default App;
