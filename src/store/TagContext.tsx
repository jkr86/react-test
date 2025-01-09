import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define types
type Tag = {
  id: string;
  name: {
    fr: string;
    en: string;
  };
  type: string;
  color: string;
};

interface TagContextType {
  selectedTags: string[];
  toggleTag: (tag: string) => void;
}

const TagContext = createContext<TagContextType | undefined>(undefined);

export const TagProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prevTags =>
      prevTags.includes(tag) ? prevTags.filter(t => t !== tag) : [...prevTags, tag]
    );
  };

  return (
    <TagContext.Provider value={{ selectedTags, toggleTag }}>
      {children}
    </TagContext.Provider>
  );
};

export const useTagContext = (): TagContextType => {
  const context = useContext(TagContext);
  if (!context) {
    throw new Error("useTagContext must be used within a TagProvider");
  }
  return context;
};
