// src/hooks/usePaystackScript.js
import { useEffect } from "react";

const usePaystackScript = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
};

export default usePaystackScript; // ✅ Default export
