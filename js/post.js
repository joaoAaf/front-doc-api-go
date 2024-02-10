const url = "http://localhost/albums"
const register = document.getElementById("register")

register.addEventListener("submit", async function (event) {
    event.preventDefault()

    const data = {
        "title": document.getElementById("inputTitulo").value,
        "artist": document.getElementById("inputArtista").value,
        "price": parseFloat(document.getElementById("inputPreco").value)
    }

    await axios.post(url, data)
        .then(response => {
            alert("Album Cadastrado com Sucesso!")
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
})