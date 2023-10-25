interface borderProps {
  brown?: boolean;
}

export default function Border({ brown }: borderProps) {
  return (
    <div className={`bg-brand-${brown ? 'brown' : 'black'} min-h-[24px]`} />
  );
}
