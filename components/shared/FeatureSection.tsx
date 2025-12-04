import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FeatureSectionProps {
  title: string;
  description: string;
  children?: ReactNode;
  align?: "left" | "right" | "center";
  className?: string;
}

export default function FeatureSection({ 
  title, 
  description, 
  children, 
  align = "left",
  className 
}: FeatureSectionProps) {
  return (
    <section className={cn("py-16 md:py-24 bg-gray-900 text-white", className)}>
      <div className="container mx-auto px-4">
        <div className={cn("max-w-4xl mx-auto space-y-12", {
          "text-center": align === "center",
          "text-left": align === "left",
          "text-right": align === "right"
        })}>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              {title}
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          </div>
          
          {children && (
            <div className="mt-8">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
