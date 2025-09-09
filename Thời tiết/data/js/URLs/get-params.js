/**
 * Get URL's parameters and return an object
 * @param {*} url The URL you want to get the parameters
 * @returns An object contains the parameters of the URL
 */
const getURLParams = (url) => { // Get the current URL 
    const currentURL = url; // Create a new URL object 
    if (new URL(currentURL)) {
        const url = new URL(currentURL); // Get the search parameters from the URL 
        const params = new URLSearchParams(url.search); // Create an object to store the parameters 
        const paramsObject = {}; // Iterate over all search parameters
        for (const [key, value] of params.entries()) { paramsObject[key] = value; } 
        return paramsObject;
    } else {
        return;
    }
}