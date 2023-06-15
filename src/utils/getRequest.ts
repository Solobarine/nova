const getRequest = async(url: string) => {
    const response = await fetch(url)
    const { status } = response
    const data = response.json()
    return { data, status }
}

export default getRequest