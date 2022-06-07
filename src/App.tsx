import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import LoginPage from "./pages/LoginPage/LoginPage";
import ContainerStyle from "./AppStyle";
import { Navigate, Route, Routes } from "react-router-dom";
import EstablishmentListPage from "./pages/EstablishmentListPage/EstablishmentListPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

const App = () => {

  return (
  <ContainerStyle>
    <Header/>
    <main className="main">
      <Routes>
        <Route path="/" element={<Navigate to="/establishment/list" />} />
        <Route path="/establishment/list" element={<EstablishmentListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </main>
    <Footer />
  </ContainerStyle>
  )
}

export default App;
