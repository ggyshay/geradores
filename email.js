const providers = [
    "@taqtile.com",
    "@hotmail.com",
    "@gmail.com",
    "@outlook.com",
    "@example.com"
]
function geraEmail() {
    size = Math.floor(Math.random()*12);
    const str  = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 2+ size);
    return str + providers[size % (providers.length)]
}

console.log(geraEmail())