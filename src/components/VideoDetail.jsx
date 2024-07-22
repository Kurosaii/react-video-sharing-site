import { useEffect, useState } from "react";

import { fetchFromAPI } from "../utils/fetchFromAPI";

import { Link, useParams } from "react-router-dom";

import { CheckCircle } from "@mui/icons-material"
import { Box, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";

import Videos from "./Videos";

const VideoDetail = () => {
    const [videoDetail, setVideoDetail] = useState(null);
    const [videos, setVideos] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
            setVideoDetail(data.items[0]);
        });
        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => {
            setVideos(data.items);
        });
    }, [id]);

    if (!videoDetail?.snippet) {
        return 'Loading...';
    }

    const {
        snippet: {
            channelId,
            channelTitle,
            title,
        },
        statistics: {
            likeCount,
            viewCount,
        },
    } = videoDetail;

    return (
        <Box minHeight="95vh">
            <Stack direction={{
                xs: "column",
                md: "row",
            }}>
                <Box flex={1}>
                    <Box sx={{
                        position: "sticky",
                        top: "86px",
                        width: "100%",
                    }}>
                        <ReactPlayer
                            className="react-player"
                            url={`https://www.youtube.com/watch?v=${id}`}
                            controls
                        />

                        <Typography
                            color="#fff"
                            fontWeight="bold"
                            p={2}
                            variant="h5"
                        >
                            {title}
                        </Typography>

                        <Stack
                            color="#fff"
                            direction="row"
                            justifyContent="space-between"
                            px={2}
                            py={1}
                        >
                            <Link to={`/channel/${channelId}`}>
                                <Typography
                                    variant={{
                                        sm: "subtitle1",
                                        md: "h6",
                                    }}
                                    sx={{ color: "#fff" }}
                                >
                                    {channelTitle}
                                    <CheckCircle sx={{
                                        color: "gray",
                                        fontSize: "12px",
                                        ml: "5px"
                                    }} />
                                </Typography>
                            </Link>

                            <Stack
                                alignItems="center"
                                direction="row"
                                gap="20px"
                            >
                                <Typography
                                    variant="body1"
                                    sx={{ opacity: 0.7 }}>
                                    {parseInt(viewCount).toLocaleString()} views
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{ opacity: 0.7 }}>
                                    {parseInt(likeCount).toLocaleString()} likes
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>

                <Box
                    alignItems="center"
                    justifyContent="center"
                    px={2}
                    py={{
                        xs: 5,
                        md: 1,
                    }}
                >
                    <Videos
                        videos={videos}
                        direction="column"
                    />
                </Box>
            </Stack>
        </Box>
    );
};

export default VideoDetail;
