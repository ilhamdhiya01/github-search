import { UserItem } from './UserItem';
import { useSearchGithub } from '../../zustand/SearchGithub';

export const HasilPencarian = () => {
  const { users, keyword } = useSearchGithub();
  return (
    <div className='border max-h-[350px] rounded-md overflow-y-auto no-scrollbar relative mt-3'>
      <h2 className='text-center text-[#252525] block bg-white py-3 border-b sticky top-0'>
        Hasil Pencarian : <span className='font-bold'>{keyword}</span> (total : {users.length})
      </h2>
      <ul className='flex flex-col divide-y'>
        {users.map((user) => (
          <UserItem key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};
