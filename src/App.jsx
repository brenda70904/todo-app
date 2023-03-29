import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Todo from "./Components/Todo";
import SettingForm from "./Components/SettingForm";
import './styles.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/setting" element={<SettingForm />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
