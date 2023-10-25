interface contentProps {
  afterSkew?: string,
  backgroundColor: string;
  minHeight: string;
  zIndex?: string;
}

export default function Content({
  backgroundColor,
  afterSkew,
  minHeight,
  zIndex,
}: contentProps) {
  return <div className={`relative z-[${zIndex}] ${backgroundColor} ${minHeight} ${afterSkew}`} />;
}
