import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { createPokemon, getPokemonTypes } from '../store/pokemon';
import { useHistory } from 'react-router-dom';


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
    // const dispatch = useDispatch();
    // const history = useHistory();
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [secretSpot, setSecretSpot] = useState('no');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [waveType, setWaveType] = useState('');

    const updateName = (e) => setName(e.target.value);
    const updateCountry = (e) => setCountry(e.target.value);
    const updateState = (e) => setState(e.target.value);
    const updateCity = (e) => setCity(e.target.value);
    const updateLatitude = (e) => setLatitude(e.target.value);
    const updateLongitude = (e) => setLongitude(e.target.value);
    const updateZipcode = (e) => setZipcode(e.target.value);
    const updateWaveType = (e) => setWaveType(e.target.value);

    // useEffect(() => {
    //     dispatch(getPokemonTypes());
    // }, [dispatch]);

    // useEffect(() => {
    //     if (pokeTypes.length && !type) {
    //         setType(pokeTypes[0]);
    //     }
    // }, [pokeTypes, type]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const payload = {
        //     no,
        //     attack,
        //     defense,
        //     imageUrl,
        //     name,
        //     type,
        //     move1,
        //     move2,
        //     moves: [move1, move2],
        // };

        // const pokemon = await dispatch(createPokemon(payload));
        // if (pokemon) {
        //     history.push(`/pokemon/${pokemon.id}`);
        //     hideForm();
        // }
    };

    const handleCancelClick = (e) => {
        e.preventDefault();
    };

    return (
    <>
         <section className="container p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
            <div>
                <h1 className="text-4xl flex justify-center">Create a Surf Break</h1>
                <form onSubmit={handleSubmit} className="">
                    <div className="p-4 flex space-x-48">
                        <label>Name</label>
                        <input
                        type="text"
                        placeholder="Name"
                        required
                        value={name}
                        onChange={updateName} />
                    </div>
                    <div className="p-4 flex space-x-48">
                        <label>Country</label>
                        <input
                        type="text"
                        placeholder="Country"
                        required
                        value={country}
                        onChange={updateCountry} />
                    </div>
                    <div className="p-4 flex space-x-48">
                        <label> State
                            <select value={state} onChange={updateState}>
                            {states.map(state =>{
                                return (
                                    <option value={state} key={state}>{state}</option>
                                    )
                                    })}
                            </select>
                        </label>
                    </div>
                    <div className="p-4 flex space-x-48">
                        <label>City</label>
                        <input
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
                        type="number"
                        placeholder="Latitude"
                        min="-90"
                        max="90"
                        required
                        value={latitude}
                        onChange={updateLatitude} />
                    </div>
                    <div className="p-4 flex space-x-48">
                        <label>Longitude</label>
                        <input
                        type="number"
                        placeholder="Longitude"
                        min="-180"
                        max="180"
                        required
                        value={longitude}
                        onChange={updateLongitude} />
                    </div>
                    <div className="p-4 flex space-x-48">
                        <label>Zipcode</label>
                        <input
                        type="number"
                        placeholder="Zipcode"
                        required
                        value={zipcode}
                        onChange={updateZipcode} />
                    </div>
                    <div className="p-4 flex space-x-48">
                        <label> Wave Type
                            <select onChange={updateWaveType} value={waveType}>
                            {waveTypes.map(wave =>
                                <option key={wave}>{wave}</option>
                            )}
                            </select>
                        </label>
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