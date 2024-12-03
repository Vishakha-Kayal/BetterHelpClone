import React from 'react'

const Settings = ({ title, content }) => {
    return (
        <div className='pb-12'>
            <h2 className='text-[1.85rem] font-semibold text-tertiary'>{title}</h2>
            <p className='text-[1.4rem]'>{content}</p>
            <div className='px-7 flex flex-col items-start gap-3 pt-2'>
                <div className="flex gap-2">
                    <input type="checkbox" name="typeOfMessage" id="" />
                    <label htmlFor="Text" className='text-[1.4rem]'>Text Message</label>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" name="typeOfMessage" id="" />
                    <label htmlFor="Text" className='text-[1.4rem]'>Email</label>
                </div>
            </div>
        </div>
    )
}

export default Settings