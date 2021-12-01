import React from 'react';
import Breadcrumbs from 'nextjs-breadcrumbs';

const Nav = () => {
  return <Breadcrumbs
        omitRootLabel
        listClassName="bg-brink-pink-500 first-letter:uppercase flex flex-row space-x-4 pl-5 py-2 font-comm  text-white w-full z-50"
        />;
};

export default Nav