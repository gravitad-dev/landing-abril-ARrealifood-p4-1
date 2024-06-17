import data from '../../data.json';

const Clients = () => {
  const { title, desc, items } = data['section-two'];

  return (
    <section className='py-[100px]' id='clients'>
      <div className='text-center'>
        <h2 className='subtitle mb-2'>{title}</h2>
        <p className='paragraph max-w-[800px] mx-auto'>{desc}</p>
      </div>
      {/* items */}
      <div className='mt-14 flex flex-wrap gap-4 justify-center lg:justify-between'>
        {items.map((item) => (
          <div key={item.id} className='flex justify-between'>
            <img src={item.icon.url} alt={item.icon.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Clients;
