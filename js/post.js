const url = "api-go-doc:8080/albums"
const register = document.getElementById("register")

register.addEventListener("submit", async function (event) {
    event.preventDefault()

    const data = {
        "ID": document.getElementById("inputID").value,
        "Title": document.getElementById("inputTitulo").value,
        "Artist": document.getElementById("inputArtista").value,
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