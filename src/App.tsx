import Border from "./components/border";
import Content from "./components/content";
import Footer from "./components/footer";
import Hero from "./components/hero/index";
import HeroText from "./components/hero-text";
import Nav from "./components/nav/index";

export default function App() {
  return (
    <div className="max-w-[1000px] m-auto">
      <Nav />
      <Hero />
      <HeroText 
        zIndex={3}
      />
      <Content
        afterSkew="after:bg-inherit after:bottom-0 after:content-[''] after:block after:h-3/6 after:left-0 after:absolute after:right-0 after:skew-y-6 after:origin-[0] after:z-[1] after:border-b-[24px] after:border-brand-black"
        backgroundColor="bg-brand-yellow"
        minHeight="min-h-[1742px]"
        zIndex="2"
      />
      <Content 
        afterSkew="after:bg-inherit after:bottom-0 after:content-[''] after:block after:h-3/6 after:left-0 after:absolute after:right-0 after:-skew-y-3 after:origin-[100%] after:z-[0] after:border-b-[24px] after:border-brand-black"
        backgroundColor="bg-brand-green" 
        minHeight="min-h-[1850px]" 
        zIndex="1"
      />
      <Content 
        afterSkew="after:bg-inherit after:bottom-0 after:content-[''] after:block after:h-3/6 after:left-0 after:absolute after:right-0 after:-skew-y-1 after:origin-[100%] after:z-[-1] after:border-b-[24px] after:border-brand-black"
        backgroundColor="bg-brand-blue" 
        minHeight="min-h-[1358px]" 
        zIndex="0"
      />
      <Border />
      <Content backgroundColor="bg-brand-yellow" minHeight="min-h-[815px]" />
      <Border brown />
      <Footer />
    </div>
  );
}
