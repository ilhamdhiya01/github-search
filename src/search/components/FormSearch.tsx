import { Button } from './Button';
import { useSearchGithub } from '../../zustand/SearchGithub';
import { useEffect } from 'react';

export const FormSearch = () => {
  const { isLoading, setLoading, keyword, setKeyword, getUsersGithub } = useSearchGithub();
  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    getUsersGithub(keyword);
  };
  return (
    <form onSubmit={(e) => onSearchSubmit(e)} className='flex gap-2 items-center mt-8'>
      <input type='text' name='keyword' value={keyword} onChange={({ target }) => setKeyword(target.value)} className='w-full outline-none border rounded-md p-3  placeholder:text-[#898989]' placeholder='Cari user di github' />
      <Button type='submit' isLoading={isLoading} />
    </form>
  );
};
