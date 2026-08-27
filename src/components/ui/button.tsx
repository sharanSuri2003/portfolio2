import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * The pill. Bone Cream fill, black text, and the one hard 0 4px 0 offset that
 * is the only shadow in the entire system — no blur, so it reads as stamped
 * onto the page rather than floating above it.
 *
 * Pressing drives the face down 4px and collapses the shadow to zero, so the
 * button lands exactly where its own shadow was. The visual and the physical
 * story agree, which a scale tween can't do for a shape like this.
 */
const buttonVariants = cva("pill", {
  variants: {
    variant: {
      solid: "",
      outline: "pill-outline",
    },
    size: {
      lg: "",
      compact: "pill-compact",
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "lg",
  },
});

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
