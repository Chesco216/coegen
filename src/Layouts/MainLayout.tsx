import { ReactNode } from "react"

export const MainLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className="w-screen h-screen flex flex-col">
      {children}
    </div>
  )
}

