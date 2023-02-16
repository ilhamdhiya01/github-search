import { ReposResBody } from '..';

export const ListRepository: React.FC<ReposResBody> = ({ id, name, description, size, watchers, html_url }) => {
  return (
    <li className='space-y-2 pt-2'>
      <a href={html_url} target={'_blank'} className='text-lg font-semibold text-[#0969DA] hover:underline inline-block'>
        {name}
      </a>
      <p>{description !== null ? description : 'Nothing Description'}</p>
      <div className='flex items-center gap-6'>
        <span className='bg-[#F1F1F1] px-2 py-[2px]'>Size : {size}</span>
        <span className='bg-[#F1F1F1] px-2 py-[2px]'>Watcher : {watchers}</span>
      </div>
    </li>
  );
};
