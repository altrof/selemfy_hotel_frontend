import BookingForm from "@/components/_molecules/BookingForm/BookingForm.vue";
import { screen, render } from "@testing-library/vue";
import { setActivePinia, createPinia } from "pinia";
import { createTestingPinia } from "@pinia/testing";

it("has text - BOOKING FORM", () => {
  render(BookingForm);

  beforeEach(() => {
    setActivePinia(createPinia());
  });

  function getBookingForm() {
    return screen.getByTestId("booking-form");
  }

  it("has labels with `Check in` and `Check out`", () => {
    render(BookingForm);

    expect(getBookingForm()).toHaveTextContent("Check in");
    expect(getBookingForm()).toHaveTextContent("Check out");
  });

  it("has labels `Adults` and `Children` amounts", () => {
    render(BookingForm);

    expect(getBookingForm()).toHaveTextContent("Adults");
    expect(getBookingForm()).toHaveTextContent("Children");
  });

  it("has default amount value 1 for `Adults`", () => {
    render(BookingForm);

    expect(
      screen.getByText("Adults").nextElementSibling.children[1]
    ).toHaveTextContent("1");
  });

  it("has default amount value 0 for `Children`", () => {
    render(BookingForm);

    expect(
      screen.getByText("Children").nextElementSibling.children[1]
    ).toHaveTextContent("0");
  });

  it("has label `Room` with options: `Any`, `Economy`, `Regular`, `Deluxe`, `Family`", async () => {
    await render(BookingForm);

    expect(getBookingForm()).toHaveTextContent("Room");
    expect(getBookingForm()).toHaveTextContent("Any");
    expect(getBookingForm()).toHaveTextContent("Economy");
    expect(getBookingForm()).toHaveTextContent("Regular");
    expect(getBookingForm()).toHaveTextContent("Deluxe");
    expect(getBookingForm()).toHaveTextContent("Family");
  });

  it("has inline style by default", () => {
    render(BookingForm);

    expect(getBookingForm()).toHaveClass("inline");
  });

  it("has flex-col style if state of bookingFormMob changed to true in Pinia store", async () => {
    await render(BookingForm, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              bookingForm: {
                bookingFormMob: true,
              },
            },
          }),
        ],
      },
    });

    expect(getBookingForm()).toHaveClass("flex-col");
  });
});
