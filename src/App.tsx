import Nav from './components/nav/index';
import Hero from './components/hero/index';
import HeroText from './components/hero-text';
import Border from './components/border';
import Content from './components/content';
import Footer from './components/footer';

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Border />
      <HeroText />
      <Border />
      <Content backgroundColor="bg-brand-yellow" minHeight="min-h-[2613px]" />
      <Border />
      <Content backgroundColor="bg-brand-green" minHeight="min-h-[2774px]" />
      <Border />
      <Content backgroundColor="bg-brand-blue" minHeight="min-h-[1358px]" />
      <Border />
      <Content backgroundColor="bg-brand-yellow" minHeight="min-h-[815px]" />
      <Border />
      <Footer />
    </>
  );
}
