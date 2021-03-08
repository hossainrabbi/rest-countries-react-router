import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, Container } from '@material-ui/core';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function BasicTable() {
    const classes = useStyles();
    const { countryName } = useParams();
    const [country, setCountry] = useState([]);

    useEffect(() => {
        const API = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(API)
            .then((res) => res.json())
            .then((data) => setCountry(data[0]));
    }, [countryName]);

    const {
        name,
        area,
        capital,
        region,
        flag,
        population,
        topLevelDomain,
        alpha2Code,
        timezones,
    } = country;

    function createData(name, detail) {
        return { name, detail };
    }

    const rows = [
        createData('Name', name),
        createData('Capital', capital),
        createData('Region', region),
        createData('Area', area),
        createData('Population', population),
        createData('Alpha 2Code', alpha2Code),
        createData('Top Level Domain', topLevelDomain),
        createData('Timezones', timezones),
    ];

    return (
        <TableContainer component={Paper}>
            <Container>
                <div
                    style={{ display: 'flex', justifyContent: 'space-around' }}
                >
                    <img
                        src={flag}
                        alt="country-flag"
                        width="50%"
                        style={{ minWidth: 200 }}
                    />
                    <div>
                        <Link to="/">
                            <Button variant="contained" color="secondary">
                                <ArrowBackIcon /> Back
                            </Button>
                        </Link>
                    </div>
                </div>
                <Table className={classes.table} aria-label="simple table">
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell align="right">
                                    {row.detail}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Container>
        </TableContainer>
    );
}
