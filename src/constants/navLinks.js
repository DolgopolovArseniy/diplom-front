import {
  HandCoins,
  BanknoteArrowUp,
  MessageSquareDot,
  Goal,
} from "lucide-react";

export const NAV_LINKS_GENERAL = [
  { to: "/donations", label: "Donations", icon: HandCoins },
  { to: "/payouts", label: "Payouts", icon: BanknoteArrowUp },
];

export const NAV_LINKS_WIDGETS = [
  { to: "/notifications", label: "Notifications", icon: MessageSquareDot },
  { to: "/fundraising", label: "Fundraising", icon: Goal },
];
