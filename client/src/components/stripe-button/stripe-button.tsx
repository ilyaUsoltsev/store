import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
interface IProps {
  price: number;
}

function StripeCheckoutButton({ price }: IProps) {
  const priceForStripe = price * 100;
  const onToken = (token: any) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        token,
        amount: priceForStripe,
      },
    }).then(
      () => {
        alert("SUCCESS!");
      },
      (err) => {
        console.log(err);
        alert("NOT SUCCESSFUL make sure your FAKE card info is correct");
      }
    );
  };
  const publishableKey =
    "pk_test_51I4rgnJofaUOc1DMJD0TJPmxQkQfb9X01GV3eBuB1C9g94sMQ5hBRLOY0lUMvklurTpw67jy8mblBtfc6sifGpEp00SZDqZPY5";
  return (
    <StripeCheckout
      name="My awesome app"
      label="Pay now"
      billingAddress
      shippingAddress
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeCheckoutButton;
