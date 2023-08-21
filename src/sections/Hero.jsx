import { useState } from "react";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";

const Hero = () => {

  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">

        <p className='text-xl font-medium font-montserrat text-coral-red'>Our Summer Collection</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
          <br />
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-coral-red inline-block mt-3'>Nike</span> Shoes  
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-10   sm:max-w-sm'>Discover stylish Nike arrivals, quality, comfort and innovation for your active life.</p>
        <Button label='Shop Now' textColor='text-white'/>

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40">
        <img src={bigShoeImg} alt="shoeCOllection" height={400} width={500} className="object-contain relative z-10"/>

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => { setBigShoeImg(shoe) }}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Hero