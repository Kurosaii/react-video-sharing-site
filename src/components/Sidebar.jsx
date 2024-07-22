import { categories } from "../utils/constants";

import { Stack } from "@mui/material";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
    <Stack
        direction="row"
        sx={{
            flexDirection: { md: "column" },
            height: {
                sx: "auto",
                md: "95%",
            },
            overflowY: "auto",
        }}
    >
        {categories.map((category) => (
            <button
                key={category.name}
                className="category-btn"
                style={{
                    background: category.name === selectedCategory && "#fc1503",
                    color: "white",
                }}
                onClick={() => { setSelectedCategory(category.name); }}
            >
                <span style={{
                    color: category.name === selectedCategory ? "white" : "red",
                    marginRight: "15px"
                }}>
                    {category.icon}
                </span>

                <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
                    {category.name}
                </span>
            </button>
        ))}
    </Stack>
);

export default Sidebar;
