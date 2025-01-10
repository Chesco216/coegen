import { Cross } from "../../assets/Cross"

export const NavBar = ({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: (value: boolean) => void}) => {
  return (
    <div className="sticky top-0 m-auto w-full flex flex-row items-center justify-between bg-white px-10 py-2">
      <span className="flex flex-row gap-10 items-center">
        <img className="w-[45px] mr-4" src="https://coe.bo/images/lapaz/logo/logo.jpeg" alt='logo'/>
        <a className="text-sm atag" href="/">INICIO</a>
        <a className="text-sm atag" href="/servicios">SERVICIOS</a>
        <a className="text-sm atag" href="/nosotros">NOSOTROS</a>
      </span>
      {
        (isOpen) ?
          <button onClick={() => setIsOpen(false)} className="w-fit h-fit bg-rose-500 py-2 px-4 rounded-lg rotate-180 duration-300 transition ease-out">
            <Cross w={30} h={30} color="white" />
          </button>
          :
          <button onClick={() => setIsOpen(true)} className="w-fit h-fit bg-rose-500 py-2 px-4 rounded-lg font-semibold text-white focus:border-none">
            Contactanos
          </button>
      }
    </div>
  )
}

