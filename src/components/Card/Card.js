import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Card.css';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));

export default function RecipeReviewCard({ country }) {
    const classes = useStyles();
    const { name, area, capital, flag, population } = country;

    return (
        <Card className={`Card , ${classes.root}`}>
            <CardHeader title={name} />
            <CardMedia className={classes.media} image={flag} title="flag" />
            <CardContent>
                <p>Capital: {capital}</p>
                <p>Area: {area}</p>
                <p>Population: {population}</p>
            </CardContent>
            <Link to={`/country/${name}`}>
                <Button variant="contained" fullWidth={true}>
                    Details
                </Button>
            </Link>
        </Card>
    );
}
