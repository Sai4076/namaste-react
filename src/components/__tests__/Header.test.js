import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

console.error = jest.fn();
describe("Header component test cases", () => {
  test("Should load Header component and check for Login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Login button should change to Logout onClick", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button",{name : "Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button",{name : "Logout"});
    expect(logoutButton).toBeInTheDocument();
  });
});
