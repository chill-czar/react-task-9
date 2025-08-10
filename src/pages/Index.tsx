import AdminLayout from "@/components/layout/AdminLayout";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingUp, Users, ShoppingCart, DollarSign } from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  AreaChart,
  Area,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 12400 },
  { month: "Feb", revenue: 13800 },
  { month: "Mar", revenue: 15200 },
  { month: "Apr", revenue: 14800 },
  { month: "May", revenue: 17600 },
  { month: "Jun", revenue: 19400 },
  { month: "Jul", revenue: 20100 },
  { month: "Aug", revenue: 18800 },
  { month: "Sep", revenue: 21050 },
  { month: "Oct", revenue: 22400 },
  { month: "Nov", revenue: 23700 },
  { month: "Dec", revenue: 25500 },
];

const usersData = [
  { month: "Jan", users: 420 },
  { month: "Feb", users: 460 },
  { month: "Mar", users: 520 },
  { month: "Apr", users: 510 },
  { month: "May", users: 640 },
  { month: "Jun", users: 720 },
  { month: "Jul", users: 750 },
  { month: "Aug", users: 710 },
  { month: "Sep", users: 780 },
  { month: "Oct", users: 840 },
  { month: "Nov", users: 910 },
  { month: "Dec", users: 980 },
];

const activities = [
  { id: 1, action: "New order", user: "Alex Morgan", time: "2m ago", amount: "+$129.00" },
  { id: 2, action: "Subscription renewed", user: "Sarah Lee", time: "8m ago", amount: "+$49.00" },
  { id: 3, action: "Refund issued", user: "Dev Patel", time: "22m ago", amount: "-$19.00" },
  { id: 4, action: "New user", user: "Jane Doe", time: "1h ago", amount: "—" },
  { id: 5, action: "Stock updated", user: "System", time: "3h ago", amount: "—" },
];

export default function Index() {
  useEffect(() => {
    document.title = "Admin Dashboard — Analytics & Controls";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Responsive admin dashboard with analytics, charts, and controls.");

    // Canonical tag
    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', window.location.origin + window.location.pathname);
  }, []);

  return (
    <AdminLayout>
      <main>
        <header className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Admin Dashboard Analytics</h1>
          <p className="text-muted-foreground mt-2">Overview of key metrics and recent activity</p>
        </header>

        {/* KPI Cards */}
        <section aria-labelledby="metrics" className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          <Card className="transition-all hover:shadow-elegant">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">Revenue</CardTitle>
            </CardHeader>
            <CardContent className="flex items-end justify-between">
              <div>
                <div className="text-2xl font-bold">$25,500</div>
                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1"><TrendingUp className="h-4 w-4" /> +12.4% MoM</p>
              </div>
              <DollarSign className="h-8 w-8 text-primary" />
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-elegant">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">Active Users</CardTitle>
            </CardHeader>
            <CardContent className="flex items-end justify-between">
              <div>
                <div className="text-2xl font-bold">980</div>
                <p className="text-xs text-muted-foreground mt-1">+8.1% MoM</p>
              </div>
              <Users className="h-8 w-8 text-primary" />
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-elegant">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">Orders</CardTitle>
            </CardHeader>
            <CardContent className="flex items-end justify-between">
              <div>
                <div className="text-2xl font-bold">1,247</div>
                <p className="text-xs text-muted-foreground mt-1">+5.6% MoM</p>
              </div>
              <ShoppingCart className="h-8 w-8 text-primary" />
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-elegant">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">Conversions</CardTitle>
            </CardHeader>
            <CardContent className="flex items-end justify-between">
              <div>
                <div className="text-2xl font-bold">3.8%</div>
                <p className="text-xs text-muted-foreground mt-1">+0.4pp MoM</p>
              </div>
              <TrendingUp className="h-8 w-8 text-primary" />
            </CardContent>
          </Card>
        </section>

        {/* Charts */}
        <section className="mt-6 md:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Revenue (Last 12 months)</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  revenue: { label: "Revenue", color: `hsl(var(--chart-1))` },
                }}
                className="h-[280px]"
              >
                <AreaChart data={revenueData} margin={{ left: 8, right: 8 }}>
                  <defs>
                    <linearGradient id="fillRevenue" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor={`hsl(var(--chart-1))`} stopOpacity={0.35} />
                      <stop offset="100%" stopColor={`hsl(var(--chart-1))`} stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} />
                  <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
                  <Area dataKey="revenue" type="monotone" stroke={`hsl(var(--chart-1))`} fill="url(#fillRevenue)" strokeWidth={2} />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>New Users (Last 12 months)</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  users: { label: "Users", color: `hsl(var(--chart-2))` },
                }}
                className="h-[280px]"
              >
                <BarChart data={usersData} margin={{ left: 8, right: 8 }}>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="users" fill={`hsl(var(--chart-2))`} radius={[6, 6, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </section>

        {/* Recent activity */}
        <section className="mt-6 md:mt-8" aria-labelledby="activity">
          <Card>
            <CardHeader>
              <CardTitle id="activity">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Action</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {activities.map((a) => (
                      <TableRow key={a.id}>
                        <TableCell>{a.action}</TableCell>
                        <TableCell>{a.user}</TableCell>
                        <TableCell>{a.time}</TableCell>
                        <TableCell className="text-right tabular-nums">{a.amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </AdminLayout>
  );
}
