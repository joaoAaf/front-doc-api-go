const url = "http://api-go-doc:8080/albums"

async function axiosGet() {
    axios.get(url, {
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            getProduts(response.data)
        })
        .catch(error => {
            console.log(error)
        })
}

function getProduts(objs) {
    const tbody = document.getElementById('tbody_objs')
    for (o of objs) {

        const tr = document.createElement('tr')
        tr.className = "align-middle"
        tr.id = o.ID

        let td = document.createElement('td')
        td.innerHTML = o.ID + "-"
        tr.appendChild(td)

        td = document.createElement('td')
        td.id = o.ID + "0"
        td.innerHTML = o.Title
        tr.appendChild(td)

        td = document.createElement('td')
        td.id = o.ID + "1"
        td.innerHTML = o.Artist
        tr.appendChild(td)

        td = document.createElement('td')
        td.id = o.ID + "2"
        td.innerHTML = o.Price
        tr.appendChild(td)

        tbody.appendChild(tr)
    }
}