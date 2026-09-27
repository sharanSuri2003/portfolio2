import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Filled is Void Black with Bone Cream type. Outline is the paper with a
 * black hairline. Hover flips the two. Alarm Red is not a variant.
 */
const buttonVariants = cva("pill", {
  variants: {
    variant: {
      solid: "",
      outline: "pill-outline",
    },
  },
  defaultVariants: {
    variant: "solid",
  },
});

function Button({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
