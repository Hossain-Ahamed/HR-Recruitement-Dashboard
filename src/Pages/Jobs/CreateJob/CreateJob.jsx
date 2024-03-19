import React, { useEffect, useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
const Dish_Add = () => {

    const { register, handleSubmit, formState: { errors }, setValue, getValues, reset, control } = useForm();

    const { fields: optionFields, append: optionAppend, remove: optionRemove, } = useFieldArray({
        control,
        name: 'options',
    });
    const { fields: responsibilityFields, append: responsibilityAppend, remove: responsibilityRemove, } = useFieldArray({
        control,
        name: 'reponsibility',
    });



    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const onSubmit = async (data) => {

        const dateTime = new Date(`${data?.date}T${data?.time}:00`)
        dateTime.setUTCHours(dateTime.getUTCHours() + 6);
        const iso = dateTime.toISOString();

        const reqData = {
            "position": data?.position,
            "department": data?.department,
            "requirements": data.options.map(i => i.name),
            "responsibilities": data.reponsibility.map(i => i.name),
            "location": data?.position,
            "salary": data?.salary,
            "jobDescription": data?.jobDescription,
            "timestamp": {
                "posted": new Date().toISOString(),
                "closed": iso,
                "filled": null
            }
        }
        console.log(reqData)

        axiosSecure.post('/post-a-job', reqData)
            .then(res => {
                console.log(res.data);navigate('/')
            }).catch(e => {
                console.error(e);
            })

    };



    return (
        <section className='max-w-7xl mx-auto py-12'>


 <h2 className='text-3xl font-bold text-center py-2'>Post a Job</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 md:grid-cols-2 justify-center items-start px-6 py-5 border border-gray-300 overflow-hidden bg-white rounded-md shadow-dashboard'>

                <div className="w-full  ">
                    <div className=" h-full">


                        <div className="w-full  p-3">
                            <p className="mb-1.5 font-medium text-base text-gray-800" data-config-id="auto-txt-3-3">Position</p>
                            <input className="w-full px-4 py-2.5 text-base text-gray-900 font-normal outline-none focus:border-green-500 border border-gray-300 rounded-lg shadow-input" type="text" placeholder="ie: Developer"
                                {...register("position", {
                                    required: "*position  is Required",
                                })} />
                            {errors.position?.type === "required" && (<p className='m-0 p-0 pl-1  text-base text-red-500 text-[9px]' role="alert">{errors?.position?.message}</p>)}

                        </div>

                        <div className="w-full  p-3">
                            <p className="mb-1.5 font-medium text-base text-gray-800" data-config-id="auto-txt-3-3">Department</p>
                            <input className="w-full px-4 py-2.5 text-base text-gray-900 font-normal outline-none focus:border-green-500 border border-gray-300 rounded-lg shadow-input" type="text" placeholder="ie: Engineering"
                                {...register("department", {
                                    required: "*department  is Required",
                                })} />
                            {errors.department?.type === "required" && (<p className='m-0 p-0 pl-1  text-base text-red-500 text-[9px]' role="alert">{errors?.department?.message}</p>)}

                        </div>

                        <div className="w-full  p-3">
                            <p className="mb-1.5 font-medium text-base text-gray-800" data-config-id="auto-txt-3-3">Location</p>
                            <input className="w-full px-4 py-2.5 text-base text-gray-900 font-normal outline-none focus:border-green-500 border border-gray-300 rounded-lg shadow-input" type="text" placeholder="Hybrid / Remote / Onsite"
                                {...register("location", {
                                    required: "*location  is Required",
                                })} />
                            {errors.location?.type === "required" && (<p className='m-0 p-0 pl-1  text-base text-red-500 text-[9px]' role="alert">{errors?.location?.message}</p>)}

                        </div>
                        <div className="w-full  p-3">
                            <p className="mb-1.5 font-medium text-base text-gray-800" data-config-id="auto-txt-3-3">Salary</p>
                            <input className="w-full px-4 py-2.5 text-base text-gray-900 font-normal outline-none focus:border-green-500 border border-gray-300 rounded-lg shadow-input" type="text" placeholder="1000 / Negotiable / Non-paid"
                                {...register("salary", {
                                    required: "*salary  is Required",
                                })} />
                            {errors.salary?.type === "required" && (<p className='m-0 p-0 pl-1  text-base text-red-500 text-[9px]' role="alert">{errors?.salary?.message}</p>)}

                        </div>

                    </div>

                    <p className="pl-3 my-1.5 font-medium text-base text-gray-800" data-config-id="auto-txt-3-3">Application closing time</p>
                    <div className='p-3 w-full flex gap-2 items-center'>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="date" {...register("date", { required: true })} id="time" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="time" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="time" {...register("time", { required: true })} id="time" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="time" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Time</label>
                        </div>
                    </div>


                    <div className=''>
                        <div className='flex items-center'>
                            <label htmlFor="shortdescription" className="block my-1 pl-2 text-md font-medium">Job Description</label>
                        </div>
                        <div>
                            <textarea
                                rows="3"
                                id='jobDescription'
                                className="input-area border border-gray-200 block   w-full text-base text-gray-900  rounded-lg mx-auto p-2 pl-4  bg-gray-50 "

                                placeholder="About the role"

                                {...register("jobDescription", {

                                    maxLength: {
                                        value: 10000,
                                        message: "Max length is 10000"
                                    }
                                })} />
                            {errors.jobDescription && <p className='p-1 text-xs text-red-600'>{errors.jobDescription.message}</p>}
                        </div>
                    </div>







                </div>




                <div className='w-full h-full p-3 select-none'>
                    {/* --------------------------------------------------------------------------
          ------------------OPTIONS-----------------------------------------------------
          ------------------------------------------------------------------------------ */}
                    <div className="flex flex-wrap pb-3 border-1 rounded p-2">
                        <div className="p-1 h-full w-full   overflow-hidden bg-white  shadow-dashboard">
                            <p className="mb-1.5 text-[18px] font-semibold text-gray-900 text-coolGray-800" data-config-id="auto-txt-21-3">Requirements</p>
                            {optionFields.map((i, index) => (
                                <div key={index} className="flex flex-wrap p-3 my-1 mb-3 border rounded relative">

                                    {/* */}
                                    <div className="w-full">

                                        <input
                                            {...register(`options[${index}].name`, { required: ' is required' })}
                                            className="w-full px-1.5 py-1.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                                            type="text"
                                            placeholder="Name"
                                        />
                                        {errors.options && errors.options[index]?.name && (
                                            <p className='m-0 p-0 pl-1 text-sm text-red-500 text-[9px]' role="alert">
                                                {errors.options[index].name.message}
                                            </p>
                                        )}
                                    </div>


                                    {/* Remove  Button */}
                                    <div className='w-full flex flex-wrap justify-end items-center gap-2  pt-1'>
                                        <button
                                            type="button"
                                            onClick={() => optionRemove(index)}
                                            className="flex-shrink-0 px-2 py-1 bg-red-600 text-white rounded-md shadow-button"
                                        >
                                            Delete
                                        </button>

                                    </div>

                                </div>
                            ))}

                            {/* add option  */}
                            <div className='w-full flex flex-wrap justify-start items-center gap-2'>
                                <button
                                    type="button"
                                    onClick={() => optionAppend({})}
                                    className="flex-shrink-0 px-2 py-1 bg-root-200 text-white rounded-md shadow-button"
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* responsibility */}
                    <div className="flex flex-wrap pb-3 border-1 rounded p-2">
                        <div className="p-1 h-full w-full   overflow-hidden bg-white  shadow-dashboard">
                            <p className="mb-1.5 text-[18px] font-semibold text-gray-900 text-coolGray-800" data-config-id="auto-txt-21-3">Responsibility</p>
                            {responsibilityFields.map((i, index) => (
                                <div key={index} className="flex flex-wrap p-3 my-1 mb-3 border rounded relative">

                                    {/* */}
                                    <div className="w-full ">

                                        <input
                                            {...register(`reponsibility[${index}].name`, { required: ' is required' })}
                                            className="w-full px-1.5 py-1.5 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input"
                                            type="text"
                                            placeholder="Name"
                                        />
                                        {errors.reponsibility && errors.reponsibility[index]?.name && (
                                            <p className='m-0 p-0 pl-1 text-sm text-red-500 text-[9px]' role="alert">
                                                {errors.reponsibility[index].name.message}
                                            </p>
                                        )}
                                    </div>


                                    {/* Remove  Button */}
                                    <div className='w-full flex flex-wrap justify-end items-center gap-2 pt-1'>
                                        <button
                                            type="button"
                                            onClick={() => responsibilityRemove(index)}
                                            className="flex-shrink-0 px-2 py-1 bg-red-600 text-white rounded-md shadow-button"
                                        >
                                            Delete
                                        </button>

                                    </div>

                                </div>
                            ))}

                            {/* add option  */}
                            <div className='w-full flex flex-wrap justify-start items-center gap-2'>
                                <button
                                    type="button"
                                    onClick={() => responsibilityAppend({})}
                                    className="flex-shrink-0 px-2 py-1 bg-root-200 text-white rounded-md shadow-button"
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* -------------------------------------------------------------------------------------------- */}
                    <div className=' flex flex-wrap justify-center items-end gap-3 p-1'>
                        {/* save button  */}

                        <button type='submit' className="flex flex-wrap justify-center w-full max-w-96  px-4 py-2 bg-root-200 font-medium text-sm text-white border border-green-500 rounded-md shadow-button">
                            <p data-config-id="auto-txt-22-3">Create</p>
                        </button>


                    </div>
                </div>

            </form>
        </section>
    )
}

export default Dish_Add