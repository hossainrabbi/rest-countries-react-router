import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '../Card/Card';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Countries = () => {
    const classes = useStyles();
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const API = 'https://restcountries.eu/rest/v2/all';
        fetch(API)
            .then((res) => res.json())
            .then((data) => setCountries(data));
    }, []);

    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container spacing={3}>
                {countries.map((country) => (
                    <Grid item xs={12} sm={4} key={country.alpha3Code}>
                        <Card country={country} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Countries;
