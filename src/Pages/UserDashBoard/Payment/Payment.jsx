import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import useAxiosSecqure from "../../../Hooks/Axios/useAxiosSecqure";
import { useEffect, useState } from "react";
import swal from "sweetalert";

export default function Payment() {
  const axiosSecqure = useAxiosSecqure();
  const [coupon, setCoupon] = useState([]);
  const [match, setMatch] = useState(false);
  const [isLoading, setLoading] = useState(true); 
  const [matchCpn, setMatchCpn] = useState([]);
  const [newprice,setNewPrice] =useState(0)
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
  const price = 300;
  
  useEffect(() => {
    axiosSecqure.get('/coupon')
      .then(res => {
        setCoupon(res.data);
        setLoading(false); 
      })
      .catch(error => {
        console.error("Error fetching coupons:", error);
        setLoading(false); 
      });
  }, [axiosSecqure]);
  const handleCpn = (e) => {
    e.preventDefault();
    
    // Prevent coupon validation if the data is still loading
    if (isLoading) {
      swal('Please wait, loading coupons...');
      return;
    }

    const cpn = e.target.cpn.value;
    let matchedCoupon = null;
    coupon.forEach(c => {
      if (c.code === cpn) {
        matchedCoupon = c;
      }
    });

    if (matchedCoupon) {
      setMatch(true);
      setMatchCpn(matchedCoupon);
        const nprice = price - price * (matchedCoupon.amount / 100) 
        setNewPrice(nprice)
      swal(`You get ${matchedCoupon.amount}% discount. CONFIRM YOUR PAYMENT`);
      console.log(price);
    } else {
      swal('Coupon not valid!');
    }
  };

  return (
    <div className="text-center flex justify-center items-center md:p-12">
      <div className="border mt-24 p-6 flex flex-col lg:w-[800px] rounded-lg shadow-md max-w-[600px]">
        <div className="my-3 text-gray-500">
          <h1 className="text-3xl font-semibold text-blue-900">$300</h1>
          <p className="text-lg">Get verified Membership</p>
        </div>
        <div className="my-6">
          <form onSubmit={handleCpn}>
            <div className="">
              <input
                className="border border-blue-100 rounded-l-lg outline-none p-2"
                placeholder="Apply coupon.."
                type="text"
                name="cpn"
                id=""
              />
              <button
                disabled={match}
                className="p-2 bg-blue-400 rounded-r-lg font-semibold text-white"
                type="submit"
              >
                Apply Coupon
              </button>
            </div>
          </form>
        </div>
        <Elements className="w-full" stripe={stripePromise}>
          <CheckOutForm price={match? newprice : price}></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
}
