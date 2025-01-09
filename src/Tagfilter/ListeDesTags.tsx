import { Tags } from "../Tags/Tags";
import { TagType } from "../Tags/TagType";

export const TagList = ({ tags }: { tags: TagType[] }) => {
  return <Tags tags={tags} />;
};
