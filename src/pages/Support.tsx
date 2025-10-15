import { HelpCircle, MessageCircle, Mail, FileQuestion } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Support = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">
            Support & Help
          </h1>
          <p className="text-xl text-muted-foreground">
            Get help when you need it
          </p>
        </div>

        <div className="space-y-8">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                Live Chat Support
              </CardTitle>
              <CardDescription>
                Get instant help from our support team
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Our support team is available 24/7 via live chat. Click the chat button in the bottom right corner of any page to start a conversation.
              </p>
              <Button className="bg-gradient-to-r from-primary to-primary-glow">
                <MessageCircle className="mr-2 h-4 w-4" />
                Start Live Chat
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Email Support
              </CardTitle>
              <CardDescription>
                Send us an email for non-urgent inquiries
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                For non-urgent questions or detailed technical issues, email us at:
              </p>
              <Card className="bg-secondary border-border">
                <CardContent className="p-4">
                  <code className="text-primary">support@axytehost.com</code>
                </CardContent>
              </Card>
              <p className="text-sm text-muted-foreground">
                Average response time: 2-4 hours
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileQuestion className="h-5 w-5 text-primary" />
                Common Issues
              </CardTitle>
              <CardDescription>
                Quick solutions to common problems
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Deployment Failed</h4>
                  <p className="text-sm text-muted-foreground">
                    Check your build logs for errors. Common issues include missing dependencies or incorrect build commands.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Domain Not Working</h4>
                  <p className="text-sm text-muted-foreground">
                    Ensure your DNS records are properly configured. It can take up to 48 hours for DNS changes to propagate.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Slow Performance</h4>
                  <p className="text-sm text-muted-foreground">
                    Check your server resources and consider upgrading to a larger plan if you're consistently hitting limits.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" />
                FAQ
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">How do I upgrade my plan?</h4>
                  <p className="text-sm text-muted-foreground">
                    Navigate to Settings → Billing and select your desired plan. Upgrades take effect immediately.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Can I downgrade my plan?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes, downgrades will take effect at the start of your next billing cycle.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Do you offer refunds?</h4>
                  <p className="text-sm text-muted-foreground">
                    We offer a 30-day money-back guarantee for new customers.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Support;
