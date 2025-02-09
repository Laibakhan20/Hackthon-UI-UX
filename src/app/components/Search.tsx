"use client"; 
import { client } from "@/sanity/lib/client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false); // Toggle search bar
  const [query, setQuery] = useState(""); // Search query
  const [results, setResults] = useState<any[]>([]); // Search results
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();


  // Fetch search results from Sanity
  const handleSearch = async (query: string) => {
    if (query.length > 2) {
      setIsLoading(true);
      const searchQuery = `*[_type == "product" && title match "${query}*"]{_id, title, price, slug, productImage}`;
      const results = await client.fetch(searchQuery);
      console.log("Fetched Results:", results); // Debugging line
      setResults(results);
      setIsLoading(false);
    } else {
      setResults([]);
    }
  };

  // Navigate to product details
  const handleNavigate = (slug: string) => {
    setIsOpen(false);
    router.push(`/product/${slug}`);
  };

  return (
    <div className="relative z-50 flex items-center">
      <button onClick={() => setIsOpen(!isOpen)}>
        <Search color="#23A6F0" className="w-[16px] h-[16px] " />
      </button>

      {isOpen && (
        <div className="absolute top-10 right-0 bg-white border border-gray-200 rounded-lg shadow-lg w-64 p-2">
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              handleSearch(e.target.value);
            }}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {isLoading ? (
            <p className="mt-2 text-center">Loading...</p>
          ) : results.length > 0 ? (
            <div className="mt-2 max-h-48 overflow-y-auto bg-mywhite text-black">
              {results.map((product) => (
                <div
                  key={product._id}
                  className="p-2 hover:bg-gray-100 cursor-pointer hover:underline"
                  onClick={() => handleNavigate(product.slug?.current)}
                >
                  
                  <p className="font-medium hover:underline">{product.title}</p>
                  <p className="text-sm text-gray-600">${product.price}</p>
                 
                </div>
              ))}
            </div>
          ) : (
            query.length > 2 && (
              <p className="mt-2 text-center text-gray-500">No results found.</p>
            )
          )}
        </div>
      )}
    </div>
  );
}