const md5 = require('md5');

const ts = Math.round((new Date()).getTime() / 1000).toString()
const publicKey = 'f49e6d7f4057e2eff1a2586f3f7929d3'
const privateKey = '57fca92f401679592ef9782078493a5e847c216b'
// const hashString = `${ts}${publicKey}57fca92f401679592ef9782078493a5e847c216b`
const hashed = md5(ts + privateKey + publicKey)
const hash = hashed
const mainUrl = `http://gateway.marvel.com/v1/public/`
const charUrl = `${mainUrl}characters?offset=100&limit=100&ts=${ts}&apikey=${publicKey}&hash=${hash}`

async function fetchCharacters() {
    // fetch(charUrl).then(res => res.json())
    const res = await fetch('http://localhost:3000/characters')
    const data = await res.json()
    // console.log(data)
    return data
}

export default {
    fetchCharacters
}