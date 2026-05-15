/* eslint @next/next/no-img-element: 0 */

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const isActive = (path) => router.pathname === path;

  const navLinks = [
    { href: '/', label: 'Home', icon: 'mdi:home' },
    { href: '/bio', label: 'Bio', icon: 'mdi:book' },
    { href: '/info', label: 'Skills', icon: 'mdi:information-circle' },
    { href: '/projects', label: 'Projects', icon: 'mdi:folder-multiple' },
  ];

  return (
    <aside
      className={`h-screen fixed bg-gradient-to-b from-[#1a1a1e] to-[#27272a] border-r border-[#10b981]/20 duration-300 z-30 ${
        open ? 'md:w-64 w-20' : 'w-20'
      }`}
      aria-label="Sidebar"
    >
      <div className="overflow-y-auto h-screen py-4 px-3 flex flex-col">
        {/* Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="self-end mb-4 p-2 rounded-lg hover:bg-[#10b981]/20 transition-all duration-200 text-[#10b981]"
          aria-label="Toggle sidebar"
        >
          <Icon
            icon={open ? 'mdi:chevron-left' : 'mdi:chevron-right'}
            width={24}
            height={24}
          />
        </button>

        {/* Logo */}
        <Link
          href="/"
          className={`flex items-center gap-3 mb-8 rounded-lg hover:bg-[#10b981]/10 transition-all duration-200 border border-transparent hover:border-[#10b981]/30 hover:no-underline ${
            open ? 'p-2' : 'p-1 justify-center'
          }`}
        >
          {open ? (
            <>
              <img
                className="h-10 w-10 rounded-full border-2 object-cover border-[#10b981]/50 flex-shrink-0"
                alt="logo"
                src="/images/panokurka.jpeg"
              />
              <span className="text-lg font-bold text-white whitespace-nowrap">Tomáš K.</span>
            </>
          ) : (
            <img
              className="h-10 w-10 rounded-full border-2 object-cover border-[#10b981]/50"
              alt="logo"
              src="/images/panokurka.jpeg"
            />
          )}
        </Link>

        {/* Navigation Links */}
        <ul className="space-y-2 flex-1">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-200 group hover:no-underline ${
                    active
                      ? 'bg-[#10b981]/20 border border-[#10b981]/50 text-[#10b981]'
                      : 'text-gray-400 hover:text-white hover:bg-[#10b981]/10 border border-transparent hover:border-[#10b981]/30'
                  } ${!open && 'justify-center'}`}
                >
                  <Icon
                    icon={link.icon}
                    width={24}
                    height={24}
                    className={`flex-shrink-0 transition-colors ${
                      active ? 'text-[#10b981]' : 'group-hover:text-[#34d399]'
                    }`}
                  />
                  <span
                    className={`font-medium transition-all duration-200 whitespace-nowrap ${
                      !open ? 'hidden' : 'block'
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Footer */}
        <div className="border-t border-[#10b981]/20 pt-4">
          <div
            className={`text-center transition-all duration-200 ${
              !open ? 'hidden' : 'block'
            }`}
          >
            <h3 className="text-xs font-semibold text-gray-400">
              &copy; {new Date().getFullYear()} Pan_Okurka
            </h3>
            <p className="text-xs text-gray-500 mt-2 flex items-center justify-center gap-1">
              <Icon icon="oui:branch" width={14} height={14} />
              v4.0.0
            </p>
          </div>
          <div
            className={`mt-3 text-center transition-all duration-200 ${
              !open ? 'block' : 'hidden'
            }`}
          >
            <div className="w-1.5 h-1.5 bg-[#10b981] rounded-full mx-auto"></div>
          </div>
        </div>
      </div>
    </aside>
  );
};