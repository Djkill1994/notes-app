import React, { useState } from "react";
import styles from "./App.module.scss";
import { Box, Stack } from "@mui/material";
import { NoteInput } from "../NoteInput/NoteInput";
import { NoteCardList } from "../NoteCardList/NoteCardList";
import { NoteHeader } from "../NoteHeader/NoteHeader";
import { Tags } from "../Tags/Tags";
import { INote, ISelectedNote } from "./types";

const INITIAL_STATE = {
  notes: [
    { id: "1", text: "some #text" },
    { id: "2", text: "some text2" },
    { id: "3", text: "some #test1" },
  ],
  tags: ["#test1", "#test2"],
};

export const App: React.FC = () => {
  const [notes, setNotes] = useState<INote[]>(INITIAL_STATE.notes);
  const [tags, setTags] = useState<string[]>(INITIAL_STATE.tags);
  const [selectedNote, setSelectedNote] = useState<ISelectedNote>();
  const [filteredTags, setFilteredTags] = useState<string[]>([]);

  return (
    <Box
      className={styles.wrapper}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Stack className={styles.notes} width="70%" flexDirection="row">
        <NoteCardList
          setNotes={setNotes}
          notes={notes}
          setSelectedNote={setSelectedNote}
          filteredTags={filteredTags}
        />
        <Stack width="100%">
          <NoteHeader setNotes={setNotes} setSelectedNote={setSelectedNote} />
          <NoteInput
            selectedNote={selectedNote}
            setSelectedNote={setSelectedNote}
            setTags={setTags}
            setNotes={setNotes}
          />
          <Tags tags={tags} setFilteredTags={setFilteredTags} />
        </Stack>
      </Stack>
    </Box>
  );
};
