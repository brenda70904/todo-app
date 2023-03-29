import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Todo from "./Components/Todo";
import SettingForm from "./Components/SettingForm";
import './styles.css'
function App() {
  return (
    <>
      <Header />
      <SettingForm/>
      <Todo />
      <Footer />
    </>
  );
}

export default App;
