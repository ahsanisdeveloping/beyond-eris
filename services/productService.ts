export default async function getProduct(id: string | number) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      },
      cache: "no-store"
    });
    
    if (!res.ok) {
      console.error(`[getProduct] fetch https://fakestoreapi.com/products/${id} status=${res.status}`);
      return null;
    }
    
    return res.json();
  } catch (err) {
    console.error(`[getProduct] error fetching product ${id}:`, err);
    return null;
  }
}