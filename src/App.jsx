import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppRouter from "./Router";
import AppProvider from "./Context/AppContext";

function App() {
  return (
    <AppProvider>
        <AppRouter />
    </AppProvider>
  );
}

export default App;
