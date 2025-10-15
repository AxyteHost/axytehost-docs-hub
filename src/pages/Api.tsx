import { Code, Key, Terminal, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Api = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">
            API Documentation
          </h1>
          <p className="text-xl text-muted-foreground">
            Integrate AxyteHost into your workflow programmatically
          </p>
        </div>

        <div className="space-y-8">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5 text-primary" />
                Authentication
              </CardTitle>
              <CardDescription>
                Authenticate your API requests
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                All API requests require authentication using an API key. You can generate API keys from your account dashboard.
              </p>
              <Card className="bg-secondary border-border">
                <CardContent className="p-4">
                  <div className="space-y-2 font-mono text-sm">
                    <p className="text-muted-foreground">Authorization Header:</p>
                    <code className="text-primary">Authorization: Bearer YOUR_API_KEY</code>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Terminal className="h-5 w-5 text-primary" />
                Base URL
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Card className="bg-secondary border-border">
                <CardContent className="p-4">
                  <code className="text-primary font-mono">https://api.axytehost.com/v1</code>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                Endpoints
              </CardTitle>
              <CardDescription>
                Available API endpoints
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs font-mono rounded">GET</span>
                    /deployments
                  </h4>
                  <p className="text-sm text-muted-foreground">List all your deployments</p>
                  <Card className="bg-secondary border-border">
                    <CardContent className="p-4">
                      <pre className="text-xs font-mono text-foreground overflow-x-auto">
{`curl -X GET https://api.axytehost.com/v1/deployments \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
                      </pre>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs font-mono rounded">POST</span>
                    /deployments
                  </h4>
                  <p className="text-sm text-muted-foreground">Create a new deployment</p>
                  <Card className="bg-secondary border-border">
                    <CardContent className="p-4">
                      <pre className="text-xs font-mono text-foreground overflow-x-auto">
{`curl -X POST https://api.axytehost.com/v1/deployments \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"name": "my-app", "region": "us-east"}'`}
                      </pre>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <span className="px-2 py-1 bg-red-500/10 text-red-400 text-xs font-mono rounded">DELETE</span>
                    /deployments/:id
                  </h4>
                  <p className="text-sm text-muted-foreground">Delete a deployment</p>
                  <Card className="bg-secondary border-border">
                    <CardContent className="p-4">
                      <pre className="text-xs font-mono text-foreground overflow-x-auto">
{`curl -X DELETE https://api.axytehost.com/v1/deployments/abc123 \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
                      </pre>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Rate Limits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                API requests are rate-limited to ensure fair usage:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Starter: 100 requests/hour
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Pro: 1,000 requests/hour
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Enterprise: Unlimited
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Api;
