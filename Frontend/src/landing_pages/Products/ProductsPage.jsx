import React from "react";
import Hero from "./Hero.jsx";
import LeftSection from "./LeftSection.jsx";

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        title="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        imageUrl="images/kite.png"
        tryDemo="https://zerodha.com/products/kite"
        learnMore="https://zerodha.com/products/kite"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodhakite"
        appStore="https://apps.apple.com/in/app/kite-by-zerodha/id105"
      />
    </>
  );
}

export default ProductsPage;
