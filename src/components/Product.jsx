import { Fade, Slide, Zoom } from "react-awesome-reveal";
import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

const ProductSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/equipmenthome?limit=6') 
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="my-8">
      <section>

        <Slide direction="up" cascade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Zoom>
                <div className="card bg-gray-100 shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                  <Fade>
                    <div
                      className="h-56 bg-cover bg-center"
                      style={{ backgroundImage: `url(${product.image})` }}
                    ></div>
                  </Fade>
                  <div className="p-4">
                      <h2 className="text-xl font-semibold text-gray-800">{product.item}</h2>
                    <Slide direction="left">
                      <p className="text-gray-600 mt-2">Description: {product.description}...</p>
                    </Slide>
                    <Fade>
                      <p className="text-lg font-bold text-green-500 mt-4">Price: {product.price}$</p>
                    </Fade>
                    <Zoom>
                      <p className="text-lg font-bold text-green-500 mt-4 flex items-center">
                        Ratings: {product.rating}
                        <span className="text-2xl ml-2 text-yellow-500">
                          <AiFillStar />
                        </span>
                      </p>
                    </Zoom>
                    <Fade>
                      <div className="mt-4 text-center">
                        <button className="btn btn-primary">
                          <a href={`/viewdetails/${product._id}`}>View Details</a>
                        </button>
                      </div>
                    </Fade>
                  </div>
                </div>
              </Zoom>
            ))}
          </div>
        </Slide>
      </section>
    </div>
  );
};

export default ProductSection;
