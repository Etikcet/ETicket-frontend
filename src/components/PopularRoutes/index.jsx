import React, { Component } from 'react';
import BusRoute from '../BusRoute';
import Stack from "@mui/material/Stack";

export default function PopularRoutes(){
    return(
        <div>
            <Stack direction="row" spacing = {"20%"}>
                <BusRoute/>
                <BusRoute/>
                <BusRoute/>
            </Stack>
            <br></br>
            <Stack direction="row" spacing = {"20%"}>
                <BusRoute/>
                <BusRoute/>
                <BusRoute/>
            </Stack>

        </div>
    );
}