import React from "react";

type LogoTextProps = {
  className?: string; 
};

const LogoText: React.FC<LogoTextProps> = ({ className }) => {
  return (
    <h1 className={`font-montserrat text-3xl  font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent  ${className}`}>
      Melodix
    </h1>
  );
};

export default LogoText;
