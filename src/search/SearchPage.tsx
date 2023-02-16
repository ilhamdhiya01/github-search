import { FormSearch } from './components/FormSearch';
import { TidakDitemukan } from './components/TidakDitemukan';
import { HasilPencarian } from './components/HasilPencarian';
import { Logo } from '../components/Logo';
import { useSearchGithub } from '../zustand/SearchGithub';

export default function SearchPage() {
  const { users } = useSearchGithub();
  return (
    <div className='lg:max-w-[35%] md:max-w-[80%] w-full flex flex-col'>
      <Logo className='mx-auto' />
      <FormSearch />
      {users && <HasilPencarian />} {/* users !== null ? <HasilPencarion /> : null */}
    </div>
  );
}
