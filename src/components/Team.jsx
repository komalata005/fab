import { Fragment, useEffect, useId, useRef, useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useDebouncedCallback } from 'use-debounce'

import { AppScreen } from '@/components/AppScreen'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'

const people = [
  {
    name: 'Faiza',
    role: 'Project Manager/Senior Fullstack Developer',
    imageUrl:
      'https://media.licdn.com/dms/image/D4D03AQFyy2QA8gWIjQ/profile-displayphoto-shrink_800_800/0/1685466826234?e=1694044800&v=beta&t=sVqNV4xaShidbAy7KTpuYka0p1WVV1lSQqHR7unz3kQ',
    bio: 'Managing project timelines, budgets, and resources, coordinating with stakeholders, overseeing project delivery, and contributing as a senior fullstack developer.',
    // twitterUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/faiza-aziz-khan-76912092/',
  },
  {
    name: 'Adnan Ata',
    role: 'Quality Assurance Engineer',
    imageUrl:
      'https://media.licdn.com/dms/image/C4D03AQGRnwj9VFWzGg/profile-displayphoto-shrink_800_800/0/1517052269313?e=1694044800&v=beta&t=YiqvXNVDbfhdQml93ug8vY4Fm8HnD0TBgL5TPb9RC04',
    bio: 'Conducting testing activities, creating test plans and test cases, executing manual and automated tests, identifying and reporting bugs, ensuring the quality and reliability of the software.',
    // twitterUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/muhammad-adnan-613a7123/',
  },
  {
    name: 'sadaf',
    role: 'Solution Architect/Tech Lead',
    imageUrl:
    'https://lh3.google.com/u/0/d/1JtDa1YWOFqm1bsbvC4Q0iQyZWITvLAbk=w2782-h1354-iv1',
    bio: 'Designing and implementing technical solutions, providing architectural guidance, leading the development team, ensuring technical excellence, and driving the overall solution delivery..',
    // twitterUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/sadafsiddiquii/ ',
  },
  {
    name: 'Komal',
    role: 'Frontend Developer',
    imageUrl:
      'https://media.licdn.com/dms/image/D4D03AQH589SHOKd49Q/profile-displayphoto-shrink_800_800/0/1687704890665?e=1694044800&v=beta&t=Bh9FyOM7vM45LeWjGWRKOTMtAy8UdR7GwCvdESiFYqk',
    bio: 'Developing user-facing interfaces, implementing UI/UX designs, ensuring responsiveness and cross-browser compatibility, and collaborating with the backend team to integrate frontend components..',
    // twitterUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/komal-ata/',
  },
  {
    name: 'Tooba',
    role: 'Backend Developer',
    imageUrl:
      'https://i.etsystatic.com/43931970/r/il/199a55/5020316406/il_fullxfull.5020316406_9nah.jpg',
    bio: 'Developing server-side logic, designing and implementing APIs, managing databases, optimizing performance and scalability, and collaborating with the frontend team for seamless integration..',
    // twitterUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/tooba-fazal/ ',
  },
  // More people...
]

export function Team() {
  return (
    <div id="team">
  <div className="py-24 bg-white md:py-32 lg:py-40">
      <div className="grid grid-cols-1 px-6 mx-auto max-w-7xl gap-x-8 gap-y-20 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="grid max-w-2xl grid-cols-1 mx-auto gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{person.name}</h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
              <ul role="list" className="flex mt-6 gap-x-6">
                {/* <li>
                  <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li> */}
                <li>
                  <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  )
}
