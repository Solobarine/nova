import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import series from "../../features/async_thunks/Series"
import { get_categories } from "../../utils/categorize"
import './css/Genres.css'
import { Link } from "react-router-dom"
import { AppDispatch, RootState } from "../../types/types"

const Genres = () => {
    const dispatch: AppDispatch = useDispatch()
    const all_series = useSelector((state: RootState) => state.series.all_series)
    console.log(all_series)

    useEffect(() => {
        if(all_series.loading === 'idle') dispatch(series.get_series())
    }, [dispatch, all_series])
    if (all_series.value) {
        const genres: string[] = get_categories(all_series.value.data)
        console.log(genres)
        return (
            <section id="categories">
                <h1>Categories</h1>
                <div id="genres">
                    {
                        genres.map((genre, index) => (
                            <Link className="category" key={index} to={`/categories/${genre}`}>{genre}</Link>
                        ))
                    }
                </div>
            </section>
        )
    }

    if (all_series.loading === 'pending') {
        return <h1>Loading. Please wait...</h1>
    }

    if (!all_series.value && all_series.error) {
        return <h1>Sorry.Unable to get Categories</h1>
    }
    
}

export default Genres