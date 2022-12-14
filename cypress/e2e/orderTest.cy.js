import MainPage from '../support/pages/MainPage';
import LoginPage from '../support/pages/LoginPage';
import user from '../fixtures/user.json';
import BasketPage from '../support/pages/BasketPage';
import SelectAddressPage from '../support/pages/SelectAddressPage';
import DeliveryMethodPage from '../support/pages/DeliveryMethodPage';
import PaymentOptionsPage from '../support/pages/PaymentOptionsPage';
import OrderSummaryPage from '../support/pages/OrderSummaryPage';
import OrderCompletionPage from "../support/pages/OrderCompletionPage";

describe('User can', () => {
  it('purchase a product', () => {
    LoginPage.visit();
    LoginPage.submitLoginForm(user.email, user.password);
    MainPage.clickAddToBasket(0);
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