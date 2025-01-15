import { Slider } from "./components/Slider/Slider"

export const Home = () => {
  return (
    <div className="my-auto px-[20%] flex flex-col items-center justify-center">
      <img src="https://coe.bo/images/2024/12/19/coe.jpg"/>
      <h3 className="text-white text-4xl italic my-10">"Mas que un club, SOMOS UNA FAMILIA"</h3>
      <Slider/>
    </div>
  )
}

