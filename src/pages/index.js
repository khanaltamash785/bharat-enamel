import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import Services from "../../components/Services";
import Testimonials from "../../components/Testimonials";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
      <Header />
      <Hero />
      <Features />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
