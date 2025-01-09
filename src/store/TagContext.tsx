import React, { createContext, useContext, useState } from "react";

// Define the context type
interface TagContextType {
  selectedTags: string[];
  addTag: (tag: string) => void;
  removeTag: (tag: string) => void;
}

// Create the context
const TagContext = createContext<TagContextType | undefined>(undefined);

// Provider component
export const TagProvider: React.FC = ({ children }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Add a tag to the selectedTags list
  const addTag = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags((prevTags) => [...prevTags, tag]);
    }
  };

  // Remove a tag from the selectedTags list
  const removeTag = (tag: string) => {
    setSelectedTags((prevTags) => prevTags.filter((item) => item !== tag));
  };

  return (
    <TagContext.Provider value={{ selectedTags, addTag, removeTag }}>
      {children}
    </TagContext.Provider>
  );
};

// Custom hook to access the context
export const useTagContext = (): TagContextType => {
  const context = useContext(TagContext);
  if (!context) {
    throw new Error("useTagContext must be used within a TagProvider");
  }
  return context;
};
