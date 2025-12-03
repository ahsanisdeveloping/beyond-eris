import Image from "next/image";
import Link from "next/link";
import getProduct from "../../services/productService";
import AddToCartButton from "../../components/ui/AddToCartButton";

type Product = {
  id: string | number;
  title: string;
  price: number;
  description?: string;
  image?: string;
};

export default function ProductPage({ product }: { product: Product }) {
  return (
    <section className="w-full max-w-3xl mx-auto p-6">
      <div className="rounded-md bg-gradient-to-r from-green-400 to-emerald-500 text-white p-6 mb-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center">{product.title}</h2>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden border border-emerald-50 p-6 flex flex-col md:flex-row gap-6">
        <div className="relative w-full md:w-1/2 h-64 bg-gray-100">
          <Image src={product.image || "https://via.placeholder.com/600x400"} alt={product.title} fill className="object-contain" unoptimized />
        </div>
        <div className="flex-1 flex flex-col">
          <p className="text-emerald-700 text-xl font-bold mb-4">${product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <div className="mt-auto flex items-center gap-3">
            <AddToCartButton title={product.title} />
            <Link href="/" className="text-emerald-600 hover:underline">
              Back to products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getStaticPaths() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      },
      cache: "no-store"
    });
    
    if (!res.ok) {
      console.error("Failed to fetch product list:", res.status, res.statusText);
      return { paths: [], fallback: "blocking" };
    }

    const data = await res.json();
    const paths = Array.isArray(data) ? data.map((p: any) => ({ params: { id: String(p.id) } })) : [];
    return { paths, fallback: "blocking" };
  } catch (err) {
    console.error("Error in getStaticPaths:", err);
    return { paths: [], fallback: "blocking" };
  }
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  console.log(`[getStaticProps] params`, params);
  const product = await getProduct(params.id);
  if (!product) {
    console.warn(`[getStaticProps] product not found for id=${params.id}`);
    return { notFound: true };
  }
  return { props: { product }, revalidate: 60 };
}
