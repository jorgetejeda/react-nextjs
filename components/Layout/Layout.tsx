import React, { ReactNode } from 'react';
import Navbar from '@components/Navbar/Navbar';
import style from './Layout.module.css'

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className='container'>
      <Navbar />
      <main>{children}</main>
      <footer className={style.footer}>This is the footer</footer>
    </div>
  );
};

export default Layout;
