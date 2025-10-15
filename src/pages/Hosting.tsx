import { Server, Globe, Settings, Gauge } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Hosting = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">
            Hosting Documentation
          </h1>
          <p className="text-xl text-muted-foreground">
            Learn how to host and manage your applications on AxyteHost
          </p>
        </div>

        <div className="space-y-8">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-5 w-5 text-primary" />
                Server Configuration
              </CardTitle>
              <CardDescription>
                Configure your server settings for optimal performance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                AxyteHost provides flexible server configurations to match your application's needs. Choose from various server sizes, configure auto-scaling rules, and manage your resources efficiently.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Available Server Types:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span><strong>Basic:</strong> 1 CPU, 512MB RAM - Perfect for small apps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span><strong>Standard:</strong> 2 CPU, 2GB RAM - Ideal for medium traffic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span><strong>Premium:</strong> 4 CPU, 8GB RAM - High-performance applications</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                Custom Domains
              </CardTitle>
              <CardDescription>
                Connect your custom domain to your application
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Adding a custom domain is straightforward. Simply add your domain in the dashboard, configure your DNS settings, and we'll handle the SSL certificate automatically.
              </p>
              <Card className="bg-secondary border-border">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">DNS Configuration:</h4>
                  <div className="space-y-1 font-mono text-sm text-foreground">
                    <p>Type: A Record</p>
                    <p>Name: @</p>
                    <p>Value: 192.168.1.1</p>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                Environment Variables
              </CardTitle>
              <CardDescription>
                Manage your application's environment variables securely
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Store sensitive configuration like API keys and database URLs securely. All environment variables are encrypted at rest and only available to your application.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gauge className="h-5 w-5 text-primary" />
                Performance Optimization
              </CardTitle>
              <CardDescription>
                Tips and best practices for optimal performance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Maximize your application's performance with these optimization techniques:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span>Enable CDN for static assets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span>Configure caching headers properly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span>Use auto-scaling during traffic spikes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span>Monitor resource usage regularly</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Hosting;
