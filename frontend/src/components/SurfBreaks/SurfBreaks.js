import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as surfActions from "../../store/surfBreak"

function SurfBreaks() {
    const dispatch = useDispatch();
    const surfBreaks = useSelector((state) => Object.values(state.surfBreak));

    useEffect(() => {
        dispatch(surfActions.getSurfBreaks())
    }, [dispatch])

    return (
        <>
            <h1 className="text-8xl flex justify-center">Surf Breaks</h1>
        {
            surfBreaks.map(surfBreak => (
                <h1 className="text-2xl p-2 m-2">{surfBreak.name}
                    <ul>
                        <li key={`{surfBreak.country}`}>{surfBreak.country}</li>
                        <li key={`{surfBreak.state}`}>{surfBreak.state}</li>
                        <li key={`{surfBreak.city}`}>{surfBreak.city}</li>
                        <li key={`{surfBreak.privatebreak}`}>{surfBreak.privatebreak}</li>
                        <li key={`{surfBreak.latitude}`}>{surfBreak.latitude}</li>
                        <li key={`{surfBreak.longitude}`}>{surfBreak.longitude}</li>
                        <li key={`{surfBreak.zipcode}`}>{surfBreak.zipcode}</li>
                        <li key={`{surfBreak.waveType}`}>{surfBreak.waveType}</li>
                    </ul>
                </h1>
            ))
        }
        </>
    )
}

export default SurfBreaks;