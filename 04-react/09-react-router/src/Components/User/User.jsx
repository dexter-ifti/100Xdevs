import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { user_id } = useParams()
    return (
        <>
            <div className="mx-auto w-full max-w-7xl">
                <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">User ID: {user_id}</h1>
            </div>
        </>
    )
}

export default User