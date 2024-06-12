import { useEffect, useState } from "react";
import ProductCard from "../HOME/singleProductCard/ProductCard";
import useAxiosSecqure from "../../Hooks/Axios/useAxiosSecqure";

export default function Allproducts() {
  const [tagName, setTagName] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [current, setCurrent] = useState(0);
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalprod, setTotal] = useState(0);
  const axiosSecqure = useAxiosSecqure();
  const itemPerPage = 6;  

  useEffect(() => {
    axiosSecqure.get('/accepted-products')
      .then(res => {
        setTotal(res.data);  
      })
      .catch(error => {
        console.error("Error fetching total products:", error);
      });
  }, []);

  useEffect(() => {
    if (tagName) {
      handleSearch();
    } else {
      axiosSecqure.get(`/page-products?page=${current}&size=${itemPerPage}`)
        .then(res => {
          setProducts(res.data);
          setLoading(false);
        })
        .catch(error => {
          console.error("Error fetching products:", error);
          setLoading(false);
        });
    }
  }, [current, itemPerPage, tagName]);

  const handleSearch = async () => {
    try {
      const response = await axiosSecqure.get(`/search?tag=${tagName}`);
      setSearchResults(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error searching products:', error);
      setLoading(false);
    }
  };

  const pages = Math.ceil(totalprod.total / itemPerPage);

  const handlePrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const handleNext = () => {
    if (current < pages - 1) {
      setCurrent(current + 1);
    }
  };

  return (
    <div className="">
      <div className="text-center flex flex-col items-center justify-center bg-slate-50 py-2 min-h-20 lg:min-h-32">
        <div className="lg:w-[800px]">
          <input
            className="text-xl w-[50%] md:w-[60%] border rounded-l-lg outline-none p-2 md:p-3"
            type="text"
            name="search"
            placeholder="Search...."
            value={tagName}
            onChange={(e) => setTagName(e.target.value)}
          />
          <button onClick={handleSearch} className="p-3 md:text-xl rounded-r-lg bg-blue-200">
            Search
          </button>
        </div>
      </div>
      <div className="min-h-60vh mt-12 max-w-screen-2xl mx-8">
        {
          loading ? <p>Loading</p> :
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
              {tagName && searchResults.length > 0 ?
                searchResults.map(product => (
                  product.status === 'accepted' &&
                  <ProductCard key={product._id} product={product} />
                )) :
                product.map(product => (
                  product.status === 'accepted' &&
                  <ProductCard key={product._id} product={product} />
                ))
              }
            </div>
        }
        <div className="text-center my-4 flex gap-2 justify-center items-center">
          <button onClick={handlePrev} className="btn">Prev</button>
          {Array.from({ length: pages }, (_, page) => (
            <button
              className={`btn ${current === page ? 'bg-blue-500' : ''}`}
              onClick={() => setCurrent(page)}
              key={page}
            >
              {page + 1}
            </button>
          ))}
          <button onClick={handleNext} className="btn">Next</button>
        </div>
      </div>
    </div>
  );
}
