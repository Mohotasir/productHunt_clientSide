import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";

export default function Payment() {
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
  console.log(import.meta.env.VITE_PAYMENT_PK)
  return (
    <div>
      <div className="border mt-24">
        <Elements stripe={stripePromise}>
             <CheckOutForm></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
}
