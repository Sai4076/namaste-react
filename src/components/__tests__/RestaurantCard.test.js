import { render , screen} from "@testing-library/react";
import {withLocationLabel} from "../RestaurantCard";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";     

it("Should render Restaurant Card component with props data", () => {
    render(<RestaurantCard resObj={MOCK_DATA}/>);
    const name =  screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument();
});

it("Should render Restaurant card with location label", () => {
    const WrappedComponent = withLocationLabel(RestaurantCard);
    render(<WrappedComponent resObj={MOCK_DATA}/>)
    const location = screen.getByText("Lingampally");
    expect(location).toBeInTheDocument();
});