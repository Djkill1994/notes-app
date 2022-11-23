import React, { Dispatch, FC, SetStateAction } from "react";
import { Stack } from "@mui/material";
import { Tag } from "./Tag/Tag";

interface ITagsProps {
  tags: string[];
  setFilteredTags: Dispatch<SetStateAction<string[]>>;
}

export const Tags: FC<ITagsProps> = ({ tags, setFilteredTags }) => {
  return (
    <Stack
      gap="10px"
      flexDirection="row"
      borderTop="1px solid #dbdbdb"
      p="10px"
    >
      {tags.map((tag) => (
        <Tag key={tag} tag={tag} setFilteredTags={setFilteredTags} />
      ))}
    </Stack>
  );
};
