import { CssBaseline, ThemeProvider } from "@mui/material";
import GlobalStyle from "../../../theme/assets/GlobalStyle";
import theme from "../../../theme/theme";
import AlertCustom, { IAlertCustom } from "./AlertCustom";
import TestRenderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

describe("Given a RegisterPage component page", () => {
  describe("When it's invoked", () => {

    const givenAlertProp: IAlertCustom = {
      title:"some title",
      content: "som content",
      type: "warning",
      action: jest.fn()
    }

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
});
