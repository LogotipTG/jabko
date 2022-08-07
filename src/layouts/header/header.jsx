import React from 'react'
import './header.sass'
import {SearchIcon, ShoppingCartIcon} from '@heroicons/react/outline'

const list = [
  {
    id: 0,
    title: 'iPhone',
    subList: [
      {
        title:'iPhone 13',
        newStatus: true
      },
      {
        title:'iPhone 13 Mini',
        newStatus: true
      },
      {
        title:'iPhone 13 Pro',
        newStatus: true
      },
      {
        title:'iPhone 13 Pro Max',
        newStatus: true
      },
      {
        title:'iPhone 12',
        newStatus: true
      },
      {
        title:'iPhone 12 Mini',
        newStatus: true
      },
      {
        title:'iPhone 12 Pro',
        newStatus: true
      },
      {
        title:'iPhone 12 Pro Max',
        newStatus: true
      },
      {
        title:'iPhone SE',
        newStatus: true
      },
      {
        title:'iPhone 11',
        newStatus: true
      },
      {
        title:'iPhone XR',
        newStatus: true
      },
    ]
  },
  {
    id: 1,
    title: 'iPad',
    subList: [
      {
        title:'Apple iPad',
        newStatus: true
      },
      {
        title:'Apple iPad Air',
        newStatus: true
      },
      {
        title:'Apple iPad Pro',
        newStatus: true
      },
      {
        title:'Apple iPad Mini',
        newStatus: true
      },
    ]
  },
  {
    id: 2,
    title: 'Mac',
    subList: [
      {
        title:'MacBook Pro',
        newStatus: true
      },
      {
        title:'MacBook Air',
        newStatus: false
      },
      {
        title:'Mac mini',
        newStatus: false
      },
      {
        title:'iMac',
        newStatus: true
      },
      {
        title:'Apple Mac Studio',
        newStatus: true
      },
    ]
  },
  {
    id: 3,
    title: 'Apple Watch',
    subList: [
      {
        title:'Apple Watch Siries 7',
        newStatus: true
      },
      {
        title:'Apple Watch SE',
        newStatus: false
      },
      {
        title:'Apple Watch Siries 6',
        newStatus: false
      },
      {
        title:'Apple Watch Siries 3',
        newStatus: false
      }
    ]
  },
  {
    id: 3,
    title: 'Apple AirPods',
    subList: [
      {
        title:'AirPods 2',
        newStatus: false
      },
      {
        title:'AirPods 3',
        newStatus: false
      },
      {
        title:'AirPods Pro',
        newStatus: false
      },
      {
        title:'AirPods Max',
        newStatus: true
      }
    ]
  },
  
]

const Header = () => {
  return (
    <>
      <div className='bg-[#0f0f0f] h-[60px] text-[#888888] cursor-default'>
        <div className='w-[1400px] h-full flex items-center mx-auto space-x-1'>
          <img className='h-[30px] hover:scale-90 duration-200 mr-3' src="https://jabko.ua/image/catalog/123/logow.png" alt="Jabko.ua" />
          
          {/* TODO component */}
          {list.map((props) => {
            return(
              <div className='px-[20px] h-full flex items-center font-semibold relative group hover:bg-[#000000] duration-200'>
              <span className='group-hover:text-white duration-200'>{props.title}</span>

              <ul className='w-[250px] absolute px-[20px] py-[10px] left-0 top-[60px] scale-0 group-hover:scale-100 bg-[#333]'>
                {props.subList.map((deviceList) => {
                  return(
                  <li className='py-1 hover:text-white duration-200'>{deviceList.title}
                    {deviceList.newStatus && <span className='text-red-500 px-[10px] text-sm'>new</span>}
                  </li>)
                })}
              </ul>
            </div>
            )
          })}

          <div className=' border-l-[1px] h-full flex items-center'>
            <div className='px-[20px] h-full flex items-center font-semibold relative group hover:bg-[#000000] duration-200'>
              <span className='group-hover:text-white duration-200'>Apple Б/У</span>
                <ul className='w-[200px] absolute px-[20px] py-[10px] left-0 top-[60px] scale-0 group-hover:scale-100 bg-[#000]'>
                  <li className='py-1 hover:text-white duration-200'>б/у iPhone</li>
                  <li className='py-1 hover:text-white duration-200'>б/у Apple iPad</li>
                  <li className='py-1 hover:text-white duration-200'>б/у Apple Mac</li>
                  <li className='py-1 hover:text-white duration-200'>б/у Apple Watch</li>
                </ul>
            </div>
          </div>
          
          <div className='h-[30px] bg-[#1d1d1d] flex items-center w-[300px] rounded-md relative'>
            <SearchIcon className='w-5 mx-2'/>
            <input className='w-full bg-transparent outline-none' type="text" />
          </div>

          <div className='flex group'>
            <ShoppingCartIcon className='w-5'/>
            <span>Корзина</span>
          </div>

        </div>
      </div>
    </>
  )
}

export default Header