import * as React from "react";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

function Header() {

  const { data: session } = useSession();

  const handleLogout = () => {
    signOut();
  };

  return (
    <header className="clear-both">
      <div className=" flex items-center justify-between bg-sky-400 p-1 flex-grow py-2 mb-0">
        {/* izquierda */}
        <div className="flex items-center flex-grow sm:flex-grow-0 cursor-pointer ml-6 sm:ml-1">
          <Link href="/">
            <span className="px-1 mr-6 text-white">Cajeros CUC</span>
          </Link>
        </div>
        {/* derecha */}
        <div className="flex items-center flex-grow sm:flex-grow-0 cursor-pointer mr-6">
          <p className="text-white mr-3">{session.user.name}</p>
          <button onClick={handleLogout}>
            <Image
              height={30}
              width={30}
              className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src={session.user.image}
              alt="{user.handle}"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
export default Header;
