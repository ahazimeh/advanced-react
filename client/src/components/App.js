import { Route, Routes } from "react-router-dom";
import Header from "./Header";

function App({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default App;
