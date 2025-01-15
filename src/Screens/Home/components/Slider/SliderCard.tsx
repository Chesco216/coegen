export const SliderCard = ({img, description}: {img: string, description: string}) => {
  return (
    <div className="flex flex-row items-center gap-10 bg-white py-8 px-20">
      <img className="w-[400px]" src={img} />
      <p className="w-fit h-fit">{description}</p>
    </div>
  )
}

