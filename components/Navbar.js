import Link from 'next/link';
import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';

export const Navbar = ({ open, onToggle }) => {
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
      className={`fixed inset-x-0 bottom-0 z-30 h-[calc(4rem+env(safe-area-inset-bottom))] border-t border-[#10b981]/20 bg-[#1a1a1e] pb-[env(safe-area-inset-bottom)] md:inset-y-0 md:right-auto md:h-screen md:border-t-0 md:border-r md:bg-linear-to-b md:from-[#1a1a1e] md:to-[#27272a] md:pb-0 md:transition-[width] md:duration-300 motion-reduce:transition-none ${
        open ? 'md:w-64' : 'md:w-20'
      }`}
      aria-label="Sidebar"
    >
      <div className="flex h-full flex-row items-center justify-between px-2 md:flex-col md:items-stretch md:justify-start md:overflow-y-auto md:px-3 md:py-4">
        {/* Toggle Button */}
        <button
          onClick={onToggle}
          className="mb-4 hidden self-end rounded-lg p-2 text-[#10b981] transition-all duration-200 hover:bg-[#10b981]/20 md:flex"
          aria-label="Toggle sidebar"
          aria-expanded={open}
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
          aria-label="Home - Tomáš K."
          className={`mb-8 hidden items-center gap-3 rounded-lg border border-transparent transition-all duration-200 hover:border-[#10b981]/30 hover:bg-[#10b981]/10 hover:no-underline md:flex ${
            open ? 'p-2' : 'p-1 justify-center'
          }`}
        >
          <img
            className="h-10 w-10 shrink-0 rounded-full border-2 border-[#10b981]/50 object-cover"
            alt=""
            src="/images/panokurka.jpeg"
          />
          {open ? (
            <span className="whitespace-nowrap text-lg font-bold text-white">Tomáš K.</span>
          ) : null}
        </Link>

        {/* Navigation Links */}
        <nav className="h-full flex-1 md:h-auto" aria-label="Main navigation">
          <ul className="grid h-full grid-cols-4 items-center gap-1 md:h-auto md:flex md:flex-col md:items-stretch md:space-y-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href} className="h-full min-w-0 py-1 md:h-auto md:py-0">
                  <Link
                    href={link.href}
                    aria-label={link.label}
                    aria-current={active ? 'page' : undefined}
                    className={`group flex h-full w-full flex-col items-center justify-center gap-1 rounded-lg px-1 py-2 text-center transition-colors duration-200 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10b981] md:h-auto md:flex-row md:gap-4 md:p-3 ${
                      open ? 'md:justify-start' : 'md:justify-center'
                    } ${
                      active
                        ? 'border border-[#10b981]/50 bg-[#10b981]/20 text-[#10b981]'
                        : 'border border-transparent text-gray-400 hover:border-[#10b981]/30 hover:bg-[#10b981]/10 hover:text-white'
                    }`}
                  >
                    <Icon
                      icon={link.icon}
                      width={24}
                      height={24}
                      className={`shrink-0 transition-colors md:h-6 md:w-6 ${
                        active ? 'text-[#10b981]' : 'group-hover:text-[#34d399]'
                      }`}
                    />
                    <span className={`whitespace-nowrap text-[11px] font-medium leading-none md:text-sm ${!open ? 'md:hidden' : ''}`}>
                      {link.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className={`mt-auto hidden border-t border-[#10b981]/20 pt-4 md:block ${!open ? 'text-center' : ''}`}>
          {open ? (
            <div className="text-center">
              <h3 className="text-xs font-semibold text-gray-400">
                &copy; {new Date().getFullYear()} Pan_Okurka
              </h3>
              <p className="mt-2 flex items-center justify-center gap-1 text-xs text-gray-500">
                <Icon icon="oui:branch" width={14} height={14} />
                v4.0.0
              </p>
            </div>
          ) : (
            <div className="mx-auto mt-3 h-1.5 w-1.5 rounded-full bg-[#10b981]" />
          )}
        </div>
      </div>
    </aside>
  );
};