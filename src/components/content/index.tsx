interface contentProps {
  backgroundColor: string;
  minHeight: string;
}

export default function Content({ backgroundColor, minHeight }: contentProps) {
  return <div className={`${backgroundColor} ${minHeight}`} />
}
