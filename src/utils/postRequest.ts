const postRequest = async (url: string, options: RequestInit) => {
    const response = await fetch(url, options)
    const { status } = response
    const data = response.json()
    return { data, status }
}

export default postRequest