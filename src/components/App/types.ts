export interface INote {
  id?: string;
  text?: string;
}

type SelectedNoteMode = "edit" | "new";

export interface ISelectedNote extends INote {
  mode?: SelectedNoteMode;
}
