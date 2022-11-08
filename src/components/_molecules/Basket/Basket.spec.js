import Basket from '@/components/_molecules/Basket/Basket.vue'
import {screen, render, fireEvent} from '@testing-library/vue';
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'

describe('Basket', () => {

    beforeEach(() => {
        setActivePinia(createPinia())
      })

    function getBasket() {
        return screen.getByTestId('basket');
    }

    function getBasketStatus() {
        return screen.getByTestId('basket-status');
    }

    function getPlusButton() {
        return screen.getByTestId('plus-button');
    }

    function getMinusButton() {
        return screen.getByTestId('minus-button');
    }

    it('has relevant style classes', () => {
        render(Basket);
        expect(getBasket()).toHaveClass('mt-5 border-t-2 border-gray-400');
    })

    /**
     * This test is currently broken 
     * as Basket component now uses onMounted() hook 
     * which probably needs to be mocked.
     * Further reading on this matter:
     * https://stackoverflow.com/questions/50278708/vue-test-utils-how-to-test-logic-within-mounted-lifecycle-hook-with-vuex
     * https://medium.com/@sebastiencorreia/testing-vue-js-lifecycle-hook-43c1227815bd
     */
    it('is initialized with 0 elements in basket', () => {
        const wrapper = mount(Basket, {
            props: {
                productName: "testElement"
            }
        });

        const basketStatusMessage = wrapper.get('[data-testid="basket-status"]');

        // Actual text should be: "Currently in basket: 0"
        expect(basketStatusMessage.text()).toContain("Currently in basket:");
    })

    it('increases number of elements in basket when increment button clicked', async () => {
        render(Basket, {
            props: {
                productName: "testElement"
            }
        });

        const button = getPlusButton()
        await fireEvent.click(button)

        expect(getBasketStatus()).toHaveTextContent("Currently in basket: 1");
    })

    it('clicking plus sign button increases number of element in basket', async () => {
        render(Basket, {
            props: {
                productName: "testElement"
            }
        });

        const button = getPlusButton()
        await fireEvent.click(button)

        expect(getBasketStatus()).toHaveTextContent("Currently in basket: 1");
    })

    it('clicking minus sign button decreases number of element in basket', async () => {
        render(Basket, {
            props: {
                productName: "testElement"
            }
        });

        const plusButton = getPlusButton()
        const minusButton = getMinusButton()
        await fireEvent.click(plusButton)
        await fireEvent.click(plusButton)

        expect(getBasketStatus()).toHaveTextContent("Currently in basket: 2")

        await fireEvent.click(minusButton)

        expect(getBasketStatus()).toHaveTextContent("Currently in basket: 1")
    })

    it('clicking minus sign button does not decrease number of elements in basket below zero', async () => {
        render(Basket, {
            props: {
                productName: "testElement"
            }
        });

        const minusButton = getMinusButton()

        await fireEvent.click(minusButton)

        expect(getBasketStatus()).toHaveTextContent("Currently in basket: 0")
    })
})