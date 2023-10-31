"use client";

import HomeIcon from '@mui/icons-material/Home';

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { sidebarLinks } from "@/constants";

const LeftSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <section className='fixed left-0 top-0 z-20 flex flex-col w-[12%] mt-[42px] h-[90%] overflow-auto border rounded-2xl ml-2 max-md:hidden shadow-lg bg-slate-300 text-purple-500'>
      <div className='flex w-full flex-1 flex-col gap-6 px-3'>
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          if (link.route === "/profile") link.route = `${link.route}/`;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`relative flex justify-start gap-4 rounded-lg p-4 ${isActive && "bg-primary"}`}
            >
              < link.Icon
              />

              <p className='text-light-1 max-lg:hidden'>{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default LeftSidebar;
