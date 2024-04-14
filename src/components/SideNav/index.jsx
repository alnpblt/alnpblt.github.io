'use client'

import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger, faLinkedin, faTelegram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from 'react';
export default function SideNav() {
  let [activeSection, setActiveSection] = useState('intro')

  useEffect(() => {

    let home = document.getElementById('intro');
    let about = document.getElementById('about');
    let projects = document.getElementById('projects');
    let skills = document.getElementById('skills');
    let experience = document.getElementById('experience');

    let sections = [home, about, projects, skills, experience]

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    };


    const observer = new IntersectionObserver(entries => {
  
      entries.forEach(entry => {
          if(entry.isIntersecting){
              if (entry.target.id === 'intro'){
                setActiveSection('intro')
              }else if (entry.target.id === 'about'){
                setActiveSection('about')
              } else if (entry.target.id === 'projects'){
                setActiveSection('projects')
              } else if (entry.target.id === 'skills'){
                setActiveSection('skills')
              } else if (entry.target.id === 'experience'){
                setActiveSection('experience')
              }
          }
      })
  }, observerOptions)
  
  sections?.forEach(section => {
    section && observer.observe(section)
  })
  }, [])
  return (
    <nav className={'bg-background hidden lg:block max-h-screen min-w-96 sticky top-0'}>
      <div className='relative top-1/3'>
        <ul className='uppercase text-light font-semibold text-2xl py-3 mx-3'>
          <li className={`hover:cursor-pointer hover:text-primary mb-3 ${activeSection === 'intro' ? 'text-primary' : 'text-light'}`}>
            <Link href="#intro">Home</Link> 
          </li>
          <li className={`hover:cursor-pointer hover:text-primary mb-3 ${activeSection === 'about' ? 'text-primary' : 'text-light'}`}>
            <Link href="#about">About Me</Link> 
          </li>
          <li className={`hover:cursor-pointer hover:text-primary mb-3 ${activeSection === 'skills' ? 'text-primary' : 'text-light'}`}>
            <Link href="#skills">Skills</Link> 
          
          </li>
          <li className={`hover:cursor-pointer hover:text-primary mb-3 ${activeSection === 'experience' ? 'text-primary' : 'text-light'}`}>
            <Link href="#experience">Experience</Link> 
          </li>
          <li className={`hover:cursor-pointer hover:text-primary mb-3 ${activeSection === 'projects' ? 'text-primary' : 'text-light'}`}>
            <Link href="#projects">Projects</Link> 
          </li>
        </ul>
        <div className='flex flex-row justify-start mt-5'>
          <a href="https://m.me/allen.poblete.1" target='_blank'>
            <FontAwesomeIcon
              className='text-light-2/80 hover:text-light text-2xl mx-3'
              icon={faFacebookMessenger}
            />
          </a>
          <a href="https://linkedin.com/in/allenpoblete" target='_blank'>

            <FontAwesomeIcon
              className='text-light-2/80 hover:text-light text-2xl mx-3'
              icon={faLinkedin}
            />
          </a>
          <a href="https://t.me/allenpoblete" target='_blank'>

            <FontAwesomeIcon
              className='text-light-2/80 hover:text-light text-2xl mx-3'
              icon={faTelegram}
            />
          </a>
          <a href="https://github.com/alnpblt" target='_blank'>

            <FontAwesomeIcon
              className='text-light-2/80 hover:text-light text-2xl mx-3'
              icon={faGithub}
            />
          </a>
        </div>
      </div>
      
      
    </nav>
  );
}