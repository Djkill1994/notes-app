import styles from "./NoteHeader.module.scss";
import { Button, Stack, Typography } from "@mui/material";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import React, { Dispatch, FC, SetStateAction } from "react";
import { INote, ISelectedNote } from "../App/types";

interface INoteHeaderProps {
  setNotes: Dispatch<SetStateAction<INote[]>>;
  setSelectedNote: Dispatch<SetStateAction<ISelectedNote | undefined>>;
}

export const NoteHeader: FC<INoteHeaderProps> = ({
  setNotes,
  setSelectedNote,
}) => {
  return (
    <Stack
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row"
      className={styles.wrapper}
    >
      <Typography fontSize="26px">Notes</Typography>
      <Button onClick={(): void => setSelectedNote({ mode: "new" })}>
        <NoteAddIcon />
      </Button>
    </Stack>
  );
};
