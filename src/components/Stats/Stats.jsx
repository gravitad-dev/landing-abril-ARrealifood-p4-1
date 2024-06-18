import data from '../../data.json';
import StatsItem from './StatsItem';

const Stats = () => {
  const { text, items } = data['section-eigth'];

  return (
    <section className='py-[100px] bg-custom-silver px-4' id='product'>
      <div className='text-center'>
        <h2 className='subtitle mb-2'>
          {text.black} <span className='text-custom-green'>{text.green}</span>{' '}
        </h2>
      </div>
      {/* items */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-10 place-items-center mt-[50px] '>
        {items.map((item) => (
          <StatsItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};
export default Stats;
