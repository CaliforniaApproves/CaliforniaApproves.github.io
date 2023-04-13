/* ****** CAA Imports ****** */
// UI
import { NavButton } from './common/buttons';
import Link from './common/links';

// Logic

/* ****** Other Imports ****** */
// UI
import { Popover, Transition } from '@headlessui/react'

// Logic
import React, { Fragment } from 'react'
import update from 'immutability-helper';

/* ****** Assets ****** */

/* ****** Constants ****** */
// Imported
import {
     Bars3Icon
    , QuestionMarkCircleIcon
    , PlayIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { ReactComponent as Logo } from '../assets/icons/California-Approves-Logo-RGB-OL.svg';

type MenuDropDown = {
    name: string;
    description: string;
    href: string;
    icon: any;
}
// Generated
const education: MenuDropDown[] = [
    {
        name: 'What is Approval Voting'
        , description: 'An overview of approval voting'
        , href: '#'
        , icon: QuestionMarkCircleIcon
    }
]
  const callsToAction = [
    { name: 'Watch Intro', href: '#', icon: PlayIcon }
  ,] 
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

// create a component
const Header = () => {
    return (
        <Popover className="bg-white sticky top-0 z-30">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                    <a href="#">
                        <span className="sr-only">CA Approves</span>
                        <Logo className='w-40'/>
                    </a>
                </div>
                <div className="-my-2 -mr-2 md:hidden">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                </div>

                <Link to='#' color="green"><h5>About</h5></Link>
                <Link to='#' color="green"><h5>Articles</h5></Link>
                <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                    <Popover className="relative">
                    {({ open }) => (
                        <>
                        <Popover.Button
                            className={classNames(
                            open ? 'text-gray-900' : 'text-gray-500',
                            'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                            )}
                        >
                            <h5 className='text-green'>Approval 101</h5>
                            <ChevronDownIcon
                            className={classNames(
                                open ? 'text-gray-600' : 'text-gray-400',
                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                            )}
                            aria-hidden="true"
                            />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {education.map((item) => (
                                    <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                    >
                                    <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                                    <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900">{item.name}</p>
                                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                    </div>
                                    </a>
                                ))}
                                </div>
                                <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                {callsToAction.map((item) => (
                                    <div key={item.name} className="flow-root">
                                    <a
                                        href={item.href}
                                        className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                                    >
                                        <item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        <span className="ml-3">{item.name}</span>
                                    </a>
                                    </div>
                                ))}
                                </div>
                            </div>
                            </Popover.Panel>
                        </Transition>
                        </>
                    )}
                    </Popover>

                    <Link to='#' color="green"><h5>Contact</h5></Link>
                </Popover.Group>
                <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                    <NavButton
                        variant='solid'
                        color='orange'
                        link='#'
                    >
                        Join Us
                    </NavButton>
                    <NavButton
                        variant='solid'
                        color='purple'
                        link='#'
                        className='ml-4'
                    >
                        Donate
                    </NavButton>
                </div>
                </div>
            </div>
        </Popover>
    );
}

//make this component available to the app
export default Header;
