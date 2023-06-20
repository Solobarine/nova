interface Cast {
    "person": {
        "id": number,
        "url": string,
        "name": string,
        "country": {
            "name": string,
            "code": string,
            "timezone": string
        },
        "birthday": string,
        "deathday": null | string,
        "gender": string,
        "image": {
            "medium": string,
            "original": string
        },
        "updated": number,
        "_links": {
            "self": {
                "href": string
            }
        }
    },
    "character": {
        "id": number,
        "url": string,
        "name": string,
        "image": {
            "medium": string,
            "original": string
        },
        "_links": {
            "self": {
                "href": string
            }
        }
    },
    "self": boolean,
    "voice": boolean
}

interface Images {
    "id": number,
    "type": string,
    "main": boolean,
    "resolutions": {
        "original": {
            "url": string,
            "width": number,
            "height": number
        },
        "medium": {
            "url": string,
            "width": number,
            "height": number
        }
    }
}

interface ImagesOnlyOriginal {
    "id": number,
    "type": string,
    "main": boolean,
    "resolutions": {
        "original": {
            "url": string,
            "width": number,
            "height": number
        }
    }
}

interface SeriesInterface {
    "id": number,
    "url": string,
    "name": string,
    "type": string,
    "language": string,
    "genres": string[],
    "status": string,
    "runtime": number,
    "averageRuntime": number,
    "premiered": string,
    "ended": string,
    "officialSite": string,
    "schedule": {
        "time": string,
        "days": string[]
    },
    "rating": {
        "average": number
    },
    "weight": number,
    "network": {
        "id": number,
        "name": string,
        "country": {
            "name": string,
            "code": string,
            "timezone": string
        },
        "officialSite": string
    },
    "webChannel": null | string,
    "dvdCountry": null | string,
    "externals": {
        "tvrage": number,
        "thetvdb": number,
        "imdb": string
    },
    "image": {
        "medium": string,
        "original": string
    },
    "summary": string,
    "updated": number,
    "_links": {
        "self": {
            "href": string
        },
        "previousepisode": {
            "href": string
        }
    }
}

interface SingleSeries {
    "id": number,
    "url": string,
    "name": string,
    "type": string,
    "language": string,
    "genres": string[],
    "status": string,
    "runtime": number,
    "averageRuntime": number,
    "premiered": string,
    "ended": string,
    "officialSite": string,
    "schedule": {
        "time": string,
        "days": string[]
    },
    "rating": {
        "average": number
    },
    "weight": number,
    "network": {
        "id": number,
        "name": string,
        "country": {
            "name": string,
            "code": string,
            "timezone": string
        },
        "officialSite": string
    },
    "webChannel": null | string,
    "dvdCountry": null | string,
    "externals": {
        "tvrage": number,
        "thetvdb": number,
        "imdb": string
    },
    "image": {
        "medium": string,
        "original": string
    },
    "summary": string,
    "updated": number,
    "_links": {
        "self": {
            "href": string
        },
        "previousepisode": {
            "href": string
        }
    },
    "_embedded": {
        "cast": Cast[],
        "images": Images[] | ImagesOnlyOriginal[]
    }
}

export type { SeriesInterface, SingleSeries, Images, ImagesOnlyOriginal }