import { createSlice } from "@reduxjs/toolkit";
import Series from "../async_thunks/Series";
import { SeriesInitialState } from "../../interfaces/interface";

const initialState = {} as SeriesInitialState

const series = createSlice({
    name: 'series',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(Series.get_series.pending, (state) => {
            state.all_series.value = {
                data: [],
                status: 0
            }
            state.all_series.error = []
            state.all_series.loading = 'pending'
        })
        .addCase(Series.get_series.fulfilled, (state, actions) => {
            const { status, data } = actions.payload
            if (status === 200) {
                state.all_series.value = {
                    data,
                    status
                }
                state.all_series.loading = 'success'
            } else {
                state.all_series.value = {
                    data: [],
                    status
                }
                state.all_series.loading = 'failed'
            }
        })
        .addCase(Series.get_series.rejected, (state, actions) => {
            const { status, data } = actions.payload
            state.all_series.error = data
            state.all_series.value = {
                data: [],
                status
            }
            state.all_series.loading = 'failed'
        })
        builder.addCase(Series.single_series.pending, (state) => {
            state.single_series.value = {
                data: [],
                status: 0
            }
            state.single_series.error = []
            state.single_series.loading = 'pending'
        })
        .addCase(Series.single_series.fulfilled, (state, actions) => {
            const { status, data } = actions.payload
            if (status === 200) {
                state.single_series.value = {
                    data,
                    status
                }
                state.single_series.error = []
                state.single_series.loading = 'success'
            } else {
                state.single_series.error = data
                state.single_series.value = {
                    data: [],
                    status
                }
                state.single_series.loading = 'failed'
            }
        })
        .addCase(Series.single_series.rejected, (state, actions) => {
            const { status, data } = actions.payload
            state.single_series.error = data
            state.single_series.value = {
                data: [],
                status
            }
            state.single_series.loading = 'failed'
        })
        
    },
})

export default series.reducer