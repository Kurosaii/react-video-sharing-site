import { logo } from "../utils/constants";

import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";

const Navbar = () => (
    <Stack
        alignItems="center"
        direction="row"
        p={2}
        sx={{
            background: "#000",
            justifyContent: "space-between",
            position: "sticky",
            top: 0,
        }}
    >
        <Link
            to="/"
            style={{
                alignItems: "center",
                display: "flex",
            }}>
            <img
                src={logo}
                alt="logo"
                height={45}
            />
        </Link>

        <SearchBar />
    </Stack>
);

export default Navbar;
