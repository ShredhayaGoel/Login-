import { useState } from "react";
import {
  Truck,
  LayoutDashboard,
  Package,
  CheckCircle2,
  Clock3,
  MapPin,
  Navigation,
  Bell,
  User,
  Settings,
  LogOut,
  Menu,
  X,
  Search,
  ArrowUpRight,
  MoreHorizontal,
  Phone,
  Star,
  TrendingUp,
  Zap,
  CalendarDays,
  ChevronRight,
  Circle,
} from "lucide-react";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const deliveries = [
    {
      id: "#DEL-1024",
      customer: "Rahul Sharma",
      address: "Sector 18, Noida",
      status: "Out for Delivery",
      time: "10:30 AM",
      items: 3,
      priority: "High",
    },
    {
      id: "#DEL-1025",
      customer: "Priya Verma",
      address: "Indirapuram, Ghaziabad",
      status: "Pending",
      time: "12:00 PM",
      items: 2,
      priority: "Normal",
    },
    {
      id: "#DEL-1026",
      customer: "Aman Gupta",
      address: "Sector 62, Noida",
      status: "Delivered",
      time: "09:15 AM",
      items: 5,
      priority: "Normal",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* ================= MOBILE OVERLAY ================= */}

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ================= SIDEBAR ================= */}

      <aside
        className={`
                    fixed top-0 left-0 z-50
                    h-screen w-72
                    bg-white
                    border-r border-slate-200
                    flex flex-col
                    transition-transform duration-300
                    ${
                      sidebarOpen
                        ? "translate-x-0"
                        : "-translate-x-full lg:translate-x-0"
                    }
                `}
      >
        {/* Logo */}

        <div className="h-20 px-6 flex items-center justify-between border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-200">
              <Truck size={23} className="text-white" />
            </div>

            <div>
              <h1 className="font-bold text-lg text-slate-900">DeliverX</h1>

              <p className="text-xs text-slate-400">Delivery Partner</p>
            </div>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-slate-400"
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation */}

        <nav className="flex-1 p-5 space-y-2">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-4">
            Main Menu
          </p>

          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            active
          />

          <SidebarItem icon={<Package size={20} />} text="My Deliveries" />

          <SidebarItem icon={<CheckCircle2 size={20} />} text="Completed" />

          <SidebarItem icon={<Clock3 size={20} />} text="Pending" />

          <div className="pt-6">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-4">
              Account
            </p>

            <SidebarItem icon={<User size={20} />} text="Profile" />

            <SidebarItem icon={<Settings size={20} />} text="Settings" />
          </div>
        </nav>

        {/* Profile bottom */}

        <div className="p-4 border-t border-slate-100">
          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
              <User size={20} className="text-indigo-600" />
            </div>

            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm truncate">Shredhaya Goel</p>

              <p className="text-xs text-slate-400">Delivery Partner</p>
            </div>

            <LogOut size={18} className="text-slate-400 hover:text-red-500" />
          </div>
        </div>
      </aside>

      {/* ================= MAIN ================= */}

      <main className="lg:ml-72 min-h-screen">
        {/* ================= TOPBAR ================= */}

        <header className="h-20 bg-white border-b border-slate-200 px-5 lg:px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100"
            >
              <Menu size={22} />
            </button>

            <div>
              <h2 className="text-lg font-bold text-slate-900">Dashboard</h2>

              <p className="text-xs text-slate-400">
                Monday, September 7, 2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Search */}

            <div className="hidden md:flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2">
              <Search size={17} className="text-slate-400" />

              <input
                placeholder="Search..."
                className="bg-transparent outline-none text-sm w-32"
              />
            </div>

            {/* Notification */}

            <button className="relative w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center hover:bg-indigo-50 transition">
              <Bell size={19} className="text-slate-600" />

              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 border-2 border-white" />
            </button>

            {/* Profile */}

            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center">
              <User size={19} className="text-white" />
            </div>
          </div>
        </header>

        {/* ================= CONTENT ================= */}

        <div className="p-5 lg:p-8">
          {/* ================= WELCOME ================= */}

          <section className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <p className="text-sm font-medium text-indigo-600 mb-1">
                  Good morning 👋
                </p>

                <h1 className="text-3xl lg:text-4xl font-bold text-slate-900">
                  Hey Shredhaya!
                </h1>

                <p className="text-slate-500 mt-2">
                  Ready to make today's deliveries?
                </p>
              </div>

              <button className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl font-semibold shadow-lg shadow-indigo-200 transition-all hover:-translate-y-1">
                <Navigation size={18} />
                Start Delivery
              </button>
            </div>
          </section>

          {/* ================= STATS ================= */}

          <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
            <StatCard
              icon={<Package />}
              title="Total Deliveries"
              value="24"
              change="+12%"
              subtitle="vs last week"
            />

            <StatCard
              icon={<CheckCircle2 />}
              title="Delivered"
              value="18"
              change="+18%"
              subtitle="vs last week"
            />

            <StatCard
              icon={<Clock3 />}
              title="Pending"
              value="5"
              change="-8%"
              subtitle="vs last week"
            />

            <StatCard
              icon={<Star />}
              title="Rating"
              value="4.9"
              change="+0.2"
              subtitle="this month"
            />
          </section>

          {/* ================= GRID ================= */}

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* ================= DELIVERIES ================= */}

            <section className="xl:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Today's Deliveries
                  </h2>

                  <p className="text-sm text-slate-400 mt-1">
                    Your assigned orders
                  </p>
                </div>

                <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                  View All
                  <ChevronRight size={16} />
                </button>
              </div>

              <div className="divide-y divide-slate-100">
                {deliveries.map((delivery) => (
                  <DeliveryCard key={delivery.id} delivery={delivery} />
                ))}
              </div>
            </section>

            {/* ================= RIGHT COLUMN ================= */}

            <div className="space-y-6">
              {/* Progress */}

              <section className="bg-indigo-600 rounded-2xl p-6 text-white shadow-xl shadow-indigo-200 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full" />

                <div className="absolute -right-5 -bottom-16 w-40 h-40 bg-white/5 rounded-full" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-indigo-200 text-sm">
                        Today's Progress
                      </p>

                      <h2 className="text-3xl font-bold mt-1">75%</h2>
                    </div>

                    <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                      <TrendingUp size={23} />
                    </div>
                  </div>

                  <div className="w-full h-2 bg-indigo-400/40 rounded-full overflow-hidden">
                    <div className="h-full bg-white rounded-full w-[75%]" />
                  </div>

                  <div className="flex justify-between mt-3 text-xs text-indigo-200">
                    <span>18 completed</span>

                    <span>24 total</span>
                  </div>
                </div>
              </section>

              {/* Quick Actions */}

              <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h2 className="font-bold text-slate-900 mb-5">Quick Actions</h2>

                <div className="grid grid-cols-2 gap-3">
                  <QuickAction icon={<Navigation />} text="Navigate" />

                  <QuickAction icon={<Phone />} text="Call Customer" />

                  <QuickAction icon={<CalendarDays />} text="Schedule" />

                  <QuickAction icon={<Zap />} text="Support" />
                </div>
              </section>

              {/* Performance */}

              <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="font-bold text-slate-900">Performance</h2>

                  <MoreHorizontal size={20} className="text-slate-400" />
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-yellow-50 flex items-center justify-center">
                    <Star
                      size={25}
                      className="text-yellow-500 fill-yellow-500"
                    />
                  </div>

                  <div>
                    <p className="text-2xl font-bold">4.9</p>

                    <p className="text-sm text-slate-400">Excellent rating</p>
                  </div>
                </div>

                <div className="mt-5 pt-5 border-t border-slate-100">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-500">On-time delivery</span>

                    <span className="font-semibold">96%</span>
                  </div>

                  <div className="h-2 bg-slate-100 rounded-full">
                    <div className="h-full w-[96%] bg-indigo-500 rounded-full" />
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* ================= ACTIVITY ================= */}

          <section className="mt-6 bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Recent Activity
                </h2>

                <p className="text-sm text-slate-400">
                  Your latest delivery updates
                </p>
              </div>

              <button className="text-sm font-semibold text-indigo-600">
                View History
              </button>
            </div>

            <div className="space-y-5">
              <Activity
                icon={<CheckCircle2 />}
                title="Delivery completed"
                text="Order #DEL-1026 was delivered successfully"
                time="35 min ago"
              />

              <Activity
                icon={<Navigation />}
                title="Delivery started"
                text="You started delivery for #DEL-1024"
                time="1 hour ago"
              />

              <Activity
                icon={<Package />}
                title="New delivery assigned"
                text="Order #DEL-1025 has been assigned to you"
                time="2 hours ago"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

