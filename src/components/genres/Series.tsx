import './css/Series.css'
import { data } from '../../config/seed'
import Star from '../../assets/Star'
import { Link } from 'react-router-dom'

interface SeriesProps {
  details: {
    id: number,
    name: string,
    image: string,
    rating: {
      average: number
    }
  }
}

const Series = (props: SeriesProps) => {
  return (
    <div className="series_card">
      <div>
        <img src={props.details.image} alt={props.details.name} />
      </div>
      <Link to={`/series/${props.details.id}`}>{props.details.name}</Link>
      <div className='series_rating'>
        <Star/>
        <p>{props.details.rating.average}</p>
      </div>
    </div>
  )
}

export default Series