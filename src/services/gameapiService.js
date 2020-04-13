const BASE_URL = 'https://rawg-video-games-database.p.rapidapi.com/games';

function getAllGames() {
    return new Promise ((resolve, reject) => {
        fetch(BASE_URL, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
                "x-rapidapi-key": "ebaf9c6b31mshf2bbf5af2c580f1p1bfb70jsn6c756e512fa4"
            }
        })
        .then( async res => {
            async function* makeTextFileLineIterator(fileURL) {
                const utf8Decoder = new TextDecoder("utf-8");
                let response = await fetch(BASE_URL, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
                        "x-rapidapi-key": "ebaf9c6b31mshf2bbf5af2c580f1p1bfb70jsn6c756e512fa4"
                    }
                });
                let reader = response.body.getReader();
                let {value: chunk, done: readerDone} = await reader.read();
                chunk = chunk ? utf8Decoder.decode(chunk) : "";
              
                let re = /\r\n|\n|\r/gm;
                let startIndex = 0;
              
                for (;;) {
                  let result = re.exec(chunk);
                  if (!result) {
                    if (readerDone) {
                      break;
                    }
                    let remainder = chunk.substr(startIndex);
                    ({value: chunk, done: readerDone} = await reader.read());
                    chunk = remainder + (chunk ? utf8Decoder.decode(chunk) : "");
                    startIndex = re.lastIndex = 0;
                    continue;
                  }
                  yield chunk.substring(startIndex, result.index);
                  startIndex = re.lastIndex;
                }
                if (startIndex < chunk.length) {
                  // last line didn't end in a newline char
                  yield chunk.substr(startIndex);
                }
              }
              
              let paragraph = '';
    
              for await (let line of makeTextFileLineIterator(BASE_URL)) {
                paragraph += line;
            }
            resolve(JSON.parse(paragraph));
        })
        .catch(err => {
            console.log(err);
            reject(err);
        });
    }) 
}

export {
    getAllGames,
}