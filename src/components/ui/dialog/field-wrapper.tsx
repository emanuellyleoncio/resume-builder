import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Label } from "../label";

type FieldWrapperProps = {
  label: string;
  children: ReactNode;
  className?: string;
};

export const FieldWrapper = ({
  label,
  children,
  className,
}: FieldWrapperProps) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label>{label}</Label>
      {children}
    </div>
  );
};
