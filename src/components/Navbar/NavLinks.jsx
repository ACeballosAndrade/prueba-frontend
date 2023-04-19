import React, { useState } from 'react'
import {FiChevronDown, FiChevronUp} from 'react-icons/fi'
import { Link } from 'react-router-dom';

const NavLinks = () => {

  const [heading, setHeading] = useState("")

  const links = [
    {name: 'HOME', submenu:true, sublinks:[
      {name:"Opción 1", link: "/"},
      {name:"Opción 2", link: "/"},
      {name:"Opción 3", link: "/"},
    ]},
    {name: 'PAGES', submenu:true, sublinks:[
      {name:"Opción 1", link: "/"},
      {name:"Opción 2", link: "/"},
      {name:"Opción 3", link: "/"},
    ]},
    {name: 'BLOGS', submenu:true, sublinks:[
      {name:"Opción 1", link: "/"},
      {name:"Opción 2", link: "/"},
      {name:"Opción 3", link: "/"},
    ]},
    {name: 'PORTFOLIO', submenu:true, sublinks:[
      {name:"Opción 1", link: "/"},
      {name:"Opción 2", link: "/"},
      {name:"Opción 3", link: "/"},
    ]},
    {name: 'ELEMENT', submenu:true, sublinks:[
      {name:"Opción 1", link: "/"},
      {name:"Opción 2", link: "/"},
      {name:"Opción 3", link: "/"},
    ]},
    {name: 'DEMO', submenu:true, sublinks:[
      {name:"Opción 1", link: "/"},
      {name:"Opción 2", link: "/"},
      {name:"Opción 3", link: "/"},
    ]},
  ];
  return <>
    {
      links.map(link=>(
        <div>
          <div className='px-3 text-left md:cursor-pointer group'>
            <div className='flex flex-row items-center hover:text-primary'>
              <h1 className='py-4 flex justify-between items-center md:pr-0 pr-5 group' onClick={()=> heading !== link.name ? setHeading(link.name) : setHeading('')}>
                {link.name}
                <span className='text-xl md:hidden inline'>
                  {heading === link.name ? <FiChevronUp/> : <FiChevronDown/>}
                </span>
                <span className='text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2'>
                  <FiChevronDown/> 
                </span>
              </h1>
            </div>
            {link.submenu && (
            <div>
                <div className='absolute top-20 hidden group-hover:md:block hover:md:block'>
                  <div className='bg-white p-3'>
                    {link.sublinks.map((sblnk)=>(
                      <li className='text-sm text-gray-600 my-2.5'>
                        <Link className='hover:text-primary' to={sblnk.link}>{sblnk.name}</Link>                        
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/**Mobile menus */}
          <div className={`
            ${heading === link.name ? 'md:hidden' : 'hidden'}
          `}>
            {
              link.sublinks.map((slinks)=>(
                <div>
                  <div>
                    <li className='py-3 pl-14  hover:bg-primary hover:text-white'>
                      <Link to={slinks.link}>{slinks.name}</Link>
                    </li>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      ))
    }
    
  </>
  
}

export default NavLinks