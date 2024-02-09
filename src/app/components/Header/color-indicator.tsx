'use client'

import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"



export const colorIndicatorVariants = cva(
  'w-6 h-6 rounded-full flex justify-center items-center relative',
  {
    variants: {
      variant: {
        red: 'bg-[#DC2626]',
        rose: 'bg-[#E11D48]',
        orange: 'bg-[#EA580C]',
        green: 'bg-[#22C55E]',
        blue: 'bg-[#3B82F6]',
        yellow: 'bg-[#FACC15]',
        violet: 'bg-[#6D28D9]',
      }
    }
  }
)

const colorCircleIndicatorVariants: typeof colorIndicatorVariants = cva(
  'absolute border-[2px] border-[${color}] w-8 h-8 rounded-full',
  {
    variants: {
      variant: {
        red: 'border-[#DC2626]',
        rose: 'border-[#E11D48]',
        orange: 'border-[#EA580C]',
        green: 'border-[#22C55E]',
        blue: 'border-[#3B82F6]',
        yellow: 'border-[#FACC15]',
        violet: 'border-[#6D28D9]',
      }
    }
  }
)

export interface ColorIndicatorProps extends VariantProps<typeof colorIndicatorVariants> {
  active: boolean
}

export default function ColorIndicator({ active, variant }: ColorIndicatorProps) {
  return (
    <div className={cn(colorIndicatorVariants({ variant }))}>
      {
        active && (
          <>
            <div className={cn(colorCircleIndicatorVariants({ variant }))}/>
          </>
        )
      }
    </div>
  )
}
