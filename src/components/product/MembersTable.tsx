import { BadgeCheck, DoorOpen, MoreHorizontal, Plus, Search } from "lucide-react";
import { MonClubAppHeader } from "@/components/ui/product/MonClubAppHeader";

const members = [
  { initials: "SM", name: "Sarah Martin", email: "sarah.m@example.test", membership: "Premium", status: "Active", access: "Enabled", visit: "09:42", color: "#de7757" },
  { initials: "AM", name: "Alex Martin", email: "alex.m@example.test", membership: "Performance", status: "Active", access: "Enabled", visit: "Yesterday", color: "#16233b" },
  { initials: "YB", name: "Yasmine Ben", email: "yasmine.b@example.test", membership: "Monthly", status: "Active", access: "Enabled", visit: "08:31", color: "#14a68d" },
] as const;

function Status({ children, icon = false }: { children: string; icon?: boolean }) {
  return <span className="member-status">{icon && <BadgeCheck aria-hidden="true" />}{children}</span>;
}

export function MayaTableRowContent({ className = "" }: { className?: string }) {
  return (
    <div className={`member-row-content ${className}`}>
      <span className="mc-person" role="rowheader"><i className="!bg-[#7356e8]">ML</i><b>Maya Laurent<small>maya.l@example.test</small></b></span>
      <span role="cell"><b>Annual Performance</b><small>Membership current</small></span>
      <span role="cell"><Status icon>Active</Status></span>
      <span role="cell" className="member-access"><DoorOpen /> Enabled</span>
      <span role="cell" className="member-last-visit"><b>10:18</b><MoreHorizontal aria-label="Member actions" /></span>
    </div>
  );
}

function MemberRow({ member }: { member: (typeof members)[number] }) {
  return (
    <div className="member-table-row" role="row">
      <span className="mc-person" role="rowheader"><i style={{ background: member.color }}>{member.initials}</i><b>{member.name}<small>{member.email}</small></b></span>
      <span role="cell"><b>{member.membership}</b><small>Membership current</small></span>
      <span role="cell"><Status icon>{member.status}</Status></span>
      <span role="cell" className="member-access"><DoorOpen /> {member.access}</span>
      <span role="cell" className="member-last-visit"><b>{member.visit}</b><MoreHorizontal aria-label={`Actions for ${member.name}`} /></span>
    </div>
  );
}

export function MembersTable() {
  return (
    <div className="browser-frame member-dashboard-frame">
      <div className="browser-top" aria-hidden="true"><span className="browser-dot"/><span className="browser-dot"/><span className="browser-dot"/><span className="browser-url"/></div>
      <div className="relative aspect-[16/10] min-h-[190px] sm:min-h-[250px]">
        <div className="mc-app">
          <MonClubAppHeader featureId="members" />
          <div className="mc-page member-table-page">
            <div className="mc-title-action">
              <span><h3>Members</h3><p>Profiles, memberships and access in one living record</p></span>
              <button type="button"><Plus /> New member</button>
            </div>
            <div className="member-table-toolbar"><span className="mc-input"><Search /> Search members…</span><span className="member-table-count">2,000 members</span></div>
            <div className="member-table" role="table" aria-label="MonClub members">
              <div className="member-table-head" role="row"><span role="columnheader">Member</span><span role="columnheader">Membership</span><span role="columnheader">Status</span><span role="columnheader">Access</span><span role="columnheader">Last visit</span></div>
              <MemberRow member={members[0]} />
              <div className="member-morph-slot" role="row" aria-label="Maya Laurent selected member"><MayaTableRowContent className="member-static-row" /></div>
              <MemberRow member={members[1]} />
              <MemberRow member={members[2]} />
            </div>
          </div>
          <div className="member-dashboard-overview" aria-hidden="true">
            <span>Live club overview</span><strong>Everything starts with a member.</strong>
            <div>{["Active members", "Memberships", "Visits today"].map((label, index) => <span key={label}><small>{label}</small><b>{["2,000", "1,936", "247"][index]}</b></span>)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
