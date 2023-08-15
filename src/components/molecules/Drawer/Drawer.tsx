import classNames from "classnames";
import type { ComponentPropsWithRef } from "react";
import React, { forwardRef } from "react";

export type DrawerProps = ComponentPropsWithRef<"div"> & {
  isOpen: boolean;
  direction?: "left" | "right";
};

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(function Drawer(
  { isOpen, direction = "left", children, ...props },
  ref
) {
  const directions = {
    left: {
      closed: "left-[-70vw]",
      open: "left-0",
    },

    right: {
      closed: "right-[-70vw]",
      open: "right-0",
    },
  };

  return (
    <div
      className={classNames(
        directions[direction][isOpen ? "open" : "closed"],
        "z-50 border-red fixed w-[70vw] max-w-[325px] sm:min-w-[280px] inset-y-0 bg-white transition-all duration-300 ease-in-out shadow-3"
      )}
      data-testid="drawer"
      {...props}
      ref={ref}
    >
      {children}
    </div>
  );
});
