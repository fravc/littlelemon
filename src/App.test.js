import { fireEvent, render, screen, userState } from "@testing-library/react";
import BookingForm from './BookingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

 
 const setup = () =>
 {
    window.fetchAPI = (date)=> ["11:30", "12:00"];  
    window.submitAPI = (date)=> true;  
    
    render(<Router><BookingForm/></Router>);
    
 }

 const submitForm = () =>
 {
    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);
 }
 
test('Renders the BookingForm heading', () => {
   setup();
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

describe("Testing the form inputs", () =>{
  test("testing the submit", ()=> {
    const handleSubmit = jest.fn();
    render(<Router><BookingForm onSubmit={handleSubmit}/></Router>);

   submitForm();
    
    expect(handleSubmit).not.toHaveBeenCalled();

  })
  test("testing the booking date", ()=>{
    setup();

    const bookingDate = screen.getByLabelText("Choose date");

    expect(bookingDate).toBeInTheDocument();

  })
  test("testing the booking time", ()=>{
    setup();

    const bookingTime = screen.getByLabelText("Choose time");

    expect(bookingTime).toBeInTheDocument();

  })
  test("testing the number of guests", ()=>{
    setup();

    const numberGuests = screen.getByLabelText("Number of guests");

    expect(numberGuests).toBeInTheDocument();

  })
  test("testing the occasion", ()=>{
    setup();

    const occasion = screen.getByLabelText("Occasion");

    expect(occasion).toBeInTheDocument();

  })
})

describe("Testing the form validations", () =>{
  test("testing empty booking date", ()=>{
    //arrange
    setup();

    //act    
    submitForm();
    const errorSpan = screen.getByTestId("bookingDateError");

    //assert
    expect(errorSpan).not.toBeEmptyDOMElement();
  })
  test("testing correct booking date", ()=>{
    //arrange
    setup();
    
    //act
    const bookingDate = screen.getByLabelText("Choose date");
    fireEvent.change(bookingDate, {target:{value: "2999-07-20"}});
    submitForm();
    const errorSpan = screen.getByTestId("bookingDateError");
    
    //assert
    expect(errorSpan).toBeEmptyDOMElement();
  })
  test("testing wrong booking date", ()=>{
    //arrange
    setup();
    
    //act
    const bookingDate = screen.getByLabelText("Choose date");
    fireEvent.change(bookingDate, {target:{value: "1999-07-20"}});
    submitForm();
    const errorSpan = screen.getByTestId("bookingDateError");
    
    //assert
    expect(errorSpan).not.toBeEmptyDOMElement();
  })
  test("testing empty booking time", ()=>{
    //arrange
    setup();
    
    //act
    submitForm();
    const errorSpan = screen.getByTestId("bookingTimeError");
    
    //assert
    expect(errorSpan).not.toBeEmptyDOMElement();
  })
  test("testing wrong booking time", ()=>{
    //arrange
    setup();
    
    //act
    const bookingDate = screen.getByLabelText("Choose date");
    fireEvent.change(bookingDate, {target:{value: "2999-07-20"}});
    
    const bookingTime = screen.getByLabelText("Choose time");

    fireEvent.change(bookingTime, {target:{value: "12:00"}});

    const errorSpan = screen.getByTestId("bookingTimeError");
    submitForm();
    //assert
    expect(errorSpan).toBeEmptyDOMElement();
  })
  
})