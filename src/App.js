import './App.css';
import Header from "./Components/Header/header";
import Image from "./Components/Image/header-img";
import Main_card from "./Components/Main_card/main_card";
import Middle_card from "./Components/Middle_card/middle_card";
import Bottom_card from "./Components/Bottom_card/bottom_card";
import Form from "./Components/Form/form"
import Footer from "./Components/Footer/footer"

function App() {
  return (
    <>
      <div class="wrapper">
        <Header />
        <Image />
        <Main_card />
        <Middle_card />
        <Bottom_card />
        <Form />
        <Footer />
      </div>
    </>
  )
}

export default App;
