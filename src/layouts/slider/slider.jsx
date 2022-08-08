import React, { useState } from 'react'

const sliderList = [
    'https://jabko.ua/image/cache/cataloge-2/111sales/abank-mono-max-1700.jpg',
    'https://jabko.ua/image/cache/cataloge-2/silder-2/MOB-22/macbook-pro-max-1700.jpg',
    'https://jabko.ua/image/cache/cataloge-2/silder-2/PC-22/ps5-pc-max-1700.jpg',
    'https://jabko.ua/image/cache/cataloge-2/silder-2/PC-22/watch-s6-max-1700.jpg',
    'https://jabko.ua/image/cache/cataloge-2/silder-2/PC-22/13 копіювати-max-1700.jpg',
    'https://jabko.ua/image/cache/cataloge-2/silder-2/PC-22/11 копіювати-max-1700.jpg',
    'https://jabko.ua/image/cache/cataloge-2/silder-2/PC-22/12-міні-max-1700.jpg',
    'https://jabko.ua/image/cache/cataloge-2/silder-2/PC-22/13-міні-max-1700.jpg',
    'https://jabko.ua/image/cache/cataloge-2/silder-2/PC-22/12 копіювати-max-1700.jpg',
]


const Slider = () => {
    const [selectedSliderItem, setSliderItem] = useState(0);
    
    setInterval(() => {
        setSliderItem(selectedSliderItem + 1);
        if (selectedSliderItem === sliderList.length - 1) {
            setSliderItem(0);
        }
    },5000)

    return (
        <>
            <div className='w-[1400px] mx-auto items-center select-none'>
                <div className='relative'>
                   {sliderList.map((props, index) => {
                        return(
                            <img src={sliderList[index]} className={(selectedSliderItem === index) ? 'duration-500 opacity-100 h-fit translate-x-0' : 'duration-500 opacity-0 h-[0px] translate-x-10'} alt="/" />
                        )
                    })}
                    <div className='space-x-3 relative flex items-center justify-center mt-2'>
                        {sliderList.map((props, idx) => {
                            return (
                                <>
                                    <button className={(idx === selectedSliderItem) ? 'w-4 h-2  bg-[#666666] rounded-full hover:bg-white hover:scale-110 duration-200' : 'w-3 h-3  bg-[#666666] rounded-full hover:bg-white hover:scale-110 duration-200'} onClick={() => setSliderItem(idx)}/>
                                </>
                            )
                        })}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Slider