import { BarChart3, BookOpen, CircleHelp, CreditCard, DoorOpen, Layers3, MessageSquareText, Smartphone, UsersRound, type LucideIcon } from "lucide-react";

export type NavigationItem = {
  label: string;
  href?: string;
  menu?: readonly { label: string; description: string; icon: LucideIcon; href: string }[];
};

export const navigation: readonly NavigationItem[] = [
  { label: "Product", menu: [
    { label: "Platform overview", description: "See the connected MonClub workspace.", icon: Layers3, href: "#product" },
    { label: "Members", description: "One complete member record.", icon: UsersRound, href: "#members" },
    { label: "Access & attendance", description: "Fast, reliable entry flows.", icon: DoorOpen, href: "#access" },
    { label: "Payments", description: "Connected financial operations.", icon: CreditCard, href: "#payments" },
  ]},
  { label: "Solutions", menu: [
    { label: "Member mobile app", description: "Planning and reservations on the go.", icon: Smartphone, href: "#mobile-app" },
    { label: "Connected operations", description: "Every gym event in one system.", icon: BarChart3, href: "#connected-system" },
    { label: "Member communication", description: "Relevant updates, automatically.", icon: MessageSquareText, href: "#communication" },
    { label: "Payments", description: "A clear view of every transaction.", icon: CreditCard, href: "#payments" },
  ]},
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#contact" },
  { label: "Resources", menu: [
    { label: "Help center", description: "Answers for everyday workflows.", icon: CircleHelp, href: "#footer" },
    { label: "Documentation", description: "Product guides and setup.", icon: BookOpen, href: "#footer" },
  ]},
];
