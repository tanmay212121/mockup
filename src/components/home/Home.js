import React, { useEffect }         from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries }           from '../../redux/Slices/countries';
import Country                      from './country/country';


const Home = props => {
    const dispatch = useDispatch();
    const list = useSelector(state => state.countries)

    useEffect(() => {
        dispatch(fetchCountries())
    }, [])

    return (
        <div className='container'>
            <div className='row'>
                {list.countries.map((country, index) => {
                    return (
                        <div className='col-3'>
                            <Country country={country} key={country.name} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
};


export default Home;