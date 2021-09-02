import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import icon from '../../img/shop.png';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51JVAdUCbbI2aXwsYTZnXAab2MSsu6N8bGd8VR7gvrKcjt677isGxPwEYTTwpv6lWmM1S4i9Nl6FXC75Swi51zAOR00ywnMVv94';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful!');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image={icon}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
