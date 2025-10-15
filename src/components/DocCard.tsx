import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface DocCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export function DocCard({ title, description, icon: Icon, href }: DocCardProps) {
  return (
    <Link to={href}>
      <Card className="group cursor-pointer border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
              <Icon className="h-5 w-5" />
            </div>
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
