
export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=tD69y0uEvDj6vKDAINDxgTlojGTjTLzw&q=${ category }&limit=10`; // We will pass our category to the url.

    const resp = await fetch(url); // We will wait for the url.
    const { data } = await resp.json(); // The data will be the JSON from the answer given by the url.

    const gifs = data.map( img => ({ /* Going through the images. */
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    return gifs; // Return the gifs with the data.
}
