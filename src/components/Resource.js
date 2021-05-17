import React, {useState, useEffect} from 'react';
import styles from './Resource.module.css';
import img1 from '../img/OIP.jpg';

import axios from 'axios';

const Resource = (props) => {
    const [person, setPerson] = useState({
        name: '',
        height: '',
        mass: '',
        hairColor: '',
        skinColor: ''
    })
    const [planet, setPlanet] = useState({
        name: '',
        climate: '',
        terrain: '',
        surfaceWater: '',
        population: ''
    })
    const [error, setError] = useState(false);

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${props.resource}/${props.id}`)
            .then(response=>{
                switch(props.resource){
                    case('people'):
                        setPerson({
                            name: response.data.name,
                            height: response.data.height,
                            mass: response.data.mass,
                            hairColor: response.data.hair_color,
                            skinColor: response.data.skin_color
                        })
                        break;
                    case('planets'):
                        setPlanet({
                            name: response.data.name,
                            climate: response.data.climate,
                            terrain: response.data.terrain,
                            surfaceWater: response.data.surface_water,
                            population: response.data.population
                        })
                        break;
                }
            })
            .catch(err=>{
                setError(true);
            })
    })

    return(
        <div className={styles.info}>
            {
                (props.resource==='people' && !error) && (
                    <>
                        <h2>{person.name}</h2><br/>
                        <p>Height: {person.height}</p>
                        <p>Mass: {person.mass}</p>
                        <p>Hair Color: {person.hairColor}</p>
                        <p>Skin Color: {person.skinColor}</p>
                    </>
                )
            }
            {
                (props.resource==='planets' && !error) && (
                    <>
                        <h2>{planet.name}</h2><br/>
                        <p>Climate: {planet.climate}</p>
                        <p>Terrain: {planet.terrain}</p>
                        <p>Surface Water: {planet.surfaceWater}</p>
                        <p>Population: {planet.population}</p>
                    </>
                )
            }
            {
                error===true && (
                    <>
                        <img src={img1} />
                    </>
                )
            }
        </div>
    )
}

export default Resource;