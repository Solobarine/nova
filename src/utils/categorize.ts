import { Images, SeriesInterface } from "../interfaces/series_interface";

const categorize_images = (images: Images[], criteria: string) => {
    const data: Images[] = []
    console.log(images);
    
    images.map(item => {
        (item.type === criteria) && data.push(item)
    })
    return data
}

const get_categories = (series: SeriesInterface[]) => {
    const data: string[] = []
    series.map(series => {
        series.genres.map(g => {
            (!data.includes(g)) && data.push(g)
        })
    })
    const sorted_data = data.sort((a: string, b: string) => a.localeCompare(b, undefined, {sensitivity: 'base'}))
    return sorted_data
}

const sort_by_category = (series: SeriesInterface[], category: string) => {
    if (series.length === 0) return series
    const title = category.charAt(0).toUpperCase() + category.substring(1, category.length)
    const data: SeriesInterface[] = []
    series.map(s => {
        (s.genres.includes(title)) && data.push(s)
    })

    return data
}

const sort_by_ratings = (series: SeriesInterface[]) => {
    const data: SeriesInterface[] = []
    series.map(s => {
        (s.rating.average > 8.4) && data.push(s)
    })
    const sorted_data = data.sort((a, b) => Number(a.rating.average) - Number(b.rating.average))

    return sorted_data
}

export { categorize_images, get_categories, sort_by_category, sort_by_ratings }