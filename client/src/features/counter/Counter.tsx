import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
    increment,
    selectCount
} from "./counterSlice";



const Counter = () => {
    const dispatch = useAppDispatch();
    const count = useAppSelector(selectCount);

    return (
        <button onClick={() => dispatch(increment())}>
            count is {count}
        </button>
    )
}

export default Counter;