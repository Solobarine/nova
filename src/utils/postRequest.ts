const postRequest = async (url: string, options: RequestInit) => {
    
    try {
        const response = await fetch(url, options)
        const { status } = response
        const data = await response.json()
        return { data, status }
    } catch (error: any) {
        return error
    }
}

export default postRequest