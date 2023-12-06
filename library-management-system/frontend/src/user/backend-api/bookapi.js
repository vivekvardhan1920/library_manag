const BookApi = {
    getAllBooks: async () => {
        const res = await fetch("/v1/book", { method: "GET" })
        return res.json()
    },
    getBookByIsbn: async (id) => {
        const res = await fetch(`/v1/book/${id}`, { method: "GET" })
        return res.json()
    },
    addBook: async (data) => {
        const res = await fetch("/v1/book", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        })
        return res.json()
    },
    patchBookByIsbn: async (id, data) => {
        const res = await fetch(`/v1/book/${id}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        })
        return res.json()
    },
    deleteBook: async (id) => {
        const res = await fetch(`/v1/book/${id}`, { method: "DELETE" })
        return res.json()
    },
}

export default BookApi; 