import React from "react";
import { useTagContext } from "../store/TagContext";

export const SelectedTagsHeader: React.FC = () => {
    const { selectedTags, removeTag } = useTagContext();

    return (
        <div className="my-6">
            {selectedTags.length > 0 && <h2 className="mb-2 font-semibold">Selected Tags:</h2>}
            <div className="flex items-center gap-x-2 justify-center">
                {selectedTags.map((tag) => (
                    <div key={tag} className="bg-blue-200 h-7 rounded-full flex items-center justify-center">
                        <div aria-label="small badge" className="focus:ring-2 focus:outline-none focus:ring-indigo-400 rounded-full flex items-center justify-between h-full w-full px-2">
                            <span className="text-sm text-indigo-700 font-normal">{tag}</span>
                            <div className="cursor-pointer" onClick={() => removeTag(tag)}>
                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/small_large_rounded_with_cancel-svg1.svg" alt="cross" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
