import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import useAxiosSecqure from "../../../Hooks/Axios/useAxiosSecqure";
import { AuthContext } from "../../../AuthProvider/AuthProdiver";
import swal from "sweetalert";

export default function CheckOutForm({price}) {
  const [clientSecret, setClientSecret] = useState("");
  const [err, setErr] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecqure = useAxiosSecqure();
  const { user } = useContext(AuthContext);
 //console.log(price)
  useEffect(() => {
    axiosSecqure
      .post("/create-payment-intent", { price: price })
      .then((res) => {
        console.log("Response from server:", res);
        if (res.data && res.data.clientSecret) {
          setClientSecret(res.data.clientSecret);
        } else {
          console.error("Client secret not found in response");
        }
      })
      .catch((error) => {
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
      setErr("");
    }

    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonyumous",
          },
        },
      });

    if (confirmError) {
      console.log("payment confirmation error", confirmError);
      setErr(confirmError.message);
    } else {
      console.log("payment intent", paymentIntent);
      setErr("");
      if (paymentIntent.status === "succeeded") {
        swal("payment Successfull !!");
        
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 ">
      <div className="border rounded-lg p-2">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "20px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
                border: "1px solid black", // Border for the input field
                padding: "10px", // Padding inside the input field
                borderRadius: "4px", // Rounded corners for the input field
                "::selection": {
                  color: "#424770",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
      </div>
      <button
        className="btn bg-blue-100"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-500">{err}</p>
    </form>
  );
}
