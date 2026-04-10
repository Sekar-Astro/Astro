import { type ReactElement, type ReactNode, createContext, useContext, useMemo, useState, cloneElement } from "react";
import clsx from "clsx";

interface SheetContextValue {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const SheetContext = createContext<SheetContextValue | null>(null);

interface SheetProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
}

export const Sheet = ({ open, onOpenChange, children }: SheetProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = open !== undefined;
  const sheetOpen = isControlled ? open : internalOpen;

  const setOpen = (value: boolean) => {
    if (!isControlled) {
      setInternalOpen(value);
    }
    onOpenChange?.(value);
  };

  const value = useMemo(() => ({ open: sheetOpen, setOpen }), [sheetOpen]);

  return <SheetContext.Provider value={value}>{children}</SheetContext.Provider>;
};

const useSheet = () => {
  const context = useContext(SheetContext);
  if (!context) {
    throw new Error("Sheet components must be used within a Sheet provider.");
  }
  return context;
};

interface SheetTriggerProps {
  render?: ReactElement;
  children?: ReactNode;
}

export const SheetTrigger = ({ render, children }: SheetTriggerProps) => {
  const { setOpen } = useSheet();

  if (render) {
    return cloneElement(render, { onClick: () => setOpen(true), children });
  }

  return (
    <button type="button" onClick={() => setOpen(true)}>
      {children}
    </button>
  );
};

interface SheetContentProps {
  side?: "left" | "right";
  className?: string;
  children: ReactNode;
}

export const SheetContent = ({ side = "right", className, children }: SheetContentProps) => {
  const { open, setOpen } = useSheet();

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-stretch justify-end">
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        onClick={() => setOpen(false)}
        aria-label="Close sheet"
      />
      <div
        className={clsx(
          "relative h-full w-full max-w-xs bg-background shadow-2xl ring-1 ring-black/10",
          side === "left" ? "mr-auto" : "ml-auto",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
};

interface SheetTitleProps {
  className?: string;
  children: ReactNode;
}

export const SheetTitle = ({ className, children }: SheetTitleProps) => {
  return <h2 className={clsx("text-2xl font-semibold text-secondary", className)}>{children}</h2>;
};
