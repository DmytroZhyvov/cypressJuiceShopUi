import {login} from '../support/helpers/loginHelper';
import {findProduct} from "../support/helpers/productSearchHelper";
import MainPage from "../support/pages/MainPage";
import BasketPage from "../support/pages/BasketPage";
import SelectAddressPage from "../support/pages/SelectAddressPage";
import DeliveryMethodPage from "../support/pages/DeliveryMethodPage";
import PaymentOptionsPage from "../support/pages/PaymentOptionsPage";
import OrderSummaryPage from "../support/pages/OrderSummaryPage";
import OrderCompletionPage from "../support/pages/OrderCompletionPage";

describe('User can', () => {
  it('purchase a product via Search', () => {
    login();
    MainPage.clickSearchButton();
    MainPage.getSearchInput().type('b').type('{enter}');

    findProduct('OWASP Juice Shop Hoodie');

    MainPage.clickYourBasketButton();
    BasketPage.clickCheckoutButton();
    SelectAddressPage.selectAddress();
    SelectAddressPage.clickContinueButton();
    DeliveryMethodPage.clickFatsDeliveryRadioButton();
    DeliveryMethodPage.clickContinueButton();
    PaymentOptionsPage.clickPaymentRadioButton();
    PaymentOptionsPage.clickContinueButton();
    OrderSummaryPage.clickCheckoutButton();
    OrderCompletionPage.getOrderConfirmationToast().should('contain.text', 'Thank you for your purchase!')

  })
})