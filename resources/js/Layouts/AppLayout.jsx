import { useState } from 'react';
import NavLink from '@/Components/NavLink';
import { Link } from '@inertiajs/react';

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Authenticated({ header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-full bg-gray-100">
            <Disclosure as="nav" className="bg-white shadow">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="flex h-16 justify-between">
                                <div className="flex">
                                    <div className="flex">
                                        <a href="/"
                                           className="flex items-center font-black bg-sky-600 px-3 text-right text-gray-50 -mb-2 shadow">
                                            Laravel<br />React
                                        </a>
                                    </div>
                                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                        <NavLink href={route('dashboard.index')} active={route().current('dashboard.index')}>
                                            Dashboard
                                        </NavLink>
                                        <NavLink href={route('projects.index')} active={route().current('projects.index')}>
                                            Projects
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                                    <Menu as="div" className="relative ml-3">
                                        <div>
                                            <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
                                                <span className="sr-only">Open user menu</span>

                                                <span className="inline-block h-7 w-7 overflow-hidden rounded-full bg-gray-100">
                                                  <svg className="h-full w-full text-gray-300" fill="currentColor"
                                                       viewBox="0 0 24 24">
                                                    <path
                                                        d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
                                                  </svg>
                                                </span>
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            href={route('profile.edit')}
                                                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'
                                                        >
                                                            Profile
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            href={route('logout')}
                                                            as="button"
                                                            method="POST"
                                                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 w-full text-left'
                                                        >
                                                            Sign Out
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                                <div className="-mr-2 flex items-center sm:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 pb-3 pt-2">
                                <Link
                                    href={route('dashboard.index')}
                                    className={
                                        'block border-l-4 py-2 pl-3 pr-4 text-base font-medium ' +
                                        (route().current('dashboard.index')
                                            ? "bg-sky-50 border-sky-500 text-sky-700"
                                            : "border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                                        )
                                    }
                                >
                                    Dashboard
                                </Link>
                                <Link
                                    href={route('projects.index')}
                                    className={
                                        'block border-l-4 py-2 pl-3 pr-4 text-base font-medium ' +
                                        (route().current('projects.index')
                                                ? "bg-sky-50 border-sky-500 text-sky-700"
                                                : "border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                                        )
                                    }
                                >
                                    Projects
                                </Link>
                            </div>
                            <div className="border-t border-gray-200 pb-3 pt-4">
                                <div className="space-y-1">
                                    <Link
                                        href={route('profile.edit')}
                                        className="block border-l-4 py-2 pl-3 pr-4 text-base font-medium border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                                    >
                                        Profile
                                    </Link>

                                    <Link
                                        href={route('logout')}
                                        method="POST"
                                        as="button"
                                        className="block w-full text-left border-l-4 py-2 pl-3 pr-4 text-base font-medium border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                                    >
                                        Sign Out
                                    </Link>
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 px-3">
                    {children}
                </div>
            </main>
        </div>
    );
}
