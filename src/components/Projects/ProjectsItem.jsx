const ProjectsItem = ({ title, img }) => {
  const arrayOfTitle = title.split(':');
  const getBoldWord = `${arrayOfTitle[0]}:`;

  return (
    <div className='relative'>
      <img
        src={img.url}
        alt={img.alt}
        title={img.title}
        className='w-full h-full object-cover'
      />
      <div
        className='
      absolute bottom-[-150px] left-[50%] translate-x-[-50%] w-[90%] 
      bg-custom-silver radius p-10 shadow-md z-10 
       '
      >
        <h3 className='text-center'>
          <b>{getBoldWord}</b>
          {arrayOfTitle[1]}
        </h3>
      </div>
    </div>
  );
};
export default ProjectsItem;
