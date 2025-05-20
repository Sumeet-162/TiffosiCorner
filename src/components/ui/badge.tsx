import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        ferrari: "border-transparent bg-[#FF2800] text-white shadow hover:bg-[#FF2800]/80",
        mercedes: "border-transparent bg-[#00D2BE] text-black shadow hover:bg-[#00D2BE]/80",
        red_bull: "border-transparent bg-[#0600EF] text-white shadow hover:bg-[#0600EF]/80",
        mclaren: "border-transparent bg-[#FF8700] text-black shadow hover:bg-[#FF8700]/80",
        aston_martin: "border-transparent bg-[#006F62] text-white shadow hover:bg-[#006F62]/80",
        alpine: "border-transparent bg-[#0090FF] text-white shadow hover:bg-[#0090FF]/80",
        williams: "border-transparent bg-[#005AFF] text-white shadow hover:bg-[#005AFF]/80",
        alphatauri: "border-transparent bg-[#2B4562] text-white shadow hover:bg-[#2B4562]/80",
        alfa: "border-transparent bg-[#900000] text-white shadow hover:bg-[#900000]/80",
        haas: "border-transparent bg-[#FFFFFF] text-black shadow hover:bg-[#FFFFFF]/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  teamColor?: string;
}

function Badge({ className, variant, teamColor, ...props }: BadgeProps) {
  let teamVariant = variant;
  if (className?.includes("team-")) {
    const teamMatch = className.match(/team-(\w+)/);
    if (teamMatch && teamMatch[1]) {
      teamVariant = teamMatch[1] as any;
      className = className.replace(/team-\w+/g, "").trim();
    }
  }

  return (
    <div className={cn(badgeVariants({ variant: teamVariant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
