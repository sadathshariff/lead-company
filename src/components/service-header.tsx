import { Link } from "wouter";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceHeaderProps {
  serviceName: string;
}

export default function ServiceHeader({ serviceName }: ServiceHeaderProps) {
  return (
    <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            <div className="h-6 w-px bg-slate-300 dark:bg-slate-600"></div>
            <h1 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              {serviceName}
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            <Link href="/seo-optimization">
              <Button variant="ghost" size="sm" className="text-sm">
                SEO
              </Button>
            </Link>
            <Link href="/ai-lead-generation">
              <Button variant="ghost" size="sm" className="text-sm">
                AI Leads
              </Button>
            </Link>
            <Link href="/website-development">
              <Button variant="ghost" size="sm" className="text-sm">
                Development
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}