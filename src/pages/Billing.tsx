import { CreditCard, DollarSign, FileText, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Billing = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">
            Billing & Pricing
          </h1>
          <p className="text-xl text-muted-foreground">
            Transparent pricing and billing information
          </p>
        </div>

        <div className="space-y-8">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                Pricing Plans
              </CardTitle>
              <CardDescription>
                Choose the plan that fits your needs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="bg-secondary border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">Starter</CardTitle>
                    <div className="text-3xl font-bold text-primary">$5<span className="text-sm text-muted-foreground">/mo</span></div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        1 GB Storage
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        10 GB Bandwidth
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        1 Domain
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-secondary border-primary/50 ring-2 ring-primary/20">
                  <CardHeader>
                    <CardTitle className="text-lg">Pro</CardTitle>
                    <div className="text-3xl font-bold text-primary">$15<span className="text-sm text-muted-foreground">/mo</span></div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        10 GB Storage
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        100 GB Bandwidth
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        5 Domains
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-secondary border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">Enterprise</CardTitle>
                    <div className="text-3xl font-bold text-primary">$50<span className="text-sm text-muted-foreground">/mo</span></div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Unlimited Storage
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Unlimited Bandwidth
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Unlimited Domains
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-primary" />
                Payment Methods
              </CardTitle>
              <CardDescription>
                We accept multiple payment methods
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                AxyteHost accepts all major credit cards, PayPal, and cryptocurrency payments. All transactions are secure and encrypted.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Visa, Mastercard, American Express
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  PayPal
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Bitcoin, Ethereum
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Invoicing
              </CardTitle>
              <CardDescription>
                Access and download your invoices
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                All invoices are automatically generated and available in your account dashboard. You can download PDF copies for your records at any time.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Refund Policy
              </CardTitle>
              <CardDescription>
                Understanding our refund policy
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We offer a 30-day money-back guarantee for all new customers. If you're not satisfied with our service, contact our support team for a full refund within the first 30 days.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Billing;
