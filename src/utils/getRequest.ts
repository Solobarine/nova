const getRequest = async(url: string) => {
    try {
        const response = await fetch(url)
        const { status } = response
        const data = await response.json()
        const json = {data, status}
        return json  
    } catch (error: any) {
       return error
    }
}

export default getRequest