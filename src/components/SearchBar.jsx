import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchTerm.trim()) {
            navigate(`/search/${searchTerm}`);
            setSearchTerm("");
        }
    };

    return (
        <Paper
            component="form"
            sx={{
                border: "1px solid #e3e3e3",
                borderRadius: 20,
                boxShadow: "none",
                pl: 2,
                mr: { sm: 5 },
            }}
            onSubmit={handleSubmit}
        >
            <input
                className="search-bar"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); }}
            />
            <IconButton
                type="submit"
                sx={{
                    color: 'red',
                    p: '10px',
                }}
            >
                <Search />
            </IconButton>
        </Paper>
    );
};

export default SearchBar;
