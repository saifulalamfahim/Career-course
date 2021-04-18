import React from 'react';
import {Elements, CardElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Ie2AXL8W2m5xtPnjPbMhvZwBaPiuFhDy3uX1F4qz5OKFtllJbMkGaL4IE42MuT8cICq4JX8twakDKx1P7QShT0k00cvVDUOYh');

const ProccesPayment = () => {
    return (
        <Elements stripe={stripePromise}>
               <CardElement
                        options={{
                            style: {
                            base: {
                                fontSize: '16px',
                                color: 'white',
                                '::placeholder': {
                                color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                            },
                        }}
                        />
       </Elements>
    );
};

export default ProccesPayment;