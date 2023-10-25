interface skewProps {
  style: string;
}

export default function Skew({ style }: skewProps) {
  return(
    <div className={style} />
  );
}
