import { CssBaseline, ThemeProvider } from "@mui/material";
import GlobalStyle from "../../../theme/assets/GlobalStyle";
import theme from "../../../theme/theme";
import AlertCustom, { IAlertCustom } from "./AlertCustom";
import TestRenderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Given a AlerCustom component", () => {
  const givenAlertProp: IAlertCustom = {
    title: "some title",
    content: "som content",
    type: "warning",
    action: jest.fn(),
  };

  describe("When it's invoked", () => {
    test("Then it should always match this snapshot", () => {
      const testedAlertCustom = TestRenderer.create(
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <GlobalStyle />
            <CssBaseline />
            <AlertCustom
              title={givenAlertProp.title}
              content={givenAlertProp.content}
              type={givenAlertProp.type}
              action={givenAlertProp.action}
            />
          </BrowserRouter>
        </ThemeProvider>
      );

      expect(testedAlertCustom).toMatchSnapshot();
    });
  });

  describe("When it's invoked and user click at CloseIcon", () => {
    test("Then it should call the given action fuction", () => {
      render(
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <GlobalStyle />
            <CssBaseline />
            <AlertCustom
              title={givenAlertProp.title}
              content={givenAlertProp.content}
              type={givenAlertProp.type}
              action={givenAlertProp.action}
            />
          </BrowserRouter>
        </ThemeProvider>
      );

      const expectedColseButton = screen.getByTestId("CloseIcon");
      userEvent.click(expectedColseButton);

      expect(givenAlertProp.action).toHaveBeenCalled();
    });
  });
});
