import {createAsyncThunk}
    from "@reduxjs/toolkit";
import * as service from '../services/tuits-service';

export const FIND_ALL_TUITS = createAsyncThunk(
    'tuits/findTuits', async () =>
        await service.findAllTuits()
)

export const DELETE_TUIT = createAsyncThunk(
    'tuits/deleteTuit',
    async (tuitId) => {
        console.log(tuitId)
        await service.deleteTuit(tuitId)
        return tuitId
    })

export const CREATE_TUIT = createAsyncThunk(
    'tuits/createTuit',
    async (tuit) => {
        await service.createTuit(tuit)
        return tuit
    })

export const UPDATE_TUIT =
    createAsyncThunk(
        'tuits/updateTuit',
        async (tuit) =>
            await service.updateTuit(tuit)
    )
