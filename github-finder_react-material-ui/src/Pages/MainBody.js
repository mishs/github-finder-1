import { Container } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import ResultsTable from '../components/ResultsTable';
import TextField from '@material-ui/core/TextField';
import axios from "axios";
import styled from 'styled-components';

export default function MainBody() {
    const [searchQuery, setSearchQuery]     = useState('');
    const [query, setQuery]                 = useState('');
    const [isLoading, setisLoading]         = useState(false);
    const [users, setUsers]                 = useState([]);

    useEffect(() => {
        if (searchQuery !==  '') {
            setisLoading(true);

            axios.get(`https://api.github.com/search/users?q=${searchQuery}in:login`)
            .then(response => {
                const data = response.data.items;
                setUsers(data);
                setisLoading(false);
            });
        }
    },[searchQuery]);

    function handleQuery(e) {
        setQuery(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        query === '' ? alert('Please enter text') : setSearchQuery(query);
    }

    return (
        <Styles>
            <Container fixed>      
                <form onSubmit={handleSubmit}>                       
                    <TextField 
                        className="search-input"
                        label="search" 
                        margin="normal" 
                        variant="outlined" 
                        onChange={(e) => handleQuery(e)}
                    />

                    <input type="submit" value={isLoading ? 'Loading...' : 'Search'} variant="contained" color="primary" />
                </form>
                
                <ResultsTable users={users} />
            </Container>
        </Styles>
    )
}

const Styles = styled.div`
    padding: 5rem 0;
    form {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;

        .search-input {
            width: 360px;
            margin: 0 2rem 0 0;
            
        }

        input[type="submit"] {
            width: 150px;
            height: 56px;
            padding: 6px 16px;
            font-size: 0.875rem;
            min-width: 64px;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            font-weight: 500;
            line-height: 1.75;
            border-radius: 4px;
            border: none;
            color: #fff;
            background-color: #3f51b5;
            text-transform: uppercase;
            cursor: pointer;
        }
    }
`