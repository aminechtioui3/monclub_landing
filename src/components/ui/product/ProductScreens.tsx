import type { LucideIcon } from "lucide-react";
import { BadgeCheck, BarChart3, Bell, Check, CircleDollarSign, Clock3, CreditCard, DoorOpen, Flame, LayoutGrid, Megaphone, MonitorPlay, MoreHorizontal, PackageOpen, Pin, Plus, Search, ShieldCheck, Sparkles, UserPlus, UsersRound } from "lucide-react";
import { siteLocale } from "@/config/pricing";
import { formatCompactCurrency, formatCurrency } from "@/lib/currency";

const dashboardMoney = {
  monthly: formatCompactCurrency(siteLocale === "fr" ? 48_600 : 16_500, siteLocale),
  card: formatCompactCurrency(siteLocale === "fr" ? 32_400 : 11_200, siteLocale),
  pending: formatCurrency(siteLocale === "fr" ? 1_120 : 380, siteLocale),
};

type Tone = "violet" | "mint" | "cyan" | "pink" | "orange";

function MetricCard({ icon: Icon, label, value, unit, note, tone = "violet" }: { icon: LucideIcon; label: string; value: string; unit?: string; note?: string; tone?: Tone }) {
  return <div className="mc-metric-card"><div className="mc-metric-head"><span className={`mc-metric-icon ${tone}`}><Icon/></span><span>{label}</span><MoreHorizontal/></div><div className="mc-metric-value">{value} {unit && <small>{unit}</small>}</div>{note && <div className="mc-metric-note"><i/> {note}</div>}</div>;
}

function DateTabs() {
  return <div className="mc-date-tabs"><span>Today</span><span>Last 7 days</span><span className="active">This month</span><span>Last month</span><span>This year</span><span>Custom…</span></div>;
}

function PageHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return <div className="mc-page-heading"><div><h3>{title}</h3>{subtitle && <p>{subtitle}</p>}</div><DateTabs/></div>;
}

export function OverviewScreen() {
  return <div className="mc-page"><PageHeading title="Home" subtitle="How the club is doing"/><div className="mc-toolbar"><span><LayoutGrid/> Customize home</span><span><Sparkles/> Create card</span><span>Organize</span></div><div className="mc-callout"><Pin/><span><b>Your live club overview</b><small>Eight useful indicators, updated from one connected workspace.</small></span><button>Browse catalog</button></div><div className="mc-metric-grid"><MetricCard icon={UsersRound} label="ACTIVE MEMBERS" value="1,284" note="48 joined this month"/><MetricCard icon={UserPlus} label="NEW MEMBERS" value="48" note="12 more than last month"/><MetricCard icon={Clock3} label="EXPIRING IN 7 DAYS" value="6" note="Renewal follow-up ready"/><MetricCard icon={CircleDollarSign} label="ENTRY REVENUE" value={dashboardMoney.monthly} note="All payment sources" tone="mint"/></div><div className="mc-bottom-panels"><div><b>Revenue by membership</b><span className="mc-mini-bars">{[44,68,52,82,62,91,74,86].map((height,index)=><i key={index} style={{height:`${height}%`}}/>)}</span></div><div><b>Total visits</b><strong>6,840</strong><small>Illustrative demo period</small></div></div></div>;
}

const members = [
  { initials:"ML", name:"Maya Laurent", contact:"maya.l@example.test", plan:"Annual Performance", period:"12 Aug 2026 → 12 Aug 2027", amount:formatCurrency(siteLocale === "fr" ? 790 : 268, siteLocale), state:"Active" },
  { initials:"NB", name:"Noah Bernard", contact:"noah.b@example.test", plan:"Coach plan", period:"03 Jul 2026 → 03 Jul 2027", amount:formatCurrency(0, siteLocale), state:"Active" },
  { initials:"IK", name:"Inès Khelifi", contact:"ines.k@example.test", plan:"Monthly Flex", period:"06 Aug 2026 → 06 Sep 2026", amount:formatCurrency(siteLocale === "fr" ? 69 : 24, siteLocale), state:"Expiring" },
  { initials:"TR", name:"Thomas Rey", contact:"thomas.r@example.test", plan:"Annual Performance", period:"19 Jun 2026 → 19 Jun 2027", amount:formatCurrency(siteLocale === "fr" ? 790 : 268, siteLocale), state:"Active" },
];

