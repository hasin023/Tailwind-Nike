import Button from '../components/Button'
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You{' '}
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-coral-red inline-block'> Super </span>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-coral-red to-pink-500 inline-block'>Quality </span> Shoes
        </h2>

        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>

        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <div className='mt-11'>
          <Button label='View details' textColor='text-white'/>
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={550}
          height={502}
          className='object-contain'
        />
      </div>
    </section>
  )
}

export default SuperQuality