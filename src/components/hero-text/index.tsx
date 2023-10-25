interface heroProps {
  zIndex: number;
}

export default function HeroText({ zIndex }: heroProps) {
  const style =
    `bg-brand-blue min-h-[400px] text-neutral-50 flex flex-col items-center gap-2 justify-center px-16 py-8 relative z-[${zIndex}]`;

  const afterSkew =
    `after:bg-inherit after:bottom-0 after:content-[''] after:block after:h-4/6 after:left-0 after:absolute after:right-0 after:-skew-y-6 after:origin-[100%] after:z-[${zIndex - 1}] after:border-b-[24px] after:border-brand-black`;

  const beforeSkew =
    `before:bg-inherit before:top-0 before:content-[''] before:block before:h-3/6 before:left-0 before:absolute before:right-0 before:skew-y-3 before:origin-[100%] before:z-[${zIndex - 1}] before:border-t-[24px] before:border-brand-black`;

  return (
    <div className={`${style} ${beforeSkew} ${afterSkew}`}>
      <div className={`z-[${zIndex}]`}>
        <h1 className="text-7xl">Some Hero Heading Here</h1>
        <p>
          Consectetur repudiandae illo nobis expedita a Cum expedita laboriosam
          quae minus quisquam Quisquam nesciunt optio id neque labore Modi a
          nostrum hic amet nobis?
        </p>
      </div>
    </div>
  );
}
