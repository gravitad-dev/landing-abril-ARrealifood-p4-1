const StatsItem = ({ icon, text, number }) => {
  return (
    <div className=' flex items-center gap-5 w-full justify-start'>
      <div className='w-[60px] h-[60px]'>
        <img
          src={icon.url}
          alt={icon.alt}
          title={icon.title}
          className='w-full h-full object-contain'
        />
      </div>
      <div className='flex flex-col flex-1 justify-center text-left'>
        <h3 className='font-semibold text-[18px]'>{number}</h3>
        <p className='text-[14px] text-custom-grey'>{text}</p>
      </div>
    </div>
  );
};
export default StatsItem;
