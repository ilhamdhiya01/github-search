import Globe from '../assets/Globe.png';
import { DetailHeader } from './components/DetailHeader';
import { ListRepository } from './components/ListRepository';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSearchGithub } from '../zustand/SearchGithub';

export default function DetailPage() {
  const { username } = useParams();
  const { user, getDetailUserGithub, repos, getAllRepos } = useSearchGithub();
  useEffect(() => {
    getDetailUserGithub(username);
    getAllRepos(username);
  }, []);
  return (
    <div className='lg:max-w-[45%] flex flex-col w-full'>
      <DetailHeader {...user} />
      <div className='mt-9'>
        <h2 className='flex items-center gap-2 text-2xl font-semibold'>
          <img src={Globe} alt='icon' className='w-[28.8px] h-[28.8px]' />
          List Repository
        </h2>
        <div className='border mt-4 rounded-lg max-h-[400px] overflow-y-auto no-scrollbar'>
          <ul className='divide-y py-4 px-10 space-y-6'>
            {repos.map((item) => (
              <ListRepository key={item.id} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
