import Image from "next/image";
import Link from "next/link";

function Topbar() {
  return (
    <nav className='fixed top-0 z-30 flex w-full h-[50px] items-center justify-between border px-6 py-3'>
      <Link href='/' className='flex items-center gap-4'>
        <Image src='/logo.svg' alt='logo' width={28} height={28} />
        <p className='text-heading3-bold text-light-1 max-xs:hidden'>Threads</p>
      </Link>

      <div className='flex items-center gap-1'>
        <div className='block md:hidden'>
              <div className='flex cursor-pointer'>
                <Image
                  src='/assets/logout.svg'
                  alt='logout'
                  width={24}
                  height={24}
                />
              </div>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
