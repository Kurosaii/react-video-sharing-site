import { Box, Stack } from "@mui/material";

import { ChannelCard, VideoCard } from "./";

const Videos = ({ videos, direction = "row" }) => {
    if (!videos?.length) {
        return "Loading...";
    }

    return (
        <Stack
            direction={direction}
            flexWrap="wrap"
            justifyContent="center"
            gap={2}
        >
            {videos.map((item, i) => (
                <Box key={i}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}
        </Stack>
    );
};

export default Videos;
