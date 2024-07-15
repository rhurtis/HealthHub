import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchHelloWorld, selectHelloWorld } from './helloWorldSlice';


const HelloWorld = () => {
    const dispatch = useAppDispatch();
    const helloWorld = useAppSelector(selectHelloWorld)


    return (
        <button onClick={() => dispatch(fetchHelloWorld())}>
            data from server: {helloWorld}
        </button>
    )
}

export default HelloWorld;