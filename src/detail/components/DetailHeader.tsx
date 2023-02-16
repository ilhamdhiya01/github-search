import { DetailUserResBody } from '..';

export const DetailHeader: React.FC<DetailUserResBody> = ({ id, name, avatar_url, following, followers, public_repos }) => {
  return (
    <div className='flex items-center gap-3'>
      <img src={avatar_url} alt='logo' className='w-[118px] h-[118px] rounded-full' />
      <div className='space-y-2 w-full'>
        <div className='flex items-baseline gap-2'>
          <h2 className='flex-1 text-[39px] font-light text-[#252525]'>{name}</h2>
          <div className='items-center border bg-[#F1F1F1] w-[120px] h-[28px] flex justify-center'>
            <span className='text-sm text-[#252525]'>{id}</span>
          </div>
        </div>
        <ul className='flex items-center justify-between'>
          <li className='flex-1'>
            <div className='text-2xl font-light'>
              <span className='font-bold block leading-6'>{followers}</span>
              Follower
            </div>
          </li>
          <li className='flex-1'>
            <div className='text-2xl font-light'>
              <span className='font-bold block leading-6'>{following}</span>
              Following
            </div>
          </li>
          <li className='flex-1'>
            <div className='text-2xl font-light'>
              <span className='font-bold block leading-6'>{public_repos}</span>
              Public Repos
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
