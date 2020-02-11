import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should welcome button be pressed`, () => {
  const onWelcomeBtnClick = jest.fn();

  const welcomeScreen = shallow(
      <WelcomeScreen
        errorsCount={3}
        onWelcomeBtnClick={onWelcomeBtnClick}
      />
  );

  const welcomeButton = welcomeScreen.find(`button.welcome__button`);

  welcomeButton.props().onClick();

  expect(onWelcomeBtnClick.mock.calls.length).toBe(1);
});
