/**
     * Get absolute path to an Image
     * 
     * 
     * @param image {string} - Image located in assets folder
     * 
     * @returns {URL} - The absolute path of the image
     * 
     * @example
     * 
     * const projector = getImageUrl("projector.jpg");
     * 
     * console.log(projector); // Output: "localhost:5432/assets/projector-{encoding}.jpg"
     * 
     * @description
     * Native ESM Feature that exposes the current modules/s URL
        Combining it with the Native URL Constructor : URL()
        with relative path : "../assets/"
        import.url.meta : Provides information based on the URL paths in a vite project.
*/
export const getImageUrl = (image) => new URL(`../assets/${image}`, import.meta.url).href;

export default getImageUrl; 