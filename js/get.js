const url = "http://localhost/albums"

async function axiosGet() {
    axios.get(url, {
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            getObjs(response.data)
        })
        .catch(error => {
            console.log(error)
        })
}

function getObjs(objs) {
    const tbody = document.getElementById('tbody_objs')
    for (o of objs) {

        const tr = document.createElement('tr')
        tr.className = "align-middle"
        tr.id = o._id

        let td = document.createElement('td')
        tr.id = o._id + "-"
        td.innerHTML = o._id
        tr.appendChild(td)

        td = document.createElement('td')
        td.id = o._id + "0"
        td.innerHTML = o.title
        tr.appendChild(td)

        td = document.createElement('td')
        td.id = o._id + "1"
        td.innerHTML = o.artist
        tr.appendChild(td)

        td = document.createElement('td')
        td.id = o._id + "2"
        td.innerHTML = o.price
        tr.appendChild(td)

        tbody.appendChild(tr)
    }
}