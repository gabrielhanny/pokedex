import React from "react";
import { Slot } from "@radix-ui/react-slot";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean; // Untuk menggunakan elemen lain sebagai button
};

export const Button: React.FC<ButtonProps> = ({ asChild, className, ...props }) => {
  const Comp = asChild ? Slot : "button"; // Jika `asChild` true, gunakan Slot dari Radix UI

  return <Comp className={"px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"} {...props} />;
};
