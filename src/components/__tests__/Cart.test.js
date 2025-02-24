import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("Should load Restaurant Menu page", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    );
  });

  const header = screen.getByText("Srikanya Authentic (6)");
  fireEvent.click(header);

  const itemListCount = screen.getAllByTestId("foodItems");
  expect(itemListCount.length).toBe(6);

  const addBtn = screen.getAllByRole("button", { name: "ADD +" });
  fireEvent.click(addBtn[0]);

  const cartItem = screen.getByText("Cart - (1 items)");
  expect(cartItem).toBeInTheDocument();
});
