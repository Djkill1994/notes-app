import styles from "./NoteCard.module.scss";
import { Button, Stack, Typography } from "@mui/material";
import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { INote } from "../../App/types";

interface INoteCardProps {
  note: INote;
  onClick: VoidFunction;
  onEditClick: VoidFunction;
  onDeleteClick: VoidFunction;
}

export const NoteCard: React.FC<INoteCardProps> = ({
  note: { text },
  onClick,
  onEditClick,
  onDeleteClick,
}) => {
  return (
    <Stack className={styles.wrapper} flexDirection="column">
      <Stack flexDirection="row" justifyContent="flex-end">
        <Button type="button" variant="text" disableTouchRipple>
          <EditIcon onClick={onEditClick} />
        </Button>
        <Button type="button" variant="text" disableTouchRipple>
          <DeleteIcon onClick={onDeleteClick} />
        </Button>
      </Stack>
      <Typography onClick={onClick} noWrap>
        {text}
      </Typography>
    </Stack>
  );
};
