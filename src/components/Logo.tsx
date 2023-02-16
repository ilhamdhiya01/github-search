import GithubLogo from '../assets/github-logo.png';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img className='w-[118px] h-[118px]' src={GithubLogo} alt='logo' />
      <h2 className='text-[39px] font-light text-black leading-[45px]'>
        Cari Orang
        <span className='font-bold block'>Github</span>
      </h2>
    </div>
  );
};
