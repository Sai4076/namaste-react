import { render , screen } from "@testing-library/react";
import ContactUs from "../ContactUs"
import "@testing-library/jest-dom";

describe("Contact us test cases", () => {
    test("Should load Contact us component", () => {
        render(<ContactUs />);
    
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    
    test("Should load  button in Contact us component", () => {
        render(<ContactUs />);
    
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    
    test("Should load  input in Contact us component", () => {
        render(<ContactUs />);
    
        const inputName = screen.getByPlaceholderText("name");
        expect(inputName).toBeInTheDocument();
    });
    
    test("Should load 2 input boxes in Contact us component", () => {
        render(<ContactUs />);
    
        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes.length).toBe(2);
    });
});

