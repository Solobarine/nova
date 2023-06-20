import { createAsyncThunk } from "@reduxjs/toolkit"
import getRequest from "../../utils/getRequest"

const all_series = () => {
    const url = 'https://api.tvmaze.com/shows'
    return getRequest(url)
}

const single_series = (payload: number) => {
    const url = `https://api.tvmaze.com/shows/${payload}?embed[]=cast&embed[]=images`
    return getRequest(url)
}

const series = {
    get_series: createAsyncThunk(
        'GetAllSeries',
        all_series
    ),
    single_series: createAsyncThunk(
        'GetSingleSeries',
        single_series
    )
}

export default series