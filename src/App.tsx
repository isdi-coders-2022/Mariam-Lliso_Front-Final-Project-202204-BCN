import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import LoginPage from "./pages/LoginPage/LoginPage";
import AppStyle from "./AppStyle";
import { Navigate, Route, Routes } from "react-router-dom";
import EstablishmentListPage from "./pages/EstablishmentListPage/EstablishmentListPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { useEffect } from "react";
import { loadEstablishmentThunk } from "./redux/thunks/establishmentThunks/establishmentThunks";
import { useAppDispatch } from "./redux/hooks";

const App = () => {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(loadEstablishmentThunk());
  }, [dispatch]);

  return (
  <AppStyle>
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
  </AppStyle>
  )
}

export default App;
