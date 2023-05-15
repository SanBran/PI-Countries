import React from "react";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetail, cleanDetail } from '../../redux/actions';
import styles from "./Detail.module.css";

export default function Detail () {

    const { id } = useParams();
    const dispatch = useDispatch();
    
    
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        dispatch(getDetail(id))
        .then(res => setLoading(false))
        .catch(err => err);

        return () => dispatch(cleanDetail())
    }, [dispatch, id]);
    
    const detail = useSelector(state => state.countryDetail);
    
        
    return (
      
        <div className={styles.bigContainer}>
        <div className={styles.container}> 
                <div >
                <img className={styles.image} src={detail.flag} alt={detail.name}/>
                </div>
                <div className={styles.containerTitle}>
                <h3>Id: {detail.id}</h3>
                <h1 className={styles.title}>{detail.name}</h1>                
                <h3>Continent: {detail.Continent}</h3>
                </div>
                  <div className={styles.texts}>
                    <h3>Capital: {detail.capital}</h3>
                    <h3>Subregion: {detail.subregion}</h3>
                    <h3>Area: {detail.area}</h3>
                    <h3>Population: {detail.population}</h3>
                    </div>
        </div>
        </div>
    )
}