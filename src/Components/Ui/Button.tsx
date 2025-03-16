import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

const buttonVariants = {
  default: "bg-blue-500 text-white px-4 py-2 rounded",
  outline: "border border-gray-300 text-gray-700",
  ghost: "border border-red-300 text-black-700",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: keyof typeof buttonVariants;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, asChild = false, variant = "default", ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={(buttonVariants[variant], className)} ref={ref} {...props} />;
});

Button.displayName = "Button";
export { Button };