/* =========================================================
   SIDEBAR ITEM
========================================================= */

function SidebarItem({ icon, text, active }) {
  return (
    <button
      className={`
                w-full flex items-center gap-3
                px-4 py-3
                rounded-xl
                text-sm font-medium
                transition-all
                ${
                  active
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                }
            `}
    >
      {icon}

      <span>{text}</span>

      {active && (
        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-600" />
      )}
    </button>
  );
}

/* =========================================================
   STAT CARD
========================================================= */

function StatCard({ icon, title, value, change, subtitle }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start justify-between">
        <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
          {icon}
        </div>

        <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
          <ArrowUpRight size={14} />

          {change}
        </div>
      </div>

      <div className="mt-5">
        <p className="text-sm text-slate-400">{title}</p>

        <div className="flex items-end gap-2 mt-1">
          <h3 className="text-3xl font-bold text-slate-900">{value}</h3>

          <span className="text-xs text-slate-400 mb-1">{subtitle}</span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   DELIVERY CARD
========================================================= */

function DeliveryCard({ delivery }) {
  const isDelivered = delivery.status === "Delivered";
  const isOut = delivery.status === "Out for Delivery";

  return (
    <div className="p-5 hover:bg-slate-50 transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        {/* Icon */}

        <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
          <Package size={22} className="text-indigo-600" />
        </div>

        {/* Details */}

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-bold text-slate-900">{delivery.id}</h3>

            <span
              className={`
                                text-xs px-2 py-1 rounded-full font-medium
                                ${
                                  isDelivered
                                    ? "bg-emerald-50 text-emerald-600"
                                    : isOut
                                      ? "bg-indigo-50 text-indigo-600"
                                      : "bg-orange-50 text-orange-600"
                                }
                            `}
            >
              {delivery.status}
            </span>
          </div>

          <p className="text-sm font-medium text-slate-700 mt-1">
            {delivery.customer}
          </p>

          <div className="flex items-center gap-1 text-xs text-slate-400 mt-1">
            <MapPin size={13} />

            {delivery.address}
          </div>
        </div>

        {/* Time */}

        <div className="sm:text-right">
          <p className="text-sm font-semibold text-slate-700">
            {delivery.time}
          </p>

          <p className="text-xs text-slate-400 mt-1">{delivery.items} items</p>
        </div>

        {/* Action */}

        <button className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   QUICK ACTION
========================================================= */

function QuickAction({ icon, text }) {
  return (
    <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300 group">
      <div className="group-hover:scale-110 transition-transform">{icon}</div>

      <span className="text-xs font-semibold">{text}</span>
    </button>
  );
}

/* =========================================================
   ACTIVITY
========================================================= */

function Activity({ icon, title, text, time }) {
  return (
    <div className="flex gap-4">
      <div className="relative">
        <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
          {icon}
        </div>
      </div>

      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <h3 className="font-semibold text-sm text-slate-800">{title}</h3>

          <span className="text-xs text-slate-400">{time}</span>
        </div>

        <p className="text-sm text-slate-400 mt-1">{text}</p>
      </div>
    </div>
  );
}

export default Dashboard;
