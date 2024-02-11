import { PropsWithChildren } from "react";


export default function SkillList({ children }: PropsWithChildren) {
  return (
    <div className="max-w-5xl mx-auto w-11/12 grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-8 mb-8">
      {
        children
      }
    </div>
  )
}
