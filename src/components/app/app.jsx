import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const onWelcomeBtnClick = () => {};

const App = (props) => {
  const {errorsCount} = props;
  return (
    <WelcomeScreen
      errorsCount = {errorsCount}
      onWelcomeBtnClick = {onWelcomeBtnClick}
    />
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired
};

export default App;
