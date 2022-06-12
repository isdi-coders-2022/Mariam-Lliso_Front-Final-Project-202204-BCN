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
import UserCredentialsValidation from "./components/UserCredentialsValidation/UserCredentialsValidation";
import UserProfile from "./components/UserProfile/UserProfile";
import { IUserLoged, Token } from "./types/userInterfaces";
import jwtDecode from "jwt-decode";
import { loginActionCreator } from "./redux/features/userSlice/userSlice";
import { logOutUserThunk } from "./redux/thunks/userThunks/userThunks";

const App = () => {
  const dispatch = useAppDispatch();
  const token: Token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const userData: IUserLoged = jwtDecode(token);
      dispatch(loginActionCreator(userData));
    } else {
      dispatch(logOutUserThunk());
    }

    dispatch(loadEstablishmentThunk());
  }, [dispatch, token]);

  return (
    <AppStyle>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Navigate to="/establishment/list" />} />
          <Route
            path="/establishment/list"
            element={<EstablishmentListPage />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/user/profile"
            element={
              <UserCredentialsValidation>
                <UserProfile />
              </UserCredentialsValidation>
            }
          />
        </Routes>
      </main>
      <Footer />
    </AppStyle>
  );
};

export default App;
