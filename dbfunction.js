getAllDocs: async () => {
    return await db.collection(coll).find().toArray()
}
