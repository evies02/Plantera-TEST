import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import MuiSelect from "@material-ui/core/Select";
import MuiMenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Link } from "react-router-dom";

function PostCreate() {
    return (
        <div className="main__container">
            <Box mt={4}>
                <Typography variant="h3" color="primary" gutterBottom>
                    Post new plant
                </Typography>
            </Box>
            <Box className="main__container__shadow">
                <div className="main__container">
                    <figure className="myPictures">
                        <img
                            src="https://cdn.shopify.com/s/files/1/0260/3037/4957/products/medium-plant-snake-white-pot_720x.jpg?v=1597702214"
                            alt=""
                        />
                        <img
                            src="https://cdn.shopify.com/s/files/1/0260/3037/4957/products/medium-plant-snake-white-pot_720x.jpg?v=1597702214"
                            alt=""
                        />
                    </figure>
                    <Button
                        className="button"
                        alignSelf="center"
                        color="primary"
                        variant="contained"
                        size="large"
                    >
                        + Add plant picture
                    </Button>
                    <div className="texField--postName">
                        <TextField
                            color="primary"
                            label="Name of the plant"
                            placeholder="Add the name of your plant"
                            variant="filled"
                        />
                    </div>
                    <div className="input__group--post">
                        <Box>
                            <FormControl style={{ width: "200%" }}>
                                <InputLabel id="status"> Selling? </InputLabel>
                                <MuiSelect labelId="status" variant="filled">
                                    <MuiMenuItem value="1">Donate</MuiMenuItem>
                                    <MuiMenuItem value="2">Sell</MuiMenuItem>
                                    <MuiMenuItem value="2">Swap</MuiMenuItem>
                                </MuiSelect>
                            </FormControl>
                        </Box>

                        <TextField
                            color="primary"
                            label="Price"
                            placeholder="Add your price"
                            variant="filled"
                            style={{ width: "30%" }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        Kč
                                    </InputAdornment>
                                )
                            }}
                        />
                    </div>
                    <div className="texField--postDescription">
                        <Box>
                            <TextField
                                id="filled-multiline-static"
                                label="Description"
                                multiline
                                rows={6}
                                placeholder="Add your description"
                                variant="filled"
                                style={{ width: "100%" }}
                            />
                        </Box>
                    </div>
                    {/* <Link to="/messages/create">  */}
                    <Box mb={2}>
                        <Button
                            className="button--post"
                            color="primary"
                            variant="contained"
                            size="medium"
                            disableRipple
                            style={{ textTransform: "none" }}
                            style={{ width: "100%" }}
                        >
                            Post new plant
                        </Button>
                    </Box>

                    {/* </Link> */}
                </div>
            </Box>
        </div>
    );
}

export default PostCreate;
