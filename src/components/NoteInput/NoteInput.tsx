import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button, Stack, Typography } from "@mui/material";
import { INote, ISelectedNote } from "../App/types";
import styles from "./NoteInput.module.scss";
import { v4 as uuidv4 } from "uuid";

interface INoteInputProps {
  selectedNote?: ISelectedNote;
  setSelectedNote: Dispatch<SetStateAction<ISelectedNote | undefined>>;
  setNotes: Dispatch<SetStateAction<INote[]>>;
  setTags: Dispatch<SetStateAction<string[]>>;
}

const TAGS_REGEX = /(#\w+)/g;

const setFocusToTheEnd = (e: any): void => {
  e.target.focus();

  const range = document.createRange();
  range.selectNodeContents(e.target);
  range.collapse(false);
  const selection = window.getSelection();
  selection?.removeAllRanges();
  selection?.addRange(range);
};

export const NoteInput: FC<INoteInputProps> = ({
  selectedNote,
  setSelectedNote,
  setNotes,
  setTags,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tempText, setTempText] = useState(selectedNote?.text || "");

  const handleNoteChange = (e: any): void => {
    if (ref.current) {
      const text = e.target.textContent;

      ref.current.innerHTML = text.replace(TAGS_REGEX, "<b>$1</b>");
      setFocusToTheEnd(e);
      setTempText(text);
    }
  };

  const handleNoteSave = (): void => {
    if (!ref.current) return;
    if (selectedNote?.mode === "edit") {
      setNotes((prev) =>
        prev?.map((note) =>
          note.id === selectedNote?.id ? { ...note, text: tempText } : note
        )
      );
    } else if (selectedNote?.mode === "new") {
      setNotes((prev) => [...prev, { id: uuidv4(), text: tempText }]);
    }

    setTags((prev) => [
      ...prev,
      ...(tempText?.match(TAGS_REGEX)?.filter((tag) => !prev.includes(tag)) ||
        []),
    ]);
    setSelectedNote(undefined);
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = selectedNote?.text || "";
    }
  }, [selectedNote?.text]);

  return (
    <Stack height="55%">
      {selectedNote ? (
        <Stack>
          <div
            className={styles.noteInput}
            ref={ref}
            contentEditable={
              selectedNote?.mode === "edit"
                ? "true"
                : selectedNote?.mode === "new"
                ? "true"
                : undefined
            }
            onKeyUp={(e) => handleNoteChange(e)}
          />
          {selectedNote?.mode === "new" && (
            <Button onClick={handleNoteSave}>save</Button>
          )}
        </Stack>
      ) : (
        <Typography>Please select note</Typography>
      )}
    </Stack>
  );
};
