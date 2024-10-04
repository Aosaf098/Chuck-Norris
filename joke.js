const URL = 'https://api.chucknorris.io/jokes/random'

async function getJokes() {
    const response = await fetch(URL)
    const data = await response.json()
    return data.value
    // console.log(data.value);
}

// getJokes()


document.getElementById('joke-btn').addEventListener('click', async() => {
    const jokeBox = document.getElementById('joke-box')
    jokeBox.innerText = await getJokes()
})