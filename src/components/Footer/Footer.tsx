import { CopyRight } from "../../assets/CopyRight"

export const Footer = () => {
  return (
    <div className="fixed bottom-0 m-auto w-full flex flex-row items-center gap-2 bg-black py-6 pl-[300px]">
      <CopyRight w={15} h={15} color="white"/>
      <p className="text-white text-sm">2025 DIRECION DE SISTEMAS DEL COE</p>
    </div>
  )
}

