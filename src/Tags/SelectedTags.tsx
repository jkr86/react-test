import React from "react";
import { useTagContext } from "../store/TagContext";

export const SelectedTagsHeader: React.FC = () => {
    const { selectedTags, toggleTag } = useTagContext();

    return (
        <div className="my-6">
            <h2 className="mb-2 font-semibold">Selected Tags:</h2>
            <div className="flex items-center gap-x-2 justify-center">
                {selectedTags.map((tag) => (
                    <div key={tag} className="bg-blue-200 h-6 w-20 mb-4 sm:mb-0 rounded-full flex items-center justify-center mr-8">
                        <button aria-label="small badge" className="focus:ring-2 focus:outline-none focus:ring-indigo-400 rounded-full flex items-center justify-around h-full w-full">
                            <span className="text-xs text-indigo-700 font-normal">{tag}</span>
                            <div onClick={() => toggleTag(tag)}>
                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/small_large_rounded_with_cancel-svg1.svg" alt="cross" />
                            </div>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
