fetch("http://localhost:3000/api/allnames/")
    .then(res => res.json())
    .then(docs => {
        buildTable(docs)
        return docs.length
    })
    .then(n => {
        document.getElementById("status").innerHTML = "Loaded " + n + " row(s)!"
        if (n > 0) {
            selectRow()
            scrollToSelection()
        }
    })
    .catch(error => console.error("Error:", error));
