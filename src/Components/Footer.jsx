import React from 'react'
import {
    FaDribbbleSquare, 
    FaFacebookSquare, 
    FaGithubSquare, 
    FaInstagram, 
    FaTwitterSquare,} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
            <p className='py-4'>Lorem ipsum, dolor sit amet consectetur
                 adipisicing elit. Saepe dolore ad eaque,
                  aspernatur omnis aliquid et nam iste 
                  cumque obcaecati numquam veritatis alias 
                  voluptatum iusto soluta doloremque maxime, 
                  sequi pariatur?</p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <FaDribbbleSquare size={30} />
                <FaFacebookSquare size={30} />
                <FaGithubSquare size={30} />
                <FaInstagram size={30} />
                <FaTwitterSquare size={30} />
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li>Analytics</li>
                    <li>Marketing</li>
                    <li>Commerce</li>
                    <li>Insights</li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Support</h6>
                <ul>
                    <li>Pricing</li>
                    <li>Documentation</li>
                    <li>Guides</li>
                    <li>API Status</li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Jobs</li>
                    <li>Press</li>
                    <li>Career</li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li>Claim</li>
                    <li>Policy</li>
                    <li>Terms</li>
                    <li>Insights</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer