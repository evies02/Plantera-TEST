import React from "react";
import PostGrid from "../components/PostGrid/PostGrid";

import PostDescription from "../components/PostDescription/PostDescription";

function Post() {
    return (
        <div className="main__container">
            <section className="main__container__shadow">
                <img
                    className="imagePost"
                    alt="Snake plant"
                    src="https://cdn.shopify.com/s/files/1/0260/3037/4957/products/medium-plant-snake-white-pot_720x.jpg?v=1597702214"
                />
                <PostDescription />

                {/* <Box
                        className="description"
                        display="flex"
                        flexDirection="column"
                    >
                        <PostDescription />
                    </Box> */}
            </section>
            <PostGrid />
        </div>
    );
}

export default Post;
