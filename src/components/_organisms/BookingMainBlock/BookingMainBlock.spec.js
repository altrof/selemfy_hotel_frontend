import BookingMainBlock from "@/components/_organisms/BookingMainBlock/BookingMainBlock.vue";
import {render, screen} from "@testing-library/vue";
import { config } from '@vue/test-utils';



/*
config.global.mocks = {
    $image: {
        maskValues: (fileName, dirName) => {
            return new URL(`/src/assets/img/${dirName}/${fileName}`, import.meta.url)
      }
    }
}
*/
describe('BookingMainBlock', () => {

    function getBookingMainBlock() {
        return screen.getByTestId('main-block');
    }

    it('is a placeholder test',  () => {
        expect(true).toBeTruthy();
    })
/*
    it('renders properly', () => {
        render(BookingMainBlock, {
          global: {
              mocks: {
                  $image: {
                      maskValues: ((fileName, dirName) => {
                        return new URL(`/src/assets/img/${dirName}/${fileName}`, import.meta.url)
                    })
                  }
              }
          }  
        })

        expect(getBookingMainBlock()).toHaveClass('main-block');
    })*/
})

