import { BsSearch } from 'react-icons/bs';

interface ButtonProps {
  type?: 'submit' | 'reset';
  isLoading: boolean;
  disabled?: boolean;
}
export const Button: React.FC<ButtonProps> = ({ type, isLoading }) => {
  return (
    <button disabled={isLoading} type={type} className='bg-black p-3 rounded-md hover:bg-zinc-800 outline-none transition ease-in-out duration-300'>
      {isLoading ? <div className='animate-spin rounded-full w-[25px] h-[25px] border-b-2  border-white'></div> : <BsSearch size={25} className='text-white' />}
    </button>
  );
};
