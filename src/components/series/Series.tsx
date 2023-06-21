import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { categorize_images } from "../../utils/categorize"
import { Cast, Images, SingleSeries } from "../../interfaces/series_interface"
import Star from "../../assets/Star"
import { AppDispatch, RootState } from "../../types/types"
import series from "../../features/async_thunks/Series"
import './css/Series.css'

const Series = () => {
    const dispatch: AppDispatch= useDispatch()
    const single_series = useSelector((state: RootState) => state.series.single_series)
    
    const {series_id} = useParams()
    
    useEffect(() => {
        dispatch(series.single_series(Number(series_id)))
    }, [dispatch, series_id])

    const data : SingleSeries = single_series.value.data
    console.log(data);
    
    
    
    if (single_series.loading === 'pending') return <h1>Please wait...</h1>
    
    if (single_series.loading === 'failed') return <h1>Sorry, unable to retrieve series.</h1>
    
    console.log(single_series);
    
    
    if (single_series.value.data.id) {
        const background = categorize_images(data._embedded.images, 'background') as Images[]
        const posters = categorize_images(data._embedded.images, 'poster') as Images[]
        
        return (
            <section id='series_section'>
            <div>
                <div id="series_background">
                    <div id="swiper">
                        {
                            (background.length > 0) ?
                            <img src={background[0].resolutions.original.url} alt={data.name} /> :
                            <img src={posters[0].resolutions.original.url} alt={data.name} />
                        }
                    </div>
                    <div id='series_description'>
                        <a href={data.officialSite}>{data.name}</a>
                        <div id="ratings">
                            <Star/>
                            <p>{data.rating.average}</p>
                        </div>
                        <div id="year_length">
                            <div>
                                <p>Release Date</p>
                                <p>{data.premiered
                                }</p>
                            </div>
                            <div>
                                <p>Runtime</p>
                                <p>{data.averageRuntime}</p>
                            </div>
                        </div>
                        <div id="series_genres">
                            {
                                data.genres.map((genre, index) => (
                                    <button key={index}>{genre}</button>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <h3 id="summary_head">Summary</h3>
                <div id="summary" dangerouslySetInnerHTML={{'__html': data.summary}} />
                <div id="cast_section">
                    <h3>Cast</h3>
                    <div>
                        {
                            data._embedded.cast.map((cast: Cast, index) => (
                                (index < 7)
                                &&
                                <div key={index} className={`cast ${(cast.person.gender === 'Male') ? 'actor' : 'actress'}`}>
                                    <img src={cast.person.image.medium} alt={cast.person.name}></img>
                                    <div>
                                        <p>{cast.person.name}</p>
                                        <p>as</p>
                                        <p>{cast.character.name}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div id="network">
                    <div>
                        <p><strong>Network:</strong> <a href={data.network.officialSite}>{data.network.name}</a></p>
                        <p><strong>Language:</strong> {data.language}</p>
                        <p><strong>Ended:</strong> {(data.ended) ? 'Yes' : 'No'}</p>
                    </div>
                    <div>
                        <p><strong>Country:</strong> {data.network.country.name}</p>
                        <p><strong>Type:</strong> {data.type}</p>
                        <p><strong>Date Ended:</strong> {data.ended}</p>
                    </div>
                </div>
            </div>
        </section>
      )
    } 
}

export default Series