app.get("/api/allnames", async (req, res) => {
    const docs = await dbFunctions.getAllDocs()
    res.json(docs) 
})
