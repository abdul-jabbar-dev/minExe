import React from 'react';
const people = [

    {
        mentor: 'Sumit Saha',
        title: 'Introduction to Database',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbgDYIdVVoA2_x1I2_44eNoao-t7fkbZYtBw&usqp=CAU',
        date: '01/11/2022',
        duration: '08Hours',
        price: '4000'
    }, {
        mentor: 'S.M. Nayem',
        title: 'Google -  এর মার্কেটিং টুলগুলোর ব্যবহার শিখুন',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjwEcKsiks6o93DUI1no4yX7u4xTf8TjTioA&usqp=CAU',
        date: '21/07/2022',
        duration: '05Hours',
        price: '7000'
    },
    {
        mentor: 'Sumit Saha',
        title: 'Facebook Marketing Tools (Organic)',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-1bpoRNzcu_1CE98nuwjOpymqsudosym2rA&usqp=CAU',
        date: '19/04/2022',
        duration: '06Hours',
        price: '5000'
    },
    {
        mentor: 'J.Mahbub',
        title: 'iOS App Development with SWIFT',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMcOht7G4fh3vv5f-nB4mKp-sH1ABFX1NhOA&usqp=CAU',
        date: '15/06/2022',
        duration: '15Hours',
        price: '15000'
    }
]
const ReportetList = () => {
    return (
        <>

            <table border="1px table-fixed">
                <caption className=' sticky top-0 text-left pl-5' style={{ fontSize: '18px', fontWeight: 'bold', color: '#717171' }}>আসন্ন কোর্স</caption>
                <thead className="bg-gray-50 sticky top-0">
                    <tr className='odd:bg-white even:bg-slate-100'>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            course title
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Uploding date
                        </th>

                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Duration
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Price
                        </th>


                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {people.map((course) => (
                        <tr className='odd:bg-white even:bg-slate-100' key={course.title}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        <img className="h-10 w-10 rounded-full" src={course.image} alt="" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm text-black-900">{course.title}</p>
                                        <div className="text-sm font-medium text-gray-900"><p className="text-sm font-small inline text-gray-500">By:</p> {course.mentor}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap w-25" >
                                <p className="text-sm text-gray-600 ">{course.date}</p>
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap w-25" >
                                <div className="text-sm font-medium text-gray-500">{course.duration}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap w-25" >
                                <div className="text-sm font-medium text-gray-500">{course.price}&#2547;</div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    );
};

export default ReportetList;