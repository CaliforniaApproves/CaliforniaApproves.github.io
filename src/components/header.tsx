/* ****** CAA Imports ****** */
// UI
import { NavButton } from './common/buttons';
import Link from './common/links';

// Logic

/* ****** Other Imports ****** */
// UI
import { Popover, Transition } from '@headlessui/react'

// Logic
import React, { Fragment, useState } from 'react'
import update from 'immutability-helper';
import classnames from 'classnames';

/* ****** Assets ****** */

/* ****** Constants ****** */
// Imported
import {
     QuestionMarkCircleIcon
    , PlayIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, Bars3Icon } from '@heroicons/react/20/solid'
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
        , href: '/approval-101'
        , icon: QuestionMarkCircleIcon
    }
]
  const callsToAction = [
    { name: 'Watch Intro', href: 'https://www.youtube.com/watch?v=m8VXIIaC9Zw', icon: PlayIcon }
  ]
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

// create a component
const Header = () => {
    const [burgerOpen, setBurgerOpen] = useState(false);
    return (
        <Popover className="bg-white lg:sticky top-0 z-30">
            <div className="mx-auto max-w-7xl">
                <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start items-center lg:flex-1">
                        <a href="/" className='m-4'>
                            <span className="sr-only">CA Approves</span>
                            <Logo className='w-56'/>
                        </a>
                        <Link to='/about' color="green" className='mx-4 hidden lg:block'><h5>ABOUT</h5></Link>
                        {/* <Link to='/articles' color="green" className='mx-4 hidden lg:block'><h5>ARTICLES</h5></Link> */}
                        <Popover.Group as="nav" className="hidden space-x-10 lg:flex mx-4">
                            <Popover className="relative">
                                {({ open }) => (
                                    <>
                                        <Popover.Button
                                            className={classNames(
                                            open ? 'text-gray-900' : 'text-gray-500',
                                            'group inline-flex items-center rounded-md bg-white font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple focus:ring-offset-2'
                                            )}
                                        >
                                            <h5 className='text-green hover:text-green-high whitespace-nowrap'>APPROVAL 101</h5>
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
                                                        <item.icon className="h-6 w-6 flex-shrink-0 text-purple" aria-hidden="true" />
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
                                                                <item.icon className="h-6 w-6 flex-shrink-0 text-purple" aria-hidden="true" />
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
                        </Popover.Group>
                        <Link to='https://californiaapproves.creator-spring.com/' target="_blank" color="green" className='mx-4 hidden lg:block'><h5>MERCH</h5></Link>
                    </div>
                    <div className="hidden items-center justify-end lg:flex lg:flex-1 ">
                        <NavButton
                            variant='solid'
                            color='orange'
                            link='/contact'
                        >
                            Join Us
                        </NavButton>
                        <NavButton
                            variant='solid'
                            color='purple'
                            link='/donate'
                            className='ml-4'
                        >
                            Donate
                        </NavButton>
                    </div>
                    <Popover.Group as="nav" className="space-x-10 flex mx-4">
                        <Popover className="">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                        open ? 'text-gray-900' : 'text-gray-500',
                                        'group inline-flex items-center rounded-md bg-white font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple focus:ring-offset-2'
                                        )}
                                    >
                                        <Bars3Icon
                                            className={classnames(
                                                'lg:hidden text-purple hover:text-purple-high w-16 m-4'
                                            )}
                                            onClick={() => setBurgerOpen(!burgerOpen)}
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
                                        <Popover.Panel className="absolute left-0 z-10  mt-3 w-full transform px-2 sm:px-0">
                                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 text-white">
                                                <div className="relative w-full grid gap-6 bg-purple px-5 py-6 sm:gap-8 sm:p-8">
                                                    <Link to='/about' color="white" className='mx-4'><h2>About</h2></Link>
                                                    {/* <Link to='/articles' color="white" className='mx-4'><h2>Articles</h2></Link> */}
                                                    <h2 className='mx-4 flex flex-row items-center'>
                                                        Approval 101
                                                        <ChevronDownIcon
                                                            className="text-tan w-8 my-auto"
                                                            aria-hidden="true"
                                                        />
                                                    </h2>
                                                    <Link to='/approval-101' color="white" className='mx-4 text-base'><h4>What is approval voting?</h4></Link>
                                                    <Link to='https://californiaapproves.creator-spring.com/' target="_blank" color="white" className='mx-4 text-base'><h2>MERCH</h2></Link>
                                                </div>

                                                <div className="bg-purple px-5 py-5 flex flex-row space-y-0 sm:px-8">
                                                    <NavButton
                                                        variant='solid'
                                                        color='orange'
                                                        link='/contact'
                                                    >
                                                        Join Us
                                                    </NavButton>
                                                    <NavButton
                                                        variant='outlined'
                                                        color='orange'
                                                        link='/donate'
                                                        className='ml-4 text-white'
                                                    >
                                                        Donate
                                                    </NavButton>
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                    </Popover.Group>

                </div>
            </div>
        </Popover>
    );
}

//make this component available to the app
export default Header;
