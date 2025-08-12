import React from "react";
import Hero from "./Hero.jsx";
import LeftSection from "./LeftSection.jsx";
import RightSection from "./RightSection.jsx";
import Universe from "./Universe.jsx";

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
      <RightSection
        title="Console"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="https://zerodha.com/products/console"
        imageUrl="images/console.png"
      />

      <LeftSection
        title="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        imageUrl="images/coin.png"
        tryDemo="https://zerodha.com/products/kite"
        learnMore="https://zerodha.com/products/kite"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodhakite"
        appStore="https://apps.apple.com/in/app/kite-by-zerodha/id105"
      />

      <RightSection
        title="Kite Connect API"
        description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="https://zerodha.com/products/console"
        imageUrl="images/kiteconnect.png"
      />

      <LeftSection
        title="Varsity mobile"
        description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        imageUrl="images/varsity.png"
        tryDemo="https://zerodha.com/products/kite"
        learnMore="https://zerodha.com/products/kite"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodhakite"
        appStore="https://apps.apple.com/in/app/kite-by-zerodha/id105"
      />

      <Universe />
    </>
  );
}

export default ProductsPage;
