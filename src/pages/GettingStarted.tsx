import { ArrowRight, CheckCircle2, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const GettingStarted = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">
            Getting Started with AxyteHost
          </h1>
          <p className="text-xl text-muted-foreground">
            Deploy your first application in minutes
          </p>
        </div>

        <div className="space-y-8">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Step 1: Create an Account
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Sign up for an AxyteHost account to access our hosting platform. New users get free credits to get started.
              </p>
              <Button className="bg-gradient-to-r from-primary to-primary-glow">
                Create Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Step 2: Install the CLI
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Install the AxyteHost CLI to deploy and manage your applications from the command line.
              </p>
              <Card className="bg-secondary border-border">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 text-sm font-mono text-primary">
                    <Terminal className="h-4 w-4" />
                    <code>npm install -g axytehost-cli</code>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Step 3: Deploy Your First App
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Navigate to your project directory and deploy your application with a single command.
              </p>
              <Card className="bg-secondary border-border">
                <CardContent className="p-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm font-mono text-foreground">
                    <Terminal className="h-4 w-4 text-primary" />
                    <code>cd your-project</code>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-mono text-foreground">
                    <Terminal className="h-4 w-4 text-primary" />
                    <code>axytehost deploy</code>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          <Card className="border-primary/50 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader>
              <CardTitle>Next Steps</CardTitle>
              <CardDescription>Continue learning about AxyteHost</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Configure custom domains
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Set up environment variables
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Monitor your application
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Scale your resources
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
