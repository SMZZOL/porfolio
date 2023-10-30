import Home from "./component/Home";
import Document from "./component/Document";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home/>}/>
        <Route path="/Document" element={<Document/>}/>
      </Route>
    </Routes>
  );
}

export default App;
