import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPokemon, getPokemonTypes } from '../store/pokemon';
import { useHistory } from 'react-router-dom';


function CreateSurfBreakFormPage(){
    // const dispatch = useDispatch();
    // const history = useHistory();
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    // const [no, setNo] = useState(1);
    // const [attack, setAttack] = useState('');
    // const [defense, setDefense] = useState('');
    // const [imageUrl, setImageUrl] = useState('');
    // const [type, setType] = useState(pokeTypes[0]);
    // const [move1, setMove1] = useState('');
    // const [move2, setMove2] = useState('');

    const updateName = (e) => setName(e.target.value);
    const updateCountry = (e) => setCountry(e.target.value);
    // const updateNo = (e) => setNo(e.target.value);
    // const updateAttack = (e) => setAttack(e.target.value);
    // const updateDefense = (e) => setDefense(e.target.value);
    // const updateImageUrl = (e) => setImageUrl(e.target.value);
    // const updateType = (e) => setType(e.target.value);
    // const updateMove1 = (e) => setMove1(e.target.value);
    // const updateMove2 = (e) => setMove2(e.target.value);

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

    // const handleCancelClick = (e) => {
    //     e.preventDefault();
    //     hideForm();
    // };

    return (
        <>
    <h1>Create A Surf Break</h1>
    <section className="new-form-holder centered middled">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={updateName} />
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={updateCountry} />
        <input
          type="number"
          placeholder="Number"
          min="1"
          required
          value={no}
          onChange={updateNo} />
        <input
          type="number"
          placeholder="Attack"
          min="0"
          max="100"
          required
          value={attack}
          onChange={updateAttack} />
        <input
          type="number"
          placeholder="Defense"
          min="0"
          max="100"
          required
          value={defense}
          onChange={updateDefense} />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={updateImageUrl} />
        <input
          type="text"
          placeholder="Move 1"
          value={move1}
          onChange={updateMove1} />
        <input
          type="text"
          placeholder="Move 2"
          value={move2}
          onChange={updateMove2} />
        <select onChange={updateType} value={type}>
          {pokeTypes.map(type =>
            <option key={type}>{type}</option>
          )}
        </select>
        <button type="submit">Create new Pokemon</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </form>
    </section><input
          type="number"
          placeholder="Number"
          min="1"
          required
          value={no}
          onChange={updateNo} />
        <input
          type="number"
          placeholder="Attack"
          min="0"
          max="100"
          required
          value={attack}
          onChange={updateAttack} />
        <input
          type="number"
          placeholder="Defense"
          min="0"
          max="100"
          required
          value={defense}
          onChange={updateDefense} />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={updateImageUrl} />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={updateName} />
        <input
          type="text"
          placeholder="Move 1"
          value={move1}
          onChange={updateMove1} />
        <input
          type="text"
          placeholder="Move 2"
          value={move2}
          onChange={updateMove2} />
        <select onChange={updateType} value={type}>
          {pokeTypes.map(type =>
            <option key={type}>{type}</option>
          )}
        </select>
        <button type="submit">Create new Pokemon</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </form>
    </section>
        <input
          type="number"
          placeholder="Number"
          min="1"
          required
          value={no}
          onChange={updateNo} />
        <input
          type="number"
          placeholder="Attack"
          min="0"
          max="100"
          required
          value={attack}
          onChange={updateAttack} />
        <input
          type="number"
          placeholder="Defense"
          min="0"
          max="100"
          required
          value={defense}
          onChange={updateDefense} />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={updateImageUrl} />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={updateName} />
        <input
          type="text"
          placeholder="Move 1"
          value={move1}
          onChange={updateMove1} />
        <input
          type="text"
          placeholder="Move 2"
          value={move2}
          onChange={updateMove2} />
        <select onChange={updateType} value={type}>
          {pokeTypes.map(type =>
            <option key={type}>{type}</option>
          )}
        </select>
        <button type="submit">Create new Pokemon</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </form>
    </section>
    </>
    )
}

export default CreateSurfBreakFormPage;