export function MembershipsScreen() {
  return <div className="mc-page mc-page-table"><h3>Active memberships</h3><div className="mc-filter-row"><span className="mc-input"><Search/> Search member, phone, email…</span><span className="mc-filter">Start date⌄</span><span className="mc-filter">From · dd/mm/yyyy</span><span className="mc-filter">To · dd/mm/yyyy</span><button>Clear all</button></div><div className="mc-queue"><b>QUEUE</b><span className="active"><Check/> All members <em>1,284</em></span><span>Balance due <em>12</em></span><span>Overdue fees <em>4</em></span><span>Ends ≤ 7d <em>6</em></span><span>Missing photo <em>18</em></span></div><div className="mc-table-tabs"><span className="active">All 1,284</span><span>To review 12</span><span>Ending soon 6</span><span>Frozen 21</span><button><Plus/> New member</button></div><div className="mc-table"><div className="mc-tr mc-th"><span>MEMBER</span><span>MEMBERSHIP</span><span>PERIOD</span><span>AMOUNT</span><span>STATUS · DOOR</span></div>{members.map((member,index)=><div className="mc-tr" key={member.name}><span className="mc-person"><i style={{background:["#7356e8","#16233b","#ee5a54","#14a68d"][index]}}>{member.initials}</i><b>{member.name}<small>{member.contact}</small></b></span><span><b>{member.plan}</b><small>Standard</small></span><span><b>{member.period}</b><small>{index===2?"9 days remaining":"Membership current"}</small></span><span><b>{member.amount}</b><small>Paid in full</small></span><span><em className={member.state==="Active"?"status-active":"status-warning"}><BadgeCheck/>{member.state}</em><DoorOpen/></span></div>)}</div></div>;
}

export function AccessScreen() {
  const heat = [0,1,1,2,2,3,2,1,0,1,2,3,4,4,3,1,0,0,1,2,3,4,4,2,0,1,1,2,4,5,4,2,0,0,1,1,3,4,3,1,0,1,2,3,5,5,4,2,0,1,2,3,4,5,3,1];
  return <div className="mc-page"><PageHeading title="Access" subtitle="Entries and attendance"/><div className="mc-metric-grid"><MetricCard icon={DoorOpen} label="VISITS" value="247" unit="visits" tone="cyan"/><MetricCard icon={UsersRound} label="UNIQUE VISITORS" value="196" unit="members" tone="cyan"/><MetricCard icon={Flame} label="PEAK HOUR" value="18:00" unit="today" tone="cyan"/><MetricCard icon={ShieldCheck} label="DENIED ACCESS" value="3" unit="reviews" note="All decisions logged" tone="cyan"/></div><div className="mc-heatmap"><div><b>When the club is busy</b><small>Entries by hour, selected period</small></div><div className="mc-heat-grid"><span className="mc-days">MON<br/>TUE<br/>WED<br/>THU<br/>FRI<br/>SAT<br/>SUN</span><span className="mc-heat-cells">{heat.map((level,index)=><i key={index} data-level={level}/>)}</span></div><div className="mc-heat-axis"><span>06:00</span><span>09:00</span><span>12:00</span><span>15:00</span><span>18:00</span><span>21:00</span></div></div></div>;
}

export function CalendarScreen() {
  const days=Array.from({length:35},(_,index)=>index-4);
  return <div className="mc-page"><div className="mc-title-action"><span><h3>Calendar</h3><p>Schedule and manage events</p></span><button><Plus/> Add event</button></div><div className="mc-calendar-bar"><span>▣　▥　☷</span><b>‹　 August 2026　 ›</b><span>Today　▣</span></div><div className="mc-calendar-layout"><div className="mc-calendar"><div className="mc-weekdays">{["SUN","MON","TUE","WED","THU","FRI","SAT"].map(day=><b key={day}>{day}</b>)}</div><div className="mc-calendar-days">{days.map((day,index)=><span key={index} className={day<1?"muted":""}><i>{day<1?27+index:day}</i>{day===8&&<><em className="coral">09:00 RPM</em><em>13:00 Spinning</em><small>+5 more</small></>}</span>)}</div></div><aside><div>Click a day to see its events</div><div><b>Upcoming events</b><small>Yoga Flow · 18:00</small><small>Strength Lab · 19:15</small></div></aside></div></div>;
}

