import Image from "next/image";
import Link from "next/link";

function Topbar() {
  return (
    <nav>
      <Link href='/' className='flex items-center gap-4'>
        <Image src='/assets/user.svg' alt='logo' width={28} height={28} />
        <p className='text-heading3-bold text-light-1 max-xs:hidden'>Threads</p>
      </Link>

    </nav>
  );
}

export default Topbar;
