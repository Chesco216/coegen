import { ReactNode, useState } from "react"
import { NavBar } from "../components/NavBar/NavBar"
import { ContactModal } from "../components/Modals/ContactModal"
import { Footer } from "../components/Footer/Footer"

export const MainLayout = ({children}: {children: ReactNode}) => {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="w-screen h-screen flex flex-col bg-zinc-800 ">
      {
        (isOpen) && <ContactModal/>
      }
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen}/>
      <main className="w-full h-screen m-auto overflow-scroll">
        {children}
      </main>
      <Footer/>
    </div>
  )
}

