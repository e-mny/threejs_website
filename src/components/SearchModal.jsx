import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogOverlay,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "../utils/animations";
import { searchLists } from "../constants";
import Fuse from "fuse.js";

const SearchModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1); // To track the highlighted item

  // Set up Fuse.js with the appropriate options
  const fuse = new Fuse(searchLists, {
    keys: ["name", "description", "tags"], // Specify which keys to search in
    threshold: 0.3, // Adjust for fuzzy matching sensitivity (lower = stricter)
    ignoreLocation: true,
    includeScore: true,
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();
        setIsOpen(true);
        setSearchQuery(""); // Clear the search query
        setResults([]); // Clear list
        setSelectedIndex(-1); // Reset selected index
      }

      // Handle arrow key navigation and selection
      if (isOpen) {
        if (event.key === "ArrowDown") {
          event.preventDefault();
          setSelectedIndex((prev) =>
            prev < results.length - 1 ? prev + 1 : 0
          );
        } else if (event.key === "ArrowUp") {
          event.preventDefault();
          setSelectedIndex((prev) =>
            prev > 0 ? prev - 1 : results.length - 1
          );
        } else if (event.key === "Enter") {
          event.preventDefault();
          if (selectedIndex >= 0 && selectedIndex < results.length) {
            handleSelect(results[selectedIndex]);
          }
          setSearchQuery("");
          setResults([]);
          setIsOpen(false);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, results, selectedIndex]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.trim() === "") {
      setResults([]); // Reset results when search query is empty
      setSelectedIndex(-1); // Reset selected index
    } else {
      const searchResults = fuse.search(query);
      setResults(searchResults);
      setSelectedIndex(-1); // Reset selected index
    }
  };

  const handleSelect = (item) => {
    setIsOpen(false);
    // console.log("Selected item:", item.name);
    const selected = item.item.name.toLowerCase();
    if (selected === "resume") {
      window.open("/EnochMok_Resume.pdf", "_blank");
      return;
    } else {
      scrollToSection(selected);
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="text-neutral-500 hover:text-white px-8 md:px-auto flex items-center bg-neutral-950 hover:bg-neutral-950"
      >
        Search...{" "}
        <span className="hidden md:inline text-inherit text-xs ml-4">
          Ctrl K / ⌘ K
        </span>
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogOverlay />
        <DialogContent className=" p-4 bg-neutral-800 text-white rounded-lg border-none">
          <DialogHeader className="flex items-center justify-between">
            <DialogTitle className="text-lg font-medium">Search</DialogTitle>
            <DialogDescription className="text-center">
              Use arrow keys to navigate. Press Enter to select.
            </DialogDescription>
          </DialogHeader>
          <Input
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            autoFocus
            className="my-4 bg-neutral-900 text-white placeholder-gray-500"
          />
          <ul className="space-y-2">
            {results.map((result, index) => (
              <li
                key={result.item.id}
                className={`p-2 rounded-md cursor-pointer ${
                  index === selectedIndex
                    ? "bg-neutral-700 text-white"
                    : "hover:bg-neutral-700 hover:text-white"
                }`}
                onClick={() => handleSelect(result)}
                tabIndex={0}
              >
                <div className="flex justify-between items-center">
                  <span className="text-base font-medium">
                    {result.item.name}
                  </span>
                  <span className="text-sm text-neutral-400">
                    {result.item.description}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <DialogFooter className="flex justify-end">
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="text-neutral-500 hover:text-black"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SearchModal;
