import React, {useState} from "react";
import styles from "./App.module.scss";
import {Box, Button, Stack, TextareaAutosize, Typography} from "@mui/material";
import {Note} from "../Note/Note";
import {ReactComponent as New} from "../../assets/icon/new.svg"

export const App: React.FC = () => {
    const [text, setText] = useState("")

    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };
    const addedNote = () => {
        return
    }


    return (
        <Box className={styles.wrapper} display="flex" justifyContent="center" alignItems="center">
            <Stack className={styles.notes} width="70%" flexDirection="row">
                <Stack width="30%" border="1px solid #dbdbdb">
                    <Note />
                </Stack>
                <Stack width="100%">
                    <Stack height="15%" border="1px solid #dbdbdb" justifyContent="space-between" alignItems="center"
                        flexDirection="row" className={styles.inputText} p="10px">
                        <Typography fontSize="22px">Notes</Typography>
                        <Button>
                            <New />
                        </Button>
                    </Stack>
                    <Stack height="55%" border="1px solid #dbdbdb" className={styles.inputText}>
                        <TextareaAutosize maxRows={4}
                            // onChange={handleChangeText}
                            aria-label="maximum height"
                            style={{ width: "100%", maxWidth: "625px", height: "100%", opacity: "0.5" }} />
                    </Stack>
                    <Stack height="30%" border="1px solid #dbdbdb" className={styles.inputText}>
                        Tags
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
};
