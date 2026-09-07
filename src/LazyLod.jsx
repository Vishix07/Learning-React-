import React, { lazy, Suspense, useState } from 'react';
const UserLazyload = lazy(()=>import('./UserLazyload'))

export default function LazyLod() {

    const [load, setLoad] = useState(false)

    return (
        <div>

            <h1>Lazy Loading</h1>
            <button onClick={() => setLoad(true)} >Load User</button>
            {
                load ? <Suspense fallback={<h3>Loading....</h3>} > <UserLazyload /> </Suspense> : null
            }
            
        </div>
    )
}