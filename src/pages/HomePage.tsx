import { useEffect } from 'react';
import HeroSection from '../components/Home/HeroSection';
import AboutSection from '../components/Home/AboutSection';
import ServicesSection from '../components/Home/ServicesSection';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import CallToAction from '../components/Home/CallToAction';

const HomePage = () => {
  useEffect(() => {
    document.title = 'MMB Trucking LLC - Fast. Reliable. Nationwide.';
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <CallToAction />
    </>
  );
};

export default HomePage;