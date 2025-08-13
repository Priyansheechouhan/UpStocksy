import React from 'react';
import Hero from "./Hero.jsx";
import ChargesExplain from "./ChargesExplain.jsx";    
import OpenAccout from "../OpenAccount.jsx";
import ChargesSection from "./ChargesSection.jsx";

function PricingPage() {
    return (
        <>
            <Hero />
            <OpenAccout />
            <ChargesSection />
            <ChargesExplain />
        </>
    );
}

export default PricingPage;