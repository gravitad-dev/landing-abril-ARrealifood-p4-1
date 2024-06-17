import data from '../../data.json';

const Logo = ({ colorText }) => {
  const { url, alt, title, text } = data.logo;

  return (
    <div className='flex items-center gap-4 w-[60px]'>
      <img
        src={url}
        alt={alt}
        title={title}
        className='w-full h-full object-contain'
      />
    </div>
  );
};
export default Logo;
