import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createSurfBreak } from '../../store/surfBreak';
import { useHistory } from 'react-router-dom';
import Map from "../Map/Map";


function CreateSurfBreakFormPage(){
    
    const states = [
    "AK","AL","AR","AZ","CA","CO","CT","DE","FL","GA","HI","IA","ID","IL","IN",
    "KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NE","NH",
    "NJ","NM","NV","NY","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VA",
    "VT","WA","WI","WV","WY"
  ];
    const waveTypes = [
        "Reef Break", "Beach Break", "Point Break"
    ];
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [secretSpot, setSecretSpot] = useState('no');
    const [position, setPosition] = useState("")
    const [zipcode, setZipcode] = useState('');
    const [waveType, setWaveType] = useState('');

    // let latitude;
    // let longitude;

    const sendDataToParent = (index) => {
        console.log(index[0], "lat", index[1], "lng")
        setPosition({lat: index[0], lng: index[1]});
        console.log("postition", position)
        // latitude = index[0];
        // longitude = index[1];
    };


    const updateName = (e) => setName(e.target.value);
    const updateCountry = (e) => setCountry(e.target.value);
    const updateState = (e) => setState(e.target.value);
    const updateCity = (e) => setCity(e.target.value);
    const updateZipcode = (e) => setZipcode(e.target.value);
    const updateWaveType = (e) => setWaveType(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("lat", latitude, "lng", longitude);
        console.log("position", position);
        const latitude = position.lat;
        const longitude = position.lng;

        const payload = {
            name,
            country,
            state,
            city,
            latitude,
            longitude,
            zipcode,
            waveType,
        };
        console.log("payload", payload)
        const surfBreak = await dispatch(createSurfBreak(payload));
        if (surfBreak) {
            history.push(`/pokemon/${surfBreak.id}`);
        }
    };

    const handleCancelClick = (e) => {
        e.preventDefault();
    };

    return (
    <>
        <Map sendDataToParent={sendDataToParent}></Map>
        <section className="container p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
            <div>
                <h1 className="text-4xl flex justify-center">Create a Surf Break</h1>
                <form onSubmit={handleSubmit} className="">
                    <div className="p-4 flex space-x-48">
                        <label>Name</label>
                        <input
                        className="bg-gray-100 rounded-md m-2"
                        type="text"
                        placeholder="Name"
                        required
                        value={name}
                        onChange={updateName} />
                    </div>
                    <div className="p-4 flex space-x-48">
                        <label>Country</label>
                        <select onChange={updateCountry} value={country}>
                            <option key={1}>Australia</option>
                            <option key={2}>United States of America</option>
                        </select>
                    </div>
                    <div className="p-4 flex space-x-48">
                            <label> State</label>
                        <select value={state} onChange={updateState}>
                        {states.map(state =>{
                            return (
                                <option value={state} key={state}>{state}</option>
                            )
                        })}
                        </select>
                    </div>
                    <div className="p-4 flex space-x-48">
                        <label>City</label>
                        <input
                        className="bg-gray-100 rounded-md m-2"
                        type="text"
                        placeholder="City"
                        required
                        value={city}
                        onChange={updateCity} />
                    </div>
                    <label>Secret Spot?</label>
                    <div className="p-4 flex space-x-48">
                        <label>
                            <input
                            type="radio"
                            value="no"
                            name="secretSpot"
                            checked={secretSpot === 'no'}
                            onChange={e => setSecretSpot(e.target.value)}
                            />
                        No
                        </label>
                        <label>
                            <input
                            type="radio"
                            value="yes"
                            name="secretSpot"
                            checked={secretSpot === 'yes'}
                            onChange={e => setSecretSpot(e.target.value)}
                            />
                        Yes
                        </label>
                    </div>
                    <div className="p-4 flex space-x-48">
                        <label>Latitude</label>
                        <input
                            className="bg-gray-100 rounded-md m-2 w-1/2"
                            type="number"
                            placeholder="Longitude"
                            step="any"
                            required
                            value={position.lat} 
                            />
                    </div>
                    <div className="p-4 flex space-x-48">
                        <label>Longitude</label>
                        <input
                        className="bg-gray-100 rounded-md m-2 w-1/2"
                        type="number"
                        placeholder="Longitude"
                        step="any"
                        required
                        value={position.lng}
                        />
                    </div>
                    <div className="p-4 flex space-x-48">
                        <label>Zipcode</label>
                        <input
                        className="bg-gray-100 rounded-md m-2"
                        type="number"
                        placeholder="Zipcode"
                        required
                        value={zipcode}
                        onChange={updateZipcode} />
                    </div>
                    <div className="p-4 flex space-x-48">
                        <label>Wave Type</label>
                            <select onChange={updateWaveType} value={waveType}>
                            {waveTypes.map(wave =>
                                <option key={wave}>{wave}</option>
                            )}
                            </select>
                    </div>
                    <div className="pt-4 flex space-x-48">
                        <button type="button" onClick={handleCancelClick} className=" bg-gray-400 flex justify-center items-center w-1/3 text-white px-4 py-3 m-1 rounded-md hover:bg-gray-300">
                            <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        Cancel
                        </button>
                        <button type="submit" className="bg-blue-500 flex justify-center items-center w-1/3 text-white px-4 py-3 m-1 rounded-md focus:outline-none hover:bg-blue-300">Create</button>
                    </div>
                </form>
            </div>
        </section>
    </>
    )
}

export default CreateSurfBreakFormPage;