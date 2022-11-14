import BookingMainBlock from "@/components/_organisms/BookingMainBlock/index";
import { render, screen } from "@testing-library/vue";

describe("BookingMainBlock", () => {
  function getBookingMainBlock() {
    return screen.getByTestId("main-block");
  }

  it("renders properly", () => {
    render(BookingMainBlock);

    expect(getBookingMainBlock()).toHaveClass("main-block");
  });
});
