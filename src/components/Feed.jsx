import { useEffect, useState } from "react";

import { Box, Stack, Typography } from "@mui/material";

import Sidebar from "./Sidebar";

const Feed = () => (
    <Stack sx={{
        flexDirection: {
            sx: "column",
            md: "row",
        },
    }}>
        <Box sx={{
            borderRight: "1px solid #3d3d3d",
            height: {
                sx: "auto",
                md: "92vh",
            },
            px: {
                sx: 0,
                md: 2,
            },
        }}>
            <Sidebar />
            <Typography
                className="copyright"
                variant="body2"
                sx={{
                    color: "#fff",
                    mt: 1.5,
                }}
            >
                Copyright 2024
            </Typography>
        </Box>
    </Stack >
);

export default Feed;
