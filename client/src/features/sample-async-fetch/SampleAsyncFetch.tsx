import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getSampleAsyncFetch, selectSampleFetchValue, selectStatus } from "./sampleAsyncFetchSlice";

const SampleAsyncFetch = () => {
    const dispatch = useAppDispatch();
    const sampleFetchedData = useAppSelector(selectSampleFetchValue);
    const loadingStatus = useAppSelector(selectStatus);
    return (
        <div>
            <h1>Sample Async Fetch</h1>
            <button onClick={() => dispatch(getSampleAsyncFetch())}>
                Fetch Data
            </button>

            <h3>Loading Status: {loadingStatus}</h3>
            <h3>Fetched Data: {sampleFetchedData}</h3>


        </div>
    )
}

export default SampleAsyncFetch;