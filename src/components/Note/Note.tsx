import styles from "./Note.module.scss"
import {Button, Stack, Typography} from "@mui/material";
import React from "react";
import {ReactComponent as Delete} from "../../assets/icon/delete.svg"
import {ReactComponent as Edit} from "../../assets/icon/edit.svg"

export const Note: React.FC = () => {

    return (
        <Stack className={styles.wrapper} flexDirection="column">
            <Stack>
                <Stack flexDirection="row" justifyContent="flex-end">
                    <Button type="button"
                            variant="text"
                            disableTouchRipple><Edit/></Button>
                    <Button type="button"
                            variant="text"
                            disableTouchRipple><Delete/></Button>
                </Stack>
                <Typography noWrap>Это моя первая заметка я сегодня очень сильно утсал но я не зря это все делаю</Typography>
            </Stack>
        </Stack>
    );
};