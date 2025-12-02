"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Loader from "../ui/loader";
import getProducts from "../../services/productServices";

type Product = {
  id: string | number;
  title: string;
  price: number;
  description?: string;
  image?: string;
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const results = await getProducts();
      setProducts(results || []);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <section className="w-full max-w-6xl mx-auto ">
      
      {loading ? (
        <div className="flex flex-col items-center justify-center py-12 text-emerald-700">
          <Loader />
          <span className="mt-3 text-sm text-emerald-700">
            Loading products...
          </span>
        </div>
      ) : (
        <div>
          <div className="py-7 flex justify-center align-center">
        <h2
          className="inline-flex items-center justify-center 
             text-5xl font-extrabold text-center
             bg-gradient-to-r from-green-400 to-emerald-500
             bg-clip-text text-transparent"
        >
          Products
        </h2>
      </div>
       <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden flex flex-col border border-emerald-50 transition"
            >
              <div className="relative w-full h-48 bg-gray-100">
                <Image
                  src={product.image || "https://via.placeholder.com/600x400"}
                  alt={product.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="mb-3">
                  <h3 className="text-lg font-semibold text-emerald-900">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {product.description}
                  </p>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xl font-bold text-emerald-700">
                    ${product.price}
                  </span>
                  <Link
                    href={`/products/${product.id}`}
                    className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        </div>
       
      )}
    </section>
  );
};

export default Products;
