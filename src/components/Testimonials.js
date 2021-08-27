import React from 'react';
import { TerminalIcon, UserIcon } from '@heroicons/react/solid';
import {testimonials} from './data';

export default function Testimonials(){
    return(
        <section id="testimonials">
            <div className="container px-5 py-10 mx-auto text-center">
                <UserIcon  className="w-10 inline-block mb-4"/>
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-12 text-white ">
                   Testimonianze dei clienti
                </h1>
                <div className="flex flex-wrap m-4">
                    {testimonials.map((testimonial) => (
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="bg-gray-800 h-full bg-opacity-40 rounded p-8">
                                <TerminalIcon className="block w-8 text-gray-500 mb-4"/>
                                <p className="leading-relased mb-6">{testimonial.quote}</p>
                                <div className="inline-flex items-center">
                                    <img  
                                        alt="testimanials"
                                        src={testimonial.image}
                                        className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                                        />
                                    <span className="flex flex-frow pl-4 flex-col">
                                       <span className="title-font font-medium text-white">
                                           {testimonial.name}
                                       </span>
                                       <span className="text-gray-500 text-sm uppercase">
                                           {testimonial.company}
                                       </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}