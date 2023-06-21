import { createSlice } from "@reduxjs/toolkit";
import Series from "../async_thunks/Series";
import { SeriesInitialState } from "../../interfaces/interface";
import { SingleSeries } from "../../interfaces/series_interface";

const single_data: SingleSeries = {
    "id": 0,
    "url": '',
    "name": '',
    "type": '',
    "language": '',
    "genres": [],
    "status": '',
    "runtime": 0,
    "averageRuntime": 0,
    "premiered": '',
    "ended": '',
    "officialSite": '',
    "schedule": {
        "time": '',
        "days": []
    },
    "rating": {
        "average": 0
    },
    "weight": 0,
    "network": {
        "id": 0,
        "name": '',
        "country": {
            "name": '',
            "code": '',
            "timezone": ''
        },
        "officialSite": ''
    },
    "webChannel": '',
    "dvdCountry": '',
    "externals": {
        "tvrage": 0,
        "thetvdb": 0,
        "imdb": ''
    },
    "image": {
        "medium": '',
        "original": ''
    },
    "summary": '',
    "updated": 0,
    "_links": {
        "self": {
            "href": ''
        },
        "previousepisode": {
            "href": ''
        }
    },
    "_embedded": {
        "cast": [],
        "images": []
    }
}

const initialState: SeriesInitialState = {
    all_series: {
        value: {
            data: [],
            status: 0
        },
        loading: 'idle',
        error: {},
    },
    single_series: {
        value: {
            data: single_data,
            status: 0
        },
        loading: 'idle',
        error: {}
    }
}

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
            state.all_series.error = {}
            state.all_series.loading = 'pending'
        })
        .addCase(Series.get_series.fulfilled, (state, actions) => {
            const { status, data } = actions.payload
            console.log(actions.payload)
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
            state.all_series.error = actions.error
            state.all_series.value = {
                data: [],
                status: 0
            }
            state.all_series.loading = 'failed'
        })
        builder.addCase(Series.single_series.pending, (state) => {
            state.single_series.value = {
                data: initialState.single_series.value.data,
                status: 0
            }
            state.single_series.error = {}
            state.single_series.loading = 'pending'
        })
        .addCase(Series.single_series.fulfilled, (state, actions) => {
            const { status, data } = actions.payload
            if (status === 200) {
                state.single_series.value = {
                    data,
                    status
                }
                state.single_series.error = {}
                state.single_series.loading = 'success'
            } else {
                state.single_series.error = data
                state.single_series.value = {
                    data: initialState.single_series.value.data,
                    status
                }
                state.single_series.loading = 'failed'
            }
        })
        .addCase(Series.single_series.rejected, (state, actions) => {
            state.single_series.error = actions.error
            state.single_series.value = {
                data: single_data,
                status: 0
            }
            state.single_series.loading = 'failed'
        })
        
    },
})

export default series.reducer