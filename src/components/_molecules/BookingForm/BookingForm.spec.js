import BookingForm from '@/components/_molecules/BookingForm/BookingForm.vue'
import {screen, render} from '@testing-library/vue';


describe('BookingForm', () => {

    function getBookingForm() {
        return screen.getByTestId('booking-form');
    }

    it('has text - BOOKING FORM', () => {
        render(BookingForm);

        expect(getBookingForm()).toHaveTextContent('BOOKING FORM');
    });

    it('has class booking-form', () => {
        render(BookingForm);

        expect(getBookingForm()).toHaveClass('booking-form');
    })
})