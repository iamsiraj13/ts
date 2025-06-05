import { useState, useEffect } from "react";
import { SetURLSearchParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../store/productApi";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const ShopSidebar = ({ 
  selectedCategory, 
  minPrice, 
  maxPrice, 
  selectedRating, 
  setSearchParams 
}) => {
  // Local state for price range (to handle slider smoothly)
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
  
  // Mobile sidebar state
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  
  // Get product categories for the filter
  const { data } = useGetAllProductsQuery();
  
  // Extract unique categories from the data
  const categories = data?.products
    ? Array.from(new Set(data.products.map(product => product.category)))
    : [];
  
  // Apply filters function
  const applyFilters = (newCategory, newRating, newPriceRange) => {
    const params = new URLSearchParams();
    
    const categoryToUse = newCategory !== undefined ? newCategory : selectedCategory;
    const ratingToUse = newRating !== undefined ? newRating : selectedRating;
    const priceToUse = newPriceRange || priceRange;
    
    if (categoryToUse) {
      params.set("category", categoryToUse);
    }
    
    params.set("minPrice", priceToUse[0].toString());
    params.set("maxPrice", priceToUse[1].toString());
    
    if (ratingToUse > 0) {
      params.set("rating", ratingToUse.toString());
    }
    
    setSearchParams(params);
  };
  
  // Handle category change
  const handleCategoryChange = (category) => {
    applyFilters(category);
  };
  
  // Handle rating change
  const handleRatingChange = (rating) => {
    applyFilters(undefined, rating);
  };
  
  // Handle price change with debounce
  const handlePriceChange = (value) => {
    setPriceRange(value);
    // Apply filters immediately for price
    applyFilters(undefined, undefined, value);
  };
  
  // Reset filters function
  const resetFilters = () => {
    setPriceRange([0, 2000]);
    setSearchParams({});
  };
  
  // Update local state when URL params change
  useEffect(() => {
    setPriceRange([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);
  
  // Mobile sidebar toggle
  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="md:hidden mb-4">
        <Button 
          variant="outline" 
          className="w-full flex items-center justify-center gap-2"
          onClick={toggleMobileSidebar}
        >
          <ChevronDown className={`h-4 w-4 transition-transform ${isMobileSidebarOpen ? "rotate-180" : ""}`} />
          Filters
        </Button>
      </div>
      
      {/* Sidebar - Responsive */}
      <div className={`
        md:w-64 bg-white rounded-lg border border-border p-4
        md:block transition-all duration-300
        ${isMobileSidebarOpen ? "block" : "hidden"}
      `}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Filters</h2>
          <Button variant="ghost" size="sm" onClick={resetFilters}>
            Clear all
          </Button>
        </div>

        {/* Categories Filter */}
        <Collapsible defaultOpen className="mb-6">
          <CollapsibleTrigger className="flex w-full items-center justify-between mb-2">
            <h3 className="font-medium">Categories</h3>
            <ChevronDown className="h-4 w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <ScrollArea className="h-40 pr-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="all-categories"
                    checked={!selectedCategory}
                    onCheckedChange={() => handleCategoryChange("")}
                  />
                  <label 
                    htmlFor="all-categories" 
                    className="text-sm cursor-pointer"
                  >
                    All Categories
                  </label>
                </div>
                
                {categories.sort().map(category => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`category-${category}`}
                      checked={selectedCategory === category}
                      onCheckedChange={() => handleCategoryChange(category)}
                    />
                    <label 
                      htmlFor={`category-${category}`} 
                      className="text-sm capitalize cursor-pointer"
                    >
                      {category.replace('-', ' ')}
                    </label>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CollapsibleContent>
        </Collapsible>
        
        {/* Price Filter */}
        <Collapsible defaultOpen className="mb-6">
          <CollapsibleTrigger className="flex w-full items-center justify-between mb-2">
            <h3 className="font-medium">Price Range</h3>
            <ChevronDown className="h-4 w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="mt-4">
              <Slider
                defaultValue={priceRange}
                value={priceRange}
                min={0}
                max={2000}
                step={10}
                onValueChange={handlePriceChange}
              />
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-gray-500">
                  ${priceRange[0]}
                </span>
                <span className="text-sm text-gray-500">
                  ${priceRange[1]}
                </span>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
        
        {/* Rating Filter */}
        <Collapsible defaultOpen className="mb-6">
          <CollapsibleTrigger className="flex w-full items-center justify-between mb-2">
            <h3 className="font-medium">Rating</h3>
            <ChevronDown className="h-4 w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="space-y-2 mt-2">
              {[5, 4, 3, 2, 1, 0].map((rating) => (
                <div key={rating} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`rating-${rating}`}
                    checked={selectedRating === rating}
                    onCheckedChange={() => handleRatingChange(rating)}
                  />
                  <label 
                    htmlFor={`rating-${rating}`} 
                    className="text-sm flex items-center cursor-pointer"
                  >
                    {rating === 0 ? (
                      "All Ratings"
                    ) : (
                      <>
                        {Array(rating).fill(0).map((_, index) => (
                          <Star key={index} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                        {Array(5 - rating).fill(0).map((_, index) => (
                          <Star key={`empty-${index}`} className="h-4 w-4 text-gray-300" />
                        ))}
                        <span className="ml-1">& Up</span>
                      </>
                    )}
                  </label>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </>
  );
};

export default ShopSidebar;