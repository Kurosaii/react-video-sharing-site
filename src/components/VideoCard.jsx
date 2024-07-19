import { demoChannelTitle, demoChannelUrl, demoThumbnailUrl, demoVideoTitle, demoVideoUrl } from '../utils/constants';

import { Link } from "react-router-dom";

import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const VideoCard = ({ video: {
    id: { videoId },
    snippet,
} }) => {
    return (
        <Card sx={{
            boxShadow: "none",
            borderRadius: 0,
            width: {
                md: "320px",
                xs: "100%",
            },
        }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{
                        height: 180,
                        width: 358,
                    }}
                />
            </Link>

            <CardContent sx={{
                backgroundColor: "#1e1e1e",
                height: "106px",
            }}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography
                        color="#fff"
                        fontWeight="bold"
                        variant="subtitle1"
                    >
                        {snippet?.title.slice(0, 60)}
                    </Typography>
                </Link>

                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography
                        color="gray"
                        fontWeight="bold"
                        variant="subtitle2"
                    >
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle sx={{
                            color: "gray",
                            fontSize: 12,
                            ml: "5px",
                        }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    );
}

export default VideoCard;