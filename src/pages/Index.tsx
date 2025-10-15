import { Book, Server, CreditCard, FileText, Rocket, Zap } from "lucide-react";
import { DocCard } from "@/components/DocCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary-glow/10" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm font-medium text-primary">Documentation</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-primary-glow">
            AxyteHost Documentation
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Everything you need to know about deploying, managing, and scaling your applications with AxyteHost.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/getting-started">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90">
                <Rocket className="mr-2 h-5 w-5" />
                Get Started
              </Button>
            </Link>
            <Link to="/api">
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                <FileText className="mr-2 h-5 w-5" />
                API Docs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Start Cards */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-3">Quick Start</h2>
          <p className="text-muted-foreground">Choose a topic to get started with AxyteHost</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DocCard
            title="Getting Started"
            description="Learn the basics and deploy your first application"
            icon={Rocket}
            href="/getting-started"
          />
          <DocCard
            title="Hosting Guide"
            description="Comprehensive guide to hosting on AxyteHost"
            icon={Server}
            href="/hosting"
          />
          <DocCard
            title="Billing & Plans"
            description="Understanding pricing, plans, and payment methods"
            icon={CreditCard}
            href="/billing"
          />
          <DocCard
            title="API Reference"
            description="Complete API documentation and examples"
            icon={FileText}
            href="/api"
          />
          <DocCard
            title="Tutorials"
            description="Step-by-step guides for common tasks"
            icon={Book}
            href="/getting-started"
          />
          <DocCard
            title="Performance"
            description="Optimize your applications for speed"
            icon={Zap}
            href="/hosting"
          />
        </div>
      </section>

      {/* Popular Topics */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
        <h2 className="text-3xl font-bold mb-8">Popular Topics</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">Deployment</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/getting-started" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Deploy your first app
                </Link>
              </li>
              <li>
                <Link to="/hosting" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Custom domains
                </Link>
              </li>
              <li>
                <Link to="/hosting" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Environment variables
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">Management</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/billing" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Managing your account
                </Link>
              </li>
              <li>
                <Link to="/api" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Using the API
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Getting support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
