import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import media_service from "../../media_service"
import { get_categories } from "../../utils/categorize"
import './css/Sidebar.css'

const SideBar = () => {
    const all_series = useSelector(state => state.series.all_series)

    let categories: string[]
    if (all_series.value.data !== 0) {
        categories = get_categories(all_series.value.data).splice(0, 7)
        return (
            <section id="sidebar">
                <div>
                    <h3>Media Services</h3>
                    {
                        media_service.map((media, index) => (
                            <div key={index} className="media">
                                <div>
                                    <img src={media.icon} alt={media.name}/>
                                </div>
                                <p>{media.name}</p>
                            </div>
                        ))
                    }
                </div>
                <div id="side_categories">
                    <h3>Categories</h3>
                    {
                        categories && categories.map((cat: string, index: number) => (
                            <Link key={index} to={`/categories/${cat}`}>{cat}</Link>
                        ))
                    }
                </div>
            </section>
        )
        }
    }

export default SideBar