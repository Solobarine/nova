import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import series from "../../features/async_thunks/Series"
import { sort_by_category, sort_by_ratings } from "../../utils/categorize"
import { SeriesInterface } from "../../interfaces/series_interface"
import Series from "../genres/Series"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './css/HotSeries.css'
import { AppDispatch, RootState } from "../../types/types"

const HotSeries = () => {
    const dispatch: AppDispatch = useDispatch()
    const all_series = useSelector((state: RootState) => state.series.all_series)

    useEffect(() => {
        if (all_series.loading === 'idle') dispatch(series.get_series())
    }, [dispatch, all_series])

    if (all_series.value.data.length !== 0) {
        const action_series = sort_by_category(all_series.value.data, 'action')
        const comedy_series = sort_by_category(all_series.value.data, 'comedy')
        const fantasy_series = sort_by_category(all_series.value.data, 'fantasy')
        const sci_fi_series = sort_by_category(all_series.value.data, 'science-Fiction')
        const romance_series = sort_by_category(all_series.value.data, 'romance')
        const top_rated: SeriesInterface[] = sort_by_ratings(all_series.value.data).reverse()
        console.log(top_rated);
        
        return (
          <section id='best_series'>
            <div>
                <div className='best_series_title'>
                    <h2>Top Rated</h2>
                    <a href="#">More</a>
                </div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    scrollbar={{ draggable: true }}
                >
                    {
                        top_rated.map((series, index: number) => (
                            (index < 6) &&
                            <SwiperSlide key={index}>
                                <Series details={{id: series.id, name: series.name, image: series.image.medium, rating: series.rating}}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div>
                <div className='best_series_title'>
                    <h2>Action</h2>
                    <a href="#">More</a>
                </div>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                >
                    {
                        action_series.map((series, index: number) => (
                            (index < 6) &&
                            <SwiperSlide key={index}>
                                <Series details={{id: series.id, name: series.name, image: series.image.medium, rating: series.rating}}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div>
                <div className='best_series_title'>
                    <h2>Comedy</h2>
                    <a href="#">More</a>
                </div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    scrollbar={{ draggable: true }}
                >
                    {
                        comedy_series.map((series, index: number) => (
                            (index < 6) &&
                            <SwiperSlide key={index}>
                                <Series details={{id: series.id, name: series.name, image: series.image.medium, rating: series.rating}}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div>
                <div className='best_series_title'>
                    <h2>Fantasy</h2>
                    <a href="#">More</a>
                </div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    scrollbar={{ draggable: true }}
                >
                    {
                        fantasy_series.map((series, index: number) => (
                            (index < 6) &&
                            <SwiperSlide key={index}>
                                <Series details={{id: series.id, name: series.name, image: series.image.medium, rating: series.rating}}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div>
                <div className='best_series_title'>
                    <h2>Science Fiction</h2>
                    <a href="#">More</a>
                </div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                >
                    {
                        sci_fi_series.map((series, index: number) => (
                            (index < 6) &&
                            <SwiperSlide key={index}>
                                <Series details={{id: series.id, name: series.name, image: series.image.medium, rating: series.rating}}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div>
                <div className='best_series_title'>
                    <h2>Romance</h2>
                    <a href="#">More</a>
                </div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                >
                    {
                        romance_series.map((series, index: number) => (
                            (index < 6) &&
                            <SwiperSlide key={index}>
                                <Series details={{id: series.id, name: series.name, image: series.image.medium, rating: series.rating}}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
          </section>
        )
    }

}

export default HotSeries