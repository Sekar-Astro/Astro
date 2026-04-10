import { type ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  className?: string;
  children: ReactNode;
}

export const Card = ({ className, children }: CardProps) => {
  return (
    <div className={clsx("rounded-3xl border border-border bg-background shadow-sm", className)}>
      {children}
    </div>
  );
};

export const CardContent = ({ className, children }: CardProps) => {
  return <div className={clsx("rounded-3xl p-6", className)}>{children}</div>;
};
