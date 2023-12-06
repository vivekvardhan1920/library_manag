import React from "react";
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import { Bookslist } from "../bookslist/bookslist.js";

function Routing_all() {
    return <Routes>
        <Route path="/books" exact element={<Bookslist />} />
        <Route path="*" element={<Navigate to="/books" replace />} />

    </Routes>

}

export default Routing_all;