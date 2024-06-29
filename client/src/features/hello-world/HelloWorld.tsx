import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchHelloWorld, selectHelloWorld } from './helloWorldSlice';


const HelloWorld = () => {
    const dispatch = useAppDispatch();
    const helloWorld = useAppSelector(selectHelloWorld)

    //useEffect(() => {dispatch(fetchHelloWorld())}, [dispatch])

    return (
        <button onClick={() => dispatch(fetchHelloWorld())}>
            data from server: {helloWorld}
        </button>
    )
}

export default HelloWorld;