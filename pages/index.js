import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import HeroSection from "../components/HeroSection";
import Products from "../components/products/Products";
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Beyond Eris - Your Ultimate Shopping Experience</title>
        <meta name="description" content="Discover the best products at Beyond Eris. Shop now for exclusive deals and offers!" />
        <meta name="keywords" content="shopping, products, deals, offers, Beyond Eris" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.beyond-eris.com" />
      </Head>
      <HeroSection />
      <Products />
    </div>
  );
}
