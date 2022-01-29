import React from 'react';

const TeachersProfile = () => {

    const person = [
        {
            name: 'Andres Berlin',
            work: 'Chief Executive Officer',
            discription: `The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.`,
            image: "https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
        },
        {
            name: 'Andres Berlin',
            work: 'Chief Executive Officer',
            discription: `The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.`,
            image: "https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
        },
        {
            name: 'Andres Berlin',
            work: 'Chief Executive Officer',
            discription: `The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.`,
            image: "https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
        },
        {
            name: 'Andres Berlin',
            work: 'Chief Executive Officer',
            discription: `The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.`,
            image: "https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
        },
        {
            name: 'Andres Berlin',
            work: 'Chief Executive Officer',
            discription: `The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.`,
            image: "https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
        },
        {
            name: 'Andres Berlin',
            work: 'Chief Executive Officer',
            discription: `The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.`,
            image: "https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
        },
    ]


    return (
        <div classNameName='container mx-auto related'>
            <div className="mx-auto container py-8">
                <div className="flex flex-wrap items-center lg:justify-between justify-center">
                    {
                        person.map(mentor =>
                            <div tabindex="0" className="focus:outline-none mx-2 w-1/3 lg:w-1/5 xl:mb-0 mb-8">
                                <div>
                                    <img alt="person capturing an image" src={mentor.image} tabindex="0" className="focus:outline-none rounded-full object-cover  w-full shadow-md" />
                                </div>
                                <div className="bg-white">
                                    <div className="flex items-center justify-between px-4 pt-4">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" tabindex="0" className="focus:outline-none" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                                            </svg>
                                        </div>
                                        <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                            <p tabindex="0" className="focus:outline-none text-xs text-yellow-700">Featured</p>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center">
                                            <h2 tabindex="0" className="focus:outline-none text-lg font-semibold">{mentor.name}</h2>
                                            <p tabindex="0" className="focus:outline-none text-xs text-gray-600 pl-5">4 days ago</p>
                                        </div>
                                        <p tabindex="0" className="focus:outline-none text-xs text-gray-600 mt-2">{mentor.discription}</p>
                                        <div className="flex mt-4">
                                            <div>
                                                <p tabindex="0" className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">12 months warranty</p>
                                            </div>
                                            <div className="pl-2">
                                                <p tabindex="0" className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete box</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between py-4">
                                            <h2 tabindex="0" className="focus:outline-none text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                                            <h3 tabindex="0" className="focus:outline-none text-indigo-700 text-xl font-semibold">View Profile</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default TeachersProfile;