import data from '../../data.json';

const Info = () => {
  const { text, name, desc, img } = data['section-five'];

  return (
    <section
      className='py-[100px] flex flex-col gap-5 md:flex-row bg-custom-silver px-2 md:pl-4 md:pr-2 justify-center'
      id='testimonial'
    >
      <img
        src={img.url}
        alt={img.alt}
        title={img.title}
        className='flex-1 max-w-[700px] max-h-[500px] w-full object-cover radius aspect-square'
      />
      <div className='text-center flex-1 md:text-left flex flex-col gap-2 justify-center'>
        <h4 className='text-custom-green text-[30px]'>{text}</h4>
        <ul className='flex flex-col gap-4 mt-10 '>
          {desc.map((p, idx) => (
            <li className='paragraph ' key={idx}>
              <b>{p.split(':')[0]}:</b>
              <p>{p}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Info;
