import styled from "styled-components";

const UserProfileStyle = styled.div`
  .profile-image-container {
    display: flex;
    justify-content: center;
    position: relative;
    height: 150px;
    padding-top: 30px;
  }

  .profile-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    overflow: hidden;
    background: white;
    border-radius: 50%;
    position: absolute;
  }

  .profile-image__avatar {
    height: 150px;
  }

  .profile-content {
    background-color: white;
    padding: 1.5rem clamp(1rem, 5%, 3rem);
    padding-top: 60px;
    border-radius: 20px;
    display: flex;
  }

  .profile-content__info-profile {
    display: flex;
    align-items: center;
  }

  .profile-content__info-name {
    margin-left: 10px;
  }

  .profile-content__info-username {
    margin-bottom: 20px;
  }

  .profile-content__actions {
    display: flex;
    justify-content: space-around;
  }

  .profile-content__actions-buttons {
    display: flex;
    flex-direction: column;
  }

  .profile-content__actions-buttons button {
    margin: 20px 0;
  }

  @media only screen and (max-width: 768px) {
    .profile-content__actions {
      padding-top: 50px;
    }
    .profile-content {
      flex-direction: column;
    }
  }

  @media only screen and (min-width: 769px) {
    .profile-content__actions {
    }
    .profile-content {
      flex-direction: row;
      justify-content: space-evenly;
    }
  }
`;
export default UserProfileStyle;
