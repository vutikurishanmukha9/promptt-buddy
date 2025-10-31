/**
 * Footer Component
 * Application footer with attribution
 */

import { Heart } from "lucide-react";
export const Footer = () => {
  return <footer className="border-t border-border bg-card/30 backdrop-blur-sm mt-16">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-sm text-muted-foreground">
            Built By <span className="font-semibold text-foreground">Shanmukh</span>
          </p>
          
        </div>
      </div>
    </footer>;
};