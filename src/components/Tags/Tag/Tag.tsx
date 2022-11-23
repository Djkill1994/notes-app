import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { Chip } from "@mui/material";

interface ITagProps {
  tag: string;
  setFilteredTags: Dispatch<SetStateAction<string[]>>;
}

export const Tag: FC<ITagProps> = ({ tag, setFilteredTags }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Chip
      key={tag}
      label={tag}
      variant="filled"
      size="small"
      style={isActive ? { backgroundColor: "#0095f6" } : undefined}
      onClick={(): void => {
        if (isActive) {
          setFilteredTags((prev) =>
            prev.filter((filteredTag) => filteredTag !== tag)
          );
          setIsActive(false);
        } else {
          setFilteredTags((prev) => [...prev, tag]);
          setIsActive(true);
        }
      }}
    />
  );
};
