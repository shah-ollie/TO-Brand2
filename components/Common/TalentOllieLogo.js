import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/context/Context";

const TalentOllieLogo = ({ 
  width = 200, 
  height = 33, 
  priority = true, 
  className = "",
  linkHref = "/",
  showLink = true 
}) => {
  const { isLightTheme } = useAppContext();
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const logoSrc = isLightTheme ? "/images/logo/logo-light.png" : "/images/logo/logo-dark.png";
  const logoClass = `talent-ollie-logo ${isLightTheme ? "logo-light" : "logo-dark"} ${className}`;

  const handleImageError = () => {
    console.error("TalentOllie logo failed to load:", logoSrc);
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const LogoImage = () => (
    <>
      {imageLoading && (
        <div 
          className="logo-placeholder"
          style={{
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '4px',
            fontSize: '14px',
            color: '#666'
          }}
        >
          Loading...
        </div>
      )}
      {imageError ? (
        <div 
          className="logo-fallback"
          style={{
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: isLightTheme ? '#fff' : '#333',
            color: isLightTheme ? '#333' : '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `2px solid ${isLightTheme ? '#333' : '#fff'}`,
            borderRadius: '4px',
            fontWeight: 'bold',
            fontSize: '16px'
          }}
        >
          TalentOllie
        </div>
      ) : (
        <Image
          className={logoClass}
          src={logoSrc}
          width={width}
          height={height}
          priority={priority}
          alt="TalentOllie - Agentic Talent Stack"
          onError={handleImageError}
          onLoad={handleImageLoad}
          style={{ 
            objectFit: 'contain',
            display: imageLoading ? 'none' : 'block'
          }}
        />
      )}
    </>
  );

  if (!showLink) {
    return <LogoImage />;
  }

  return (
    <Link href={linkHref} className="logo-link">
      <LogoImage />
    </Link>
  );
};

export default TalentOllieLogo;