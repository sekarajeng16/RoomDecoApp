
'use client'
import { useState } from "react";
import { Slider, SliderContent, SliderImage } from "./components/Slider";



export default function Home() {

  const [currentState, setCurrentState] = useState(1);

  const handleNextSlide = (value) => {
    if(value == 3){
      setCurrentState(1)
    }
    else{
       var newState = value + 1
      setCurrentState(newState)
    }
    
  }

  const handlePrevSlide = (value) => {
    if(value == 1){
      setCurrentState(3)
    }
    else{
      var newState = value -= 1
      setCurrentState(newState)
    }

  }

  return (
    <main className="relative">
      <section>
        <div className="">
          {currentState == 1 ? 
            <Slider key={1}>
              <SliderImage onNext={() => handleNextSlide(1)} onPrev={() => handlePrevSlide(1)} src="/images/desktop-image-hero-1.jpg"/>
              <SliderContent onNext={() => handleNextSlide(1)} onPrev={() => handlePrevSlide(1)} title={"Dicover Innovate Ways to Decorate"}>
                <div className="flex flex-col gap-3 mt-8 space-y-5 px-10 md:px-35">
                  <p>
                    We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function 
                    in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you 
                    and what you love.
                  </p>
                  <button className="flex gap-3 font-semibold cursor-pointer">
                      <span className="tracking-[0.4rem] text-black hover:color-secondary text-lg ">SHOP NOW</span>
                      <img src="/images/icon-arrow.svg" className="w-auto" alt="arrow-shop-now" />
                  </button>
                </div>
              </SliderContent>
            </Slider>

            : currentState == 2 ?
            <Slider key={2}>
              <SliderImage onNext={() => handleNextSlide(2)} onPrev={() => handlePrevSlide(2)} src="/images/desktop-image-hero-2.jpg"/>
              <SliderContent onNext={() => handleNextSlide(2)} onPrev={() => handlePrevSlide(2)} title={"We are available across the globe"}>
                <div className="flex flex-col gap-3 mt-8 space-y-5 px-10 md:px-35">
                  <p>
                    With stores all over the world, it's easy for you to find furniture for your home or place of business. 
                    Locally, we’re in most major cities throughout the country. 
                    Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.
                  </p>
                  <button className="flex gap-3 font-semibold cursor-pointer">
                      <span className="tracking-[0.4rem] text-black hover:color-secondary text-lg ">SHOP NOW</span>
                      <img src="/images/icon-arrow.svg" className="w-auto" alt="arrow-shop-now" />
                  </button>
                </div>
              </SliderContent>
            </Slider>
          :

            <Slider key={3}>
              <SliderImage onNext={() => handleNextSlide(3)} onPrev={() => handlePrevSlide(3)} src="/images/desktop-image-hero-3.jpg"/>
              <SliderContent onNext={() => handleNextSlide(3)} onPrev={() => handlePrevSlide(3)} title={"Manufactured with best materials"}>
                <div className="flex flex-col gap-3 mt-8 space-y-5 px-10 md:px-35">
                  <p>
                     Our modern furniture store provide a high level of quality. 
                     Our company has invested in advanced technology to ensure that every product is made 
                     as perfect and as consistent as possible. With three decades of experience in this industry, 
                     we understand what customers want for their home and office.
                  </p>
                  <button className="flex gap-3 font-semibold cursor-pointer">
                      <span className="tracking-[0.4rem] text-black hover:color-secondary text-lg ">SHOP NOW</span>
                      <img src="/images/icon-arrow.svg" className="w-auto" alt="arrow-shop-now" />
                  </button>
                </div>
              </SliderContent>
            </Slider>
        }
          

          
        </div>
        
      </section>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-7 w-full">
          <div className="md:col-span-2">
            <img 
              src="/images/image-about-dark.jpg" 
              className="w-full h-full object-cover block" 
              alt="Dark interior"
            />
          </div>
          <div className="md:col-span-3 px-8 py-12 lg:px-12 flex flex-col justify-center bg-white">
            <h2 className="text-sm tracking-[0.4rem] text-black font-bold uppercase">
              ABOUT OUR FURNITURE
            </h2>
            <p className="mt-4 text-gray-500 text-[15px] leading-relaxed">
              Our multifunctional collection blends design and function to suit your individual taste. 
              Make each room unique, or pick a cohesive theme that best express your interests and what 
              inspires you. Find the furniture pieces you need, from traditional to contemporary styles 
              or anything in between.
            </p>
          </div>
          <div className="md:col-span-2">
            <img 
              src="/images/image-about-light.jpg" 
              className="w-full h-full object-cover block" 
              alt="Light interior"
            />
          </div>

        </div>
      </section>
    </main>
  );
}
