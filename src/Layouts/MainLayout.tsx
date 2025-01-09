import { ReactNode, useState } from "react"
import { NavBar } from "../components/NavBar/NavBar"
import { ContactModal } from "../components/Modals/ContactModal"

export const MainLayout = ({children}: {children: ReactNode}) => {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="w-screen h-screen flex flex-col bg-zinc-800 ">
      {
        (isOpen) && <ContactModal/>
      }
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen}/>
      {children}
    </div>
  )
}

