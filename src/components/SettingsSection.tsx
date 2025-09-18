import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Edit } from "lucide-react";

interface SettingsItem {
  id: string;
  title: string;
  value: string;
  description?: string;
  status?: "active" | "inactive" | "pending";
  action?: () => void;
}

interface SettingsSectionProps {
  title: string;
  icon: ReactNode;
  items: SettingsItem[];
  onItemClick?: (id: string) => void;
}

const SettingsSection = ({ title, icon, items, onItemClick }: SettingsSectionProps) => {
  const getStatusBadge = (status?: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case "inactive":
        return <Badge className="bg-gray-100 text-gray-800">Inactive</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      default:
        return null;
    }
  };

  return (
    <Card className="border-0 shadow-card hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center text-eco-dark">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Setting</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-16"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow 
                key={item.id}
                className="cursor-pointer hover:bg-eco-light/50 transition-colors"
                onClick={() => onItemClick?.(item.id)}
              >
                <TableCell>
                  <div>
                    <div className="font-medium">{item.title}</div>
                    {item.description && (
                      <div className="text-sm text-muted-foreground">{item.description}</div>
                    )}
                  </div>
                </TableCell>
                <TableCell className="font-mono text-sm">{item.value}</TableCell>
                <TableCell>{getStatusBadge(item.status)}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default SettingsSection;