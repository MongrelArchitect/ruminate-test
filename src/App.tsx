import Border from "./components/border";
import Content from "./components/content";
import Footer from "./components/footer";
import Hero from "./components/hero/index";
import HeroText from "./components/hero-text";
import Nav from "./components/nav/index";

export default function App() {
  return (
    <div className="">
      <Nav />
      <Hero
        skew="bg-brand-blue bottom-0 content-[''] block h-1/6 left-0 absolute right-0 skew-y-3 origin-[0] z-[3] border-t-[24px] border-brand-black"
        zIndex={4}
      />
      <HeroText
        skew="bg-inherit bottom-0 content-[''] block h-4/6 left-0 absolute right-0 -skew-y-6 origin-[100%] z-[2] border-b-[24px] border-brand-black"
        zIndex={3}
      />
      <Content
        skew="bg-inherit bottom-0 content-[''] block h-3/6 left-0 absolute right-0 skew-y-6 origin-[0] z-[1] border-b-[24px] border-brand-black"
        backgroundColor="bg-brand-yellow"
        minHeight="min-h-[1742px]"
        zIndex={2}
      />
      <Content
        skew="bg-inherit bottom-0 content-[''] block h-3/6 left-0 absolute right-0 -skew-y-3 origin-[100%] z-[0] border-b-[24px] border-brand-black"
        backgroundColor="bg-brand-green"
        minHeight="min-h-[1850px]"
        zIndex={1}
      />
      <Content
        skew="bg-inherit bottom-0 content-[''] block h-3/6 left-0 absolute right-0 -skew-y-1 origin-[100%] z-[-1] border-b-[24px] border-brand-black"
        backgroundColor="bg-brand-blue"
        minHeight="min-h-[1358px]"
        zIndex={0}
      />
      <Content
        backgroundColor="bg-brand-yellow"
        minHeight="min-h-[815px]"
        zIndex={-1}
      />
      <Border />
      <Footer />
    </div>
  );
}
