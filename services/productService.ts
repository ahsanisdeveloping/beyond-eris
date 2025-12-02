export default async function getProduct(id: string) {
  try {
    const url = `https://fakestoreapi.com/products/${id}`;
    const res = await fetch(url, { cache: "no-store" });
    console.log(`[getProduct] fetch ${url} status=${res.status}`);
    if (!res.ok) return null;
    const ct = res.headers.get("content-type") || "";
    if (!ct.includes("application/json")) {
      const text = await res.text();
      console.error(`[getProduct] non-json response for ${id} content-type=${ct} body=${text.slice(0,200)}`);
      return null;
    }
    return await res.json();
  } catch (err) {
    console.error(`[getProduct] error fetching ${id}:`, err);
    return null;
  }
}