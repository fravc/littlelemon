import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from './BookingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

test('Renders the BookingForm heading', () => {
    render(<Router><BookingForm /></Router>);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

describe("Testing the form inputs", () =>{
  test("testing the submit", ()=> {
    const handleSubmit = jest.fn();
    render(<Router><BookingForm onSubmit={handleSubmit}/></Router>);

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).not.toHaveBeenCalled();

  })
})