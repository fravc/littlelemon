import CompletedImg from './assets/images/Complete.png'

function BookingConfirmationPage() {

    return(
    <>
    <div className='FormBanner'>
      <h2>Book Completed</h2>
      <p>Congratulations, you completed your reservation!</p>
    </div>
    <img src={CompletedImg} alt="check green" className='CompletedImg'/>
    </>
    );
}
export default BookingConfirmationPage;
