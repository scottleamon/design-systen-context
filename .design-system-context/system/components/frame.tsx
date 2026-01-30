import { cn } from "@/lib/utils";

interface FrameProps {
  children?: React.ReactNode;
  className?: string;
}

export function Frame({ children, className }: FrameProps) {
  return (
    <div
      className={cn(
        "h-[600px] w-[800px] overflow-hidden bg-background",
        className
      )}
    >
      {children}
    </div>
  );
}
