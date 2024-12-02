import React, { useEffect, useState } from 'react'
import { useVerification } from '../context/verifyToken';

const UserAccessToggle = () => {
    const { isPrivate, updateisPrivate, setIsPrivateToServer, getPrivateFromServer } = useVerification()

    useEffect(() => {
        const getvaluefromserver = async () => {
            await getPrivateFromServer()
        }
        getvaluefromserver()
    }, [isPrivate])
    const toggleAccess = () => {
        updateisPrivate(!isPrivate)
        setIsPrivateToServer(!isPrivate)
        console.log("priv", isPrivate)
    };
    return (
        <div className="flex items-center gap-2">
            <label className="switch">
                <input
                    type="checkbox"
                    checked={!isPrivate}
                    onChange={toggleAccess}
                />
                <span className="slider round"></span>
            </label>
            <h2 className="text-[1.4rem] font-bold">{isPrivate ? 'Private' : 'Public'} Mode</h2>
        </div>
    );
}

export default UserAccessToggle