import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IUserProfile } from "../../types/userInterfaces";
import UserProfileStyle from "./UserProfileStyle";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import { Button, Typography } from "@mui/material";
import theme from "../../theme/theme";
import { rolAdmin } from "../../utils/userRols";
import { logOutUserThunk } from "../../redux/thunks/userThunks/userThunks";
import { useNavigate } from "react-router-dom";
import { resetProfileActionCreator } from "../../redux/features/userProfileSlice/userProfileSlice";

const UserProfile = () => {
  const dispach = useAppDispatch();
  const navigate = useNavigate();
  const { name, surnames, username, userRol } = useAppSelector<IUserProfile>(
    (state) => state.userProfile
  );

  const finishSesion = () => {
    dispach(logOutUserThunk());
    dispach(resetProfileActionCreator());
    navigate("/login");
  };

  const createEstablisment = () => {
    navigate("/establishment/add");
  };

  return (
    <UserProfileStyle>
      <div className="profile-image-container">
        <div className="profile-image">
          <img
            className="profile-image__avatar"
            src="/image/user-profile.png"
            alt={`Foto de perfil de ${name}`}
          />
        </div>
      </div>
      <div className="profile-content">
        <div className="profile-content__info">
          <Typography
            variant="h2"
            component="h1"
            className="profile-content__info-username"
          >
            {`${username}`}
          </Typography>
          <div className="profile-content__info-profile">
            <PermIdentityOutlinedIcon color={"primary"} />
            <Typography
              variant="h5"
              component="h2"
              className="profile-content__info-name"
              color={theme.palette.primary.main}
            >
              {`${name} ${surnames}`}
            </Typography>
          </div>
          <div className="profile-content__info-profile">
            <AdminPanelSettingsOutlinedIcon color={"primary"} />
            <Typography
              variant="h5"
              component="h2"
              className="profile-content__info-name"
              color={theme.palette.primary.main}
            >
              {`${userRol.description}`}
            </Typography>
          </div>
        </div>
        <div className="profile-content__actions">
          <div className="profile-content__actions-buttons">
            {userRol.code === rolAdmin && (
              <Button
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                onClick={createEstablisment}
              >
                crear un establecimiento
              </Button>
            )}
            <Button
              fullWidth
              size="large"
              type="submit"
              variant="outlined"
              onClick={finishSesion}
            >
              cerrar sesión
            </Button>
          </div>
        </div>
      </div>
    </UserProfileStyle>
  );
};

export default UserProfile;
