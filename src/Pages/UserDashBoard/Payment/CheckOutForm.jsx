import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecqure from "../../../Hooks/Axios/useAxiosSecqure";

export default function CheckOutForm() {
  const [clientSecret, setClientSecret] = useState('');
  const [err, setErr] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecqure = useAxiosSecqure();
  const price = 300;

  useEffect(() => {
    axiosSecqure.post('/create-payment-intent', { price: price })
      .then(res => {
        console.log("Response from server:", res);
        if (res.data && res.data.clientSecret) {
          setClientSecret(res.data.clientSecret);
        } else {
          console.error("Client secret not found in response");
        }
      })
      .catch(error => {
        console.error("Error fetching client secret:", error);
      });
  }, [axiosSecqure, price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setErr(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setErr('');
    }

    const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: paymentMethod.id,
    });

    if (confirmError) {
      console.log("payment confirmation error", confirmError);
      setErr(confirmError.message);
    } else {
      console.log("payment intent", paymentIntent);
      setErr('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button className="btn border-t-blue-100" type="submit" disabled={!stripe }>
        Pay
      </button>
      <p className="text-red-500">{err}</p>
    </form>
  );
}
