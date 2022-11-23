import React, { Dispatch, FC, SetStateAction } from "react";
import { Stack } from "@mui/material";
import { NoteCard } from "./NoteCard/NoteCard";
import { INote, ISelectedNote } from "../App/types";

interface INoteCardListProps {
  notes: INote[];
  filteredTags: string[];
  setNotes: Dispatch<SetStateAction<INote[]>>;
  setSelectedNote: Dispatch<SetStateAction<ISelectedNote | undefined>>;
}

export const NoteCardList: FC<INoteCardListProps> = ({
  notes,
  filteredTags,
  setNotes,
  setSelectedNote,
}) => {
  const filteredNotes = filteredTags.length
    ? notes.filter(({ text }) =>
        filteredTags.some((tag) => text?.includes(tag))
      )
    : notes;
  return (
    <Stack width="30%" maxWidth="200px" borderRight="1px solid #dbdbdb">
      {filteredNotes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onClick={(): void => setSelectedNote(note)}
          onEditClick={(): void => setSelectedNote({ ...note, mode: "edit" })}
          onDeleteClick={(): void =>
            setNotes((prev) => prev.filter(({ id }) => id !== note.id))
          }
        />
      ))}
    </Stack>
  );
};
