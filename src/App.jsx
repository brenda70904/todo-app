import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Todo from "./Components/Todo";
import SettingForm from "./Components/SettingForm";
import './styles.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { When } from "react-if";

function App() {
  const {isLoggedIn} = useContext(AuthContext);
  return (
    <>
      <BrowserRouter>
        <Header />
        <When condition={isLoggedIn}>
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/settings" element={<SettingForm />} />
          </Routes>
        </When>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
