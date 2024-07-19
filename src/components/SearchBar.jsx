import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";

const SearchBar = () => {
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
            onSubmit={() => { }}
        >
            <input
                className="search-bar"
                placeholder="Search..."
                value=""
                disabled
                onChange={() => { }}
            />
            <IconButton
                type="submit"
                disabled
                sx={{
                    color: 'red',
                    p: '10px',
                }}
            >
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar;
