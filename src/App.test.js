import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from './BookingPage';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

describe("Testing the form inputs", () =>{
  test("testing the submit", ()=> {
    const handleSubmit = jest.fn();
    render(<BookingForm onSubmit={handleSubmit}/>);

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).not.toHaveBeenCalled();

  })
})