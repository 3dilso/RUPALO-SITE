import * as React from "react";
import { Slot } from "@radix-ui/react-slot"; // Temporarily keep Slot for type compatibility, will remove if not needed
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        whatsapp: "bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90",
        hero: "bg-accent text-accent-foreground hover:bg-accent/90",
        heroOutline: "border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-md px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean; // Keep for now, but will ensure it's not used
  href?: string; // Add href for anchor buttons
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, href, ...props }, ref) => {
    const Comp = href ? "a" : "button"; // Use 'a' if href is provided, otherwise 'button'
    
    // If asChild is true, we expect props.children to be the element to render.
    // However, the user explicitly asked to remove asChild usage.
    // So, we will ignore asChild and always render Comp.
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref as any} // Cast ref to any to satisfy type for 'a' or 'button'
        {...(href && { href })} // Apply href if it's an anchor
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };