import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";

import { Box, Typography } from "@mui/material";

import Videos from "./Videos";

const SearchFeed = () => {
    const [videos, setVideos] = useState([])
    const { searchTerm } = useParams();

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
            // Remove playlist results.
            setVideos(data.items.filter((item) => item.id.videoId || item.id.channelId));
        });
    }, [searchTerm]);

    return (
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
                Search results for: <span style={{ color: "#fc1503" }}>{searchTerm}</span> videos
            </Typography>

            <Videos videos={videos} />
        </Box>
    );
};

export default SearchFeed;
