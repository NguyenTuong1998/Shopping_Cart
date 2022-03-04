import productApi from "api/productApi";
import { useEffect, useState } from "react";

export default function useProductDetail(productId) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await productApi.get(productId);
        // console.log(result);
        setProduct(result);
      } catch (error) {
        console.log("failed to fetch", error);
      }
      setLoading(false);
    })();
  }, [productId]);

  return { product, loading };
}
