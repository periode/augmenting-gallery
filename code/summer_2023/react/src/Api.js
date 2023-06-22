import { useState } from 'react';

function Api() {
    // this is where we store all urls. it is useState() because it will need to update when its value changes
    const [picturesURL, setPicturesURL] = useState([])

    // this is the key that was given to us when we requested it on the europeana website
    const apiKey = 'strityrig'

    // this is the actual API request, with some parameters: query = Munich, reusabilty = open, media = true, apiKey = our api key
    fetch('https://api.europeana.eu/record/v2/search.json?query=Munich&reusability=open&media=true&wskey=' + apiKey)
        .then(res => {
            return res.json() // we transform the response from the api into a JSON object called data
        })
        .then(data => {
            // then we loop through the items of the JSON object to pick up the URLs of the images
            let arr = []
            for (const item of data.items) {
                arr.push(item.edmIsShownBy)
            }

            // then we update our picturesURL variable
            setPicturesURL(arr)
        })
        .catch(err => console.log(err))

    return (
        <div>
            {/* .map() is a JS way to loop over the elements of a list. in our case, we take each element and return an HTML <div> with img and legend included */}
            {picturesURL.map((url, index) => {
                    console.log(url);
                    return (
                        <div>
                            <img src={url} />
                            <p>picture #{index}</p>
                        </div>
                    )
                })}
        </div>
    )
}

export default Api;