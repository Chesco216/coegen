import { Facebook } from "../../assets/Facebook"
import { Whatsapp } from "../../assets/Whatsapp"

export const ContactModal = () => {
  return (
    <div className="absolute top-14 right-10 flex flex-col m-auto bg-white py-6 px-10 gap-4 rounded-lg">
      <label className="flex flex-row gap-4 items-center bg-green-600 text-white py-4 px-8 rounded-lg">
        <Whatsapp w={30} h={30} color="white"/>
        <p>Whatsapp</p>
      </label>
      <label className="flex flex-row gap-5 items-center bg-blue-600 text-white py-4 px-8 rounded-lg">
        <Facebook w={30} h={30} color="white"/>
        <p>Facebook</p>
      </label>
    </div>
  )
}

