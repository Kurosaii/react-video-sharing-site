import { useEffect, useState } from "react";

import { fetchFromAPI } from "../utils/fetchFromAPI";

import { Box, Stack, Typography } from "@mui/material";

import { Sidebar, Videos } from "./";

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [videos, setVideos] = useState(null);

    useEffect(() => {
        setVideos(null);

        fetchFromAPI(`search?part=snippet&q=${selectedCategory}&type=video,channel`)
            .then((data) => { setVideos(data.items); });
    }, [selectedCategory]);

    return (
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
                <Sidebar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
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

            <Box
                p={2}
                sx={{
                    flex: 2,
                    height: "90vh",
                    overflowY: "auto",
                }}
            >
                <Typography
                    fontWeight="bold"
                    mb={2}
                    sx={{ color: "white" }}
                    variant="h4"
                >
                    {selectedCategory} <span style={{ color: "#fc1503" }}>videos</span>
                </Typography>

                <Videos videos={videos} />
            </Box>
        </Stack>
    );
};

export default Feed;
