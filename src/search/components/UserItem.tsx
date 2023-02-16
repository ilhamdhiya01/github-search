import { BsArrowRight, BsChevronRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { UserItemProps } from '..';

export const UserItem: React.FC<UserItemProps> = ({ id, login, avatar_url, url }) => {
  return (
    <li className='flex justify-between items-center hover:bg-gray-200 px-8 py-2'>
      <div className='flex items-center gap-3'>
        <img src={avatar_url} alt='avatar' className='border rounded-full bg-gray-200 w-14 h-14' />
        <span className='font-bold text-[#252525]'>{login}</span>
      </div>
      <Link to={`/detail/${login}`}>
        <div className='w-10 h-10 flex justify-center items-center hover:bg-black hover:text-white transition ease-in-out duration-300 rounded-md'>
          <BsChevronRight size={20} />
        </div>
      </Link>
    </li>
  );
};
