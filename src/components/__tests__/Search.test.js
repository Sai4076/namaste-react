import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import MOCK_DATA from "../../components/mocks/mockResListData.json";

//console.error = jest.fn();

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search resList for Burger text Input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);

  const searchButton = screen.getByRole("button",{name: "Search" });
  
  const searchInput = screen.getByTestId("searchInput");
  
  fireEvent.change(searchInput,{target: {value:"Burger"}});
  fireEvent.click(searchButton);
  
  const cardsAfterSearch = screen.getAllByTestId("resCard");  
  expect(cardsAfterSearch.length).toBe(1);
});

it("Should Test Top Rated Restaurant button click", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
  
    const cardsBeforeButtonClick = screen.getAllByTestId("resCard");
    expect(cardsBeforeButtonClick.length).toBe(20);
  
    const topRatedButton = screen.getByRole("button",{name: "Top Rated Restaurants" });
    
    fireEvent.click(topRatedButton);
    
    const cardsAfterButtonClick = screen.getAllByTestId("resCard");  
    expect(cardsAfterButtonClick.length).toBe(6);
  });
