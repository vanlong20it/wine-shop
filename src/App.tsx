import "./assets/styles/main.css";
import PageContainer from "./components/PageContainer";
import ContextProvider from "./context/AppContext";
const App = () => {
  return (
    <ContextProvider>
        <PageContainer />
    </ContextProvider>
  );
};

export default App;
