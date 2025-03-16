import React, { ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
};

export const Title: React.FC<TitleProps> = ({ children }) => {
  return <h1 className="text-3xl md:text-4xl font-bold text-center text-red-500 drop-shadow-md">{children}</h1>;
};
