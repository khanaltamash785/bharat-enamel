import { Geist, Geist_Mono } from "next/font/google";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import Services from "../../components/Services";
import Testimonials from "../../components/Testimonials";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";
import Stats from "../../components/Stats";
import Gallery from "../../components/Gallery";
import Contact from "../../components/Contact";
import About from "../../components/About";
import WhatsAppIcon from "../../components/WhatsappIcon";
import ScrollToTop from "../../components/ScrollToTop";

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
    <div>
      <Header />
      <section id="hero"><Hero /></section>
      <section id="features"><Features /></section>
      <section id="services"><Services /></section>
      <section id="testimonials"><Testimonials /></section>
      <Stats />
      <section id="gallery"><Gallery /></section>
      <section id="about"><About /></section>
      <section id="contact"><Contact /></section>
      <CTA />
      <ScrollToTop />
      <WhatsAppIcon />
      <Footer />
    </div>
  );
}

