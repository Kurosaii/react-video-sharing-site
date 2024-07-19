import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";

import { Box } from "@mui/material";

import { Videos, ChannelCard } from './';

const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([])
    const { id } = useParams();

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
            setChannelDetail(data?.items[0]);
        });
        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => {
            setVideos(data?.items);
        });
    }, [id]);

    return (
        <Box
            minHeight="95vh">
            <Box>
                <div style={{
                    background: "linear-gradient(180deg, rgba(255,206,153,1) 0%, rgba(255,168,128,1) 35%, rgba(142,82,141,1) 100%)",
                    height: "300px",
                    zIndex: 10,
                }} />

                <ChannelCard
                    channelDetail={channelDetail}
                    marginTop="-110px"
                />
            </Box>

            <Box
                display="flex"
                p="2"
            >
                <Box sx={{ mr: { sm: "100px" } }} />
                <Videos videos={videos} />
            </Box>

        </Box>
    );
};

export default ChannelDetail;
