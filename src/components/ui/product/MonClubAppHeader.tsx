import { BarChart3, CalendarDays, ContactRound, CreditCard, DoorOpen, Handbag, Home, MessageCircle, Search, UserRoundCog } from "lucide-react";

const navItems = [
  { id: "overview", label: "Home", icon: Home },
  { id: "memberships", label: "Memberships", icon: ContactRound },
  { id: "payments", label: "Finance", icon: CreditCard },
  { id: "shop", label: "Shop", icon: Handbag },
  { id: "access", label: "Access", icon: DoorOpen },
  { id: "planning", label: "Events", icon: CalendarDays },
  { id: "staff", label: "Team & Ops", icon: UserRoundCog },
  { id: "notifications", label: "Engagement", icon: MessageCircle },
  { id: "analytics", label: "Insights", icon: BarChart3 },
] as const;

const aliases: Record<string, string> = { members: "memberships", mobile: "notifications", "wigo-tv": "staff" };

export function MonClubAppHeader({ featureId }: { featureId: string }) {
  const activeId = aliases[featureId] ?? featureId;
  return (
    <div className="mc-topnav">
      <div className="mc-topnav-items">
        {navItems.map((item) => {
          const Icon = item.icon;
          return <span key={item.id} className={`mc-nav-pill ${activeId === item.id ? "active" : ""}`}><Icon/><b>{item.label}</b></span>;
        })}
      </div>
      <span className="mc-search"><Search/><span>Find a metric</span><kbd>Ctrl K</kbd></span>
    </div>
  );
}
