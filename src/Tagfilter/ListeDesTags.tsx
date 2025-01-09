import React from "react";
import { useTagContext } from "../store/TagContext";
import { TagType } from "../Tags/TagType";

export const TagList: React.FC<{ tags: TagType[] }> = ({ tags }) => {
    const { selectedTags, addTag } = useTagContext();

    return (
        <div className="flex items-center space-x-2 justify-center">
            {tags.map((tag) => (
                <div
                    key={tag.name.en}
                    onClick={() => addTag(tag.id)}
                    className={`${selectedTags.includes(tag.id) ? "bg-gray-200 ring-2 ring-indigo-400" : "bg-gray-200"} h-7 w-20 rounded-full flex items-center justify-center`}
                >
                    <button aria-label="small badge" className="focus:ring-2 focus:outline-none focus:ring-indigo-400 rounded-full flex items-center justify-around h-full w-full">
                        <span className="text-sm text-indigo-700 font-normal">{tag.name.en}</span>
                    </button>
                </div>
            ))}
        </div>
    );
};
