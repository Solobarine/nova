import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import series from '../../features/async_thunks/Series'
import Series from './Series'
import './css/Genre.css'
import { sort_by_category } from '../../utils/categorize'

const Genre = () => {
  const dispatch = useDispatch()
  const all_series = useSelector((state: any) => state.series.all_series)

  useEffect(() => {
    if(all_series.value.data.length < 1) dispatch(series.get_series())
  }, [dispatch])
  
  console.log(all_series)
  const { category } = useParams()
  
  const [pageNumber, setPageNumber] = useState(0)

  if (all_series.loading === 'pending') {
    return (
      <h2>Please wait...</h2>
    )
  }

  if (all_series.loading === 'success') {
    const genres = sort_by_category(all_series.value.data, category)
    console.log(genres)

    // Add Pagination
    const series_per_page = 15
    const series_shown = pageNumber * series_per_page
    const display_series = genres.slice(series_shown, series_shown + series_per_page)
    const page_count = Math.ceil(genres.length / series_per_page)

    const change_page = ({selected}) => {
      setPageNumber(selected)
    }

    return (
      <section id='category'>
        <h1>{`${category.charAt(0).toUpperCase()}${category.substring(1, category.length)}`}</h1>
        <div>
          {
            display_series.map(series => (
              <Series key={series.id} details={{id: series.id, name: series.name, image: series.image.medium, rating: series.rating}}/>
            ))
          }
        </div>
        <ReactPaginate
          pageCount={page_count}
          nextLabel=">"
          previousLabel="<"
          breakLabel="..."
          onPageChange={change_page}
          containerClassName='series_paginate'
          previousLinkClassName='previous'
          nextLinkClassName='next'
          pageLinkClassName='page_link'
          activeClassName='active_pagination'
        />
      </section>
    )
    }

    // if (all_series.loading === 'failed') {
        
    // }
}

export default Genre