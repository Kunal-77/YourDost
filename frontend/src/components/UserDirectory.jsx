import React, { useEffect, useState } from "react";

export default function UserDirectory() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [domainFilter, setDomainFilter] = useState("");
    const [sortOption, setSortOption] = useState("");
    const [page, setPage] = useState(1);
    const totalPages = 10; // fixed (RandomUser supports many pages)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    //  Fetch Users (RandomUser API)
    const fetchUsers = async (pageNum) => {
        try {
            setLoading(true);
            setError("");

            const targetUrl = `https://randomuser.me/api/?page=${pageNum}&results=10&nat=us&seed=yourdost`;
            const res = await fetch(targetUrl);

            if (!res.ok)
                throw new Error(`Failed to fetch users (status: ${res.status})`);

            const data = await res.json();

            if (!data.results || data.results.length === 0) {
                setError("No users available on this page");
                setUsers([]);
                return;
            }

            setUsers(data.results);
        } catch (err) {
            console.error("❌ Fetch error:", err);
            setError("⚠️ Failed to fetch users. Please try again later.");
            setUsers([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers(page);
    }, [page]);

    //  Filtering logic
    let filteredUsers = users.filter((user) => {
        const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
        const email = user.email.toLowerCase();
        return (
            fullName.includes(search.toLowerCase()) &&
            email.includes(domainFilter.toLowerCase())
        );
    });

    //  Sorting logic
    if (sortOption === "first_name_asc") {
        filteredUsers.sort((a, b) => a.name.first.localeCompare(b.name.first));
    } else if (sortOption === "first_name_desc") {
        filteredUsers.sort((a, b) => b.name.first.localeCompare(a.name.first));
    } else if (sortOption === "email_asc") {
        filteredUsers.sort((a, b) => a.email.localeCompare(b.email));
    } else if (sortOption === "email_desc") {
        filteredUsers.sort((a, b) => b.email.localeCompare(a.email));
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl p-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-center text-indigo-700 mb-10">
                    User Directory
                </h1>

                {/* 🔍 Search / Filter / Sort */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 flex-wrap">
                    <input
                        type="text"
                        placeholder="🔍 Search by name or email"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border border-gray-300 rounded-xl px-4 py-2 text-base sm:w-1/3 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm"
                    />

                    <input
                        type="text"
                        placeholder="✉️ Filter by domain (e.g. gmail.com)"
                        value={domainFilter}
                        onChange={(e) => setDomainFilter(e.target.value)}
                        className="border border-gray-300 rounded-xl px-4 py-2 text-base sm:w-1/3 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm"
                    />

                    <select
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        className="border border-gray-300 rounded-xl px-4 py-2 text-base sm:w-1/4 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm"
                    >
                        <option value="">🔽 Sort By</option>
                        <option value="first_name_asc">Name (A → Z)</option>
                        <option value="first_name_desc">Name (Z → A)</option>
                        <option value="email_asc">Email (A → Z)</option>
                        <option value="email_desc">Email (Z → A)</option>
                    </select>
                </div>

                {/* ⏳ Loader */}
                {loading && (
                    <div className="flex justify-center items-center py-12">
                        <div className="w-10 h-10 border-4 border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}

                {/*  Error */}
                {error && !loading && (
                    <p className="text-center text-red-500 font-medium mb-6">
                         {error}
                    </p>
                )}

                {/* 👤 User Cards */}
                {!loading && !error && filteredUsers.length > 0 && (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredUsers.map((user, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 rounded-2xl border border-gray-100 p-6 text-center hover:bg-indigo-50/70"
                            >
                                <img
                                    src={user.picture.large}
                                    alt={`${user.name.first} ${user.name.last}`}
                                    className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-indigo-100 hover:scale-105 transition-transform duration-300"
                                />
                                <h2 className="text-lg font-semibold text-gray-800">
                                    {user.name.first} {user.name.last}
                                </h2>
                                <p className="text-sm text-gray-500 mt-1">{user.email}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* ⚙️ No Results */}
                {!loading && !error && filteredUsers.length === 0 && (
                    <p className="text-center text-gray-500 mt-8">
                        No users match your filters.
                    </p>
                )}

                {/* 🔄 Pagination */}
                {!loading && (
                    <div className="flex justify-center items-center mt-10 gap-4">
                        <button
                            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                            disabled={page === 1}
                            className={`px-5 py-2 rounded-lg font-medium shadow-md transition ${page === 1
                                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                : "bg-indigo-500 text-white hover:bg-indigo-600"
                                }`}
                        >
                            ⬅ Prev
                        </button>

                        <span className="text-lg font-semibold text-indigo-700">
                            Page {page} of {totalPages}
                        </span>

                        <button
                            onClick={() =>
                                setPage((prev) => (page < totalPages ? prev + 1 : prev))
                            }
                            disabled={page >= totalPages}
                            className={`px-5 py-2 rounded-lg font-medium shadow-md transition ${page >= totalPages
                                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                : "bg-indigo-500 text-white hover:bg-indigo-600"
                                }`}
                        >
                            Next ➡
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
