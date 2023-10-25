import Skew from '../skew';
import heroImage from '../../assets/images/hero-image.jpeg';

interface heroProps {
  skew: string;
  zIndex: number;
}

export default function Hero({ skew, zIndex }: heroProps) {
  const heroStyle = {
    backgroundImage: `url(${heroImage})`,
  };

  return (
    <div 
      className={`relative min-h-[657px] bg-cover bg-center z=[${zIndex}]`}
      style={heroStyle}
    >
      <Skew style={skew} />
    </div>
  );
}
