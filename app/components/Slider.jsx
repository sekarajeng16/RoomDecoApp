export function Slider({children, key}){
    return(
        <div key={key} className="flex flex-col md:flex-row w-full md:h-132">
            {children}
        </div>
    )
}

export function SliderImage({ src, count, onNext, onPrev}) {
  return (
    <div className="w-full md:w-1/2 relative">
        <img className="object-cover h-full" src={src} alt={`slider-${count}`} />
        <div className="flex md:hidden right-0 absolute bottom-0">
            <button className="bg-black hover:bg-gray-800 p-5" onClick={onPrev}>
                <img src="/images/icon-angle-left.svg" alt="previous-img" />
            </button>
            <button className="bg-black hover:bg-gray-800 p-5" onClick={onNext}>
                <img src="/images/icon-angle-right.svg" alt="previous-img" />
            </button>
        </div>
    </div>
  )
}


export function SliderContent({title, children, onNext, onPrev}){
    return(
        <div className="w-full my-5 md:my-0 md:w-1/2 flex flex-col justify-center items-left relative">
            <h1 className="h1 text-4xl px-10 mt-5 md:text-5xl md:px-35">{title}</h1>
            {children}
           
            <div className="hidden md:flex absolute bottom-0">
                <button className="bg-black hover:bg-gray-800 p-5" onClick={onPrev}>
                    <img src="/images/icon-angle-left.svg" alt="previous-img" />
                </button>
                <button className="bg-black hover:bg-gray-800 p-5" onClick={onNext}>
                    <img src="/images/icon-angle-right.svg" alt="previous-img" />
                </button>
            </div>
        </div>

        
    )
}