export function FinanceScreen({analytics=false}:{analytics?:boolean}) {
  return <div className="mc-page"><PageHeading title={analytics?"Insights":"Finance"} subtitle={analytics?"Club performance at a glance":"Revenue and transactions"}/><div className="mc-metric-grid"><MetricCard icon={CircleDollarSign} label="MONTHLY REVENUE" value={dashboardMoney.monthly} note="Up 8.2% from last month" tone="mint"/><MetricCard icon={CreditCard} label="CARD PAYMENTS" value={dashboardMoney.card} note="67.9% of collected revenue" tone="mint"/><MetricCard icon={UsersRound} label={analytics?"RETENTION":"PENDING"} value={analytics?"91.8%":dashboardMoney.pending} note={analytics?"Stable over 90 days":"12 balances to review"}/><MetricCard icon={BarChart3} label={analytics?"ATTENDANCE":"TRANSACTIONS"} value={analytics?"+12.4%":"864"} note="Selected demo period"/></div><div className="mc-finance-chart"><div><b>{analytics?"Growth & retention":"Revenue over time"}</b><small>Illustrative demo data</small></div><svg viewBox="0 0 800 210" preserveAspectRatio="none" aria-hidden="true"><path d="M0 180 C90 165 100 118 185 140 S300 95 385 112 S505 58 590 78 S700 26 800 38" fill="none" stroke="#5e5bf6" strokeWidth="7" strokeLinecap="round"/><path d="M0 180 C90 165 100 118 185 140 S300 95 385 112 S505 58 590 78 S700 26 800 38 L800 210 L0 210Z" fill="url(#financeGradient)" opacity=".3"/><defs><linearGradient id="financeGradient" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#5e5bf6"/><stop offset="1" stopColor="#5e5bf6" stopOpacity="0"/></linearGradient></defs></svg><div className="mc-chart-labels"><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span></div></div></div>;
}

export function OperationsScreen({featureId}:{featureId:string}) {
  const content:Record<string,{title:string;subtitle:string;labels:string[];icon:LucideIcon}>={staff:{title:"Team & operations",subtitle:"Employees, coaches, roles and permissions",labels:["Sofia Martin · Club manager","Lucas Petit · Head coach","Amel Rahmani · Reception","Hugo Lambert · Coach"],icon:UsersRound},notifications:{title:"Engagement",subtitle:"Messages and member automations",labels:["Renewal reminder · 128 members","Class reminder · Yoga Flow","Club announcement · New timetable","Welcome sequence · 18 new members"],icon:Bell},"wigo-tv":{title:"WiGO TV",subtitle:"Content across every club display",labels:["Reception screen · Now playing","Studio A · Class schedule","Cardio zone · Club news","Strength zone · Member tips"],icon:MonitorPlay},shop:{title:"Shop & inventory",subtitle:"Products, sales and stock",labels:["Protein shaker · 28 in stock","Training towel · 16 in stock","Club bottle · 42 in stock","Resistance band · Low stock"],icon:PackageOpen}};
  const data=content[featureId]??content.staff; const Icon=data.icon;
  return <div className="mc-page"><div className="mc-title-action"><span><h3>{data.title}</h3><p>{data.subtitle}</p></span><button><Plus/> Add new</button></div><div className="mc-ops-grid"><div className="mc-ops-list"><div className="mc-input"><Search/> Search this workspace…</div>{data.labels.map((label,index)=><div key={label}><span className="mc-person"><i><Icon/></i><b>{label}<small>{index%2?"Updated yesterday":"Live and connected"}</small></b></span><em className="status-active"><Check/> Active</em><MoreHorizontal/></div>)}</div><aside><span className="mc-metric-icon violet"><Icon/></span><b>{data.title} overview</b><strong>{featureId==="staff"?"24":featureId==="shop"?"124":"8"}</strong><small>Active records</small><button>Open details</button></aside></div></div>;
}

export function MobileExperienceScreen() {
  return <div className="mc-page"><div className="mc-title-action"><span><h3>Member mobile experience</h3><p>Membership, bookings and club updates</p></span></div><div className="mc-mobile-canvas"><div className="mc-mobile-card"><span>MONCLUB</span><small>Good morning, Alex</small><h4>Ready to move?</h4><div><b>Premium membership</b><BadgeCheck/></div></div><div className="mc-mobile-list"><b>Today’s classes</b><span>18:00 · Cross training <em>Booked</em></span><span>19:15 · Yoga flow <em>3 spots</em></span><span>20:00 · Cycling <em>Join</em></span></div><aside><Megaphone/><b>Club announcement</b><p>Extended weekend hours are now available.</p></aside></div></div>;
}
