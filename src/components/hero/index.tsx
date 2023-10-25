import heroImage from '../../assets/images/hero-image.jpeg';

export default function Hero() {
  const heroStyle = {
    backgroundImage: `url(${heroImage})`,
  };

  return (
    <div 
      className="min-h-[657px] bg-cover bg-center" 
      style={heroStyle}
    >
    </div>
  );
}
