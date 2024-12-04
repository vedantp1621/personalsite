import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

import logo from './Assets/logo.jpeg'

const navigation = [
  { name: 'About Me', href: 'aboutme', current: false },
  { name: 'Accolades', href: 'accolades', current: false },
  { name: 'This Build', href: 'thisbuild', current: false },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-[#36454F]">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
               
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden p4-3 h-20 w-auto"
                    src={logo}
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block py-3 h-20 w-auto"
                    src={logo}
                    alt="Workflow"
                  />
                </div>

              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
