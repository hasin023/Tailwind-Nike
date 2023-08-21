const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 bg-gradient-to-tr from-amber-300 to-rose-400'>
      <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
        <img src={imgURL} alt={label} width={27} height={27} />
      </div>
      <h3 className='mt-5 font-palanquin text-3xl text-slate-50 leading-normal font-bold'>
        {label}
      </h3>
      <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-100'>
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;