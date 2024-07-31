import { NavLink, NavLinkProps } from 'react-router-dom';
import { classNames } from '@/util';
import React from 'react';

interface NavItemProps extends NavLinkProps {
  to: string;
  className: string;
  children: ({ isActive }: { isActive: boolean }) => React.ReactNode;
  activeClass?: string;
  close?: (focusableElement?: HTMLElement | React.MutableRefObject<HTMLElement | null>) => void;
}

export const NavItem: React.FC<NavItemProps> = ({
  to,
  children,
  className,
  activeClass,
  close,
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(
          'flex items-center relative transition ease delay-400',
          isActive ? classNames('bg-white/20 text-gray-700', activeClass) : 'text-gray-900',
          className
        )
      }
      onClick={() => {
        if (close) {
          close();
        }
      }}>
      {({ isActive }) => children({ isActive })}
    </NavLink>
  );
};
