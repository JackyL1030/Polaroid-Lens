export async function searchPhotos(query){
    const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data.results)
    return data.results
}