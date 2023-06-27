import Image from 'next/image';

const card1Data = {
  header: "Big and bigger.",
  image: "https://www.apple.com/v/iphone-14/i/images/key-features/features/size/size_yellow__dnv9794q7loy_medium.jpg",
  alt: "iPhone 14 and iPhone 14 Plus",
  description: [
    {
      header: "iPhone 14",
      description: "6.1\"",
    }, {
      header: "iPhone 14 Plus",
      description: "6.7\"",
    }
  ]
}


export const card1 = () => {
  return (
    <div className="flex flex-col h-full w-full text-center py-3">
      <div className="flex-1 flex items-center justify-center">
        <span className="text-3xl">{card1Data.header}</span>
      </div>
      <div className="h-[65%] flex justify-center items-center max-w-full max-h-full">
        <Image src={card1Data.image} width={229} height={339} alt={card1Data.alt} />
      </div>
      <div className="flex-1 flex justify-center items-center gap-8">
        {card1Data.description.map((item, index) => (
          <div className="h-full flex flex-col justify-center items-center">
            <span className="text-xl text-zinc-500">{item.header}</span>
            <span className="text-3xl">{item.description}</span>
          </div>  
        ))}
      </div>
    </div>
  )
}

export const card2 = () => {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center p-14 md:p-2">
      <div className="flex items-center justify-center">
        <span className="text-lg text-zinc-400">iPhone 14 Plus</span>
      </div>
      <div className="text-3xl lg:text-4xl text-center p-2 bg-clip-text font-bold gradientBackground">
        <span>The </span>
        <span className="border-2 rounded-xl px-2" style={{borderColor: "var(--color-stop-1)"}}>looongest</span>
        <span> battery life of any iPhone. Ever.</span>
      </div>
    </div>
  )
}

export const card3 = () => {
  return (
    <div className="flex flex-col h-full w-full">

    </div>
  )
}

export const card4 = () => {
  return (
    <div className="flex flex-col h-full w-full">

    </div>
  )
}

export const card5 = () => {
  return (
    <div className="flex flex-col h-full w-full">

    </div>
  )
}

export const card6 = () => {
  return (
    <div className="flex flex-col h-full w-full">

    </div>
  )
}

export const card7 = () => {
  return (
    <div className="flex flex-col h-full w-full">

    </div>
  )
}

export const card8 = () => {
  return (
    <div className="flex flex-col h-full w-full">

    </div>
  )
}

export const card9 = () => {
  return (
    <div className="flex flex-col h-full w-full">

    </div>
  )
}

export const card10 = () => {
  return (
    <div className="flex flex-col h-full w-full">

    </div>
  )
}

export const card11 = () => {
  return (
    <div className="flex flex-col h-full w-full">

    </div>
  )
}

export const card12 = () => {
  return (
    <div className="flex flex-col h-full w-full">

    </div>
  )
}

export const cardSet = [card1(), card2(), card3(), card4(), card5(), card6(), card7(), card8(), card9(), card10(), card11(), card12()]