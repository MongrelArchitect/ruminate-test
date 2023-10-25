import Skew from "../skew";

interface heroTextProps {
  skew: string;
  zIndex: number;
}

export default function HeroText({ skew, zIndex }: heroTextProps) {
  const style =
    `bg-brand-blue min-h-[300px] text-neutral-50 flex flex-col gap-2 justify-center px-16 py-8 relative z-[${zIndex}]`;

  return (
    <div className={style}>
      <div className={`z-[${zIndex}]`}>
        <h1 className="text-7xl">Some Heading Here</h1>
        <p>
          Consectetur repudiandae illo nobis expedita a Cum expedita laboriosam
          quae minus quisquam Quisquam nesciunt optio id neque labore Modi a
          nostrum hic amet nobis?
        </p>
      </div>
      <Skew
        style={skew}
      />
    </div>
  );
}
