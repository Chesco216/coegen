import { useState } from "react"
import { Arrow } from "../../../../assets/data/Arrow"
import { sliderData } from "../../../../assets/data/slider"
import { SliderCard } from "./SliderCard"

export const Slider = () => {

  const cards = sliderData
  const [cardIndex, setCardIndex] = useState<number>(0)

  return (
    <div className="flex flex-row animation-fade-in">
      <button disabled={(cardIndex == 0) ? true : false}
        onClick={() => setCardIndex(cardIndex - 1)}
      ><Arrow 
          w={50}
          h={50} 
          color={(cardIndex == 0) ? '#6b7280' : 'black'} 
          bg={(cardIndex == 0) ? '#cbd5e1' : 'white'}
        />

      </button>
      <SliderCard img={cards[cardIndex].img} description={cards[cardIndex].description} />
      <button className="rotate-180" disabled={(cardIndex == (cards.length - 1)) ? true : false}
        onClick={() => setCardIndex(cardIndex + 1)}
      ><Arrow 
          w={50} 
          h={50} 
          color={(cardIndex == (cards.length - 1)) ? '#6b7280' : 'black'} 
          bg={(cardIndex == (cards.length - 1)) ? '#cbd5e1' : 'white'}
        />

      </button>
    </div>
  )
}
