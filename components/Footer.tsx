import FacebookIcon from '@/icons/social/FacebookIcon';
import TwitterIcon from '@/icons/social/TwitterIcon';
import YoutubeIcon from '@/icons/social/YoutubeIcon';

const Footer = () => {
  return (
    <footer className='bg-[#ffff00]'>
      <div className='flex justify-between mx-auto max-w-7xl'>
        <div className='py-3 text-sm text-blue-900'>
          © 2023 NRI Kannada Balaga. All rights reserved to the website .
        </div>
        <div className='flex gap-4 py-3 text-[#ff0000]'>
          <FacebookIcon className='w-5 h-5' />
          <TwitterIcon className='w-5 h-5' />
          <YoutubeIcon className='w-5 h-5' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
