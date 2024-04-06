import React from 'react';

const Contact = () => {
    return (
        <div className="flex justify-center my-5 h-full sm:h-[70vh] items-center" id='contact'>
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className='p-6 mr-2 bg-gray-800 rounded-xl flex flex-col justify-around'>
                        <h1 className="text-4xl sm:text-5xl text-white">
                            Contact<span>Me</span>
                        </h1>
                        <p className="text-lg font-medium text-gray-400 mt-2">
                            Let's connect on LinkedIn <br /> or send me an Email
                        </p>
                        <div className="flex items-center mt-2 text-gray-400 ">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-6 h-6">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M22 12h-20m12 -3l8 6l-8 6"></path>
                            </svg>
                            <div className="ml-4 text-sm">
                                <p>Vatan Malik</p>
                            </div>
                        </div>
                    </div>
                    <form action="https://getform.io/f/raeqllma" method="post" className="p-6 flex flex-col justify-center max-w-[700px] text-gray-400">
                        <div className="flex flex-col text-gray-400">
                            <input type='text' name='name' id='name' placeholder='Full Name' className="w-full mt-2 py-3 px-4 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-color focus:border-transparent" />
                        </div>
                        <div className="flex flex-col mt-4 text-gray-400">
                            <input type='email' name='email' id='email' placeholder='Email' className="w-full mt-2 py-3 px-4 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-color focus:border-transparent" />
                        </div>
                        <div className="flex flex-col mt-4 text-gray-400">
                            <textarea name='message' id='message' placeholder='Your Message' className="w-full mt-2 py-3 px-4 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-color focus:border-transparent"></textarea>
                        </div>
                        <button type='submit' className="w-full md:w-32 bg-primary-color text-white py-3 px-6 rounded-lg mt-3">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
