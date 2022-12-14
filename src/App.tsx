import "./App.css";
import Layout from "./components/Layout/Layout";
import Routers from "./routers/Routers";

function App() {
  return <Layout children={<Routers />} />;
}

export default App;
