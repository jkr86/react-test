import { Tag } from "./Tag";
import { TagType } from "./TagType";

export const Tags = ({ tags }: { tags: TagType[] }) => {
  return (
    <div
      style={{
        margin: "10px",
        padding: "5px",
        borderRadius: "3px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {tags.map((obj) => (
        <Tag tag={obj} />
      ))}
    </div>
  );
};
