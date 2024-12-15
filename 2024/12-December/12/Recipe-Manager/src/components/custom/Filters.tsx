import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "react-router-dom";

export default function Filters() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Handle search input
  const handleSearch = (term: string) => {
    if (term) {
      searchParams.set("search", term);
    } else {
      searchParams.delete("search");
    }
    setSearchParams(searchParams);
  };

  // Handle category selection
  const handleCategoryChange = (category: string) => {
    if (category && category !== "All") {
      searchParams.set("category", category);
    } else {
      searchParams.delete("category");
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="flex items-center gap-4 flex-1">
      {/* Search Input */}
      <div className="relative flex-1 max-w-sm">
        <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search recipes..."
          className="pl-8"
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("search") ?? ""}
        />
      </div>

      {/* Category Filter */}
      <Select
        defaultValue={searchParams.get("category") ?? ""}
        onValueChange={handleCategoryChange}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All">All Categories</SelectItem>
          <SelectItem value="Breakfast">Breakfast</SelectItem>
          <SelectItem value="Lunch">Lunch</SelectItem>
          <SelectItem value="Dinner">Dinner</SelectItem>
          <SelectItem value="Dessert">Dessert</SelectItem>
          <SelectItem value="Salad">Salad</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
