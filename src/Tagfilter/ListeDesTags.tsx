import React from "react";
import { useTagContext } from "../store/TagContext";
import { TagType } from "../Tags/TagType";

export const TagList: React.FC<{ tags: TagType[] }> = ({ tags }) => {
    const { selectedTags, toggleTag } = useTagContext();

    return (
        <div className="tag-list">
            {tags.map((tag) => (
                <button key={tag.id} style={{ backgroundColor: selectedTags.includes(tag.id) ? "green" : "gray" }} onClick={() => toggleTag(tag.id)}>
                    {tag.name.en}
                </button>
            ))}
        </div>
    );
};
