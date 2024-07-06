import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            onSearch(query);
        }
    };

    return (
        <Box display="flex" justifyContent="center" mb={3}>
            <TextField
                label="Search City"
                variant="outlined"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleSearch}
                fullWidth
                style={{ maxWidth: '500px' }}
            />
        </Box>
    );
};

export default SearchBar;
