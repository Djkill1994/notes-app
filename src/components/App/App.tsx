import React, {FC} from "react";
import styles from "./App.module.scss";
import {Grid, Stack} from "@mui/material";
import {Note} from "../Note/Note";
import {Tags} from "../Tags/Tags";

export const App: FC = () => {
    return (
        <Stack className={styles.wrapper} justifyContent="center" alignItems="center">
            <Grid className={styles.notes}>
                <Note/>
                <Tags/>
            </Grid>
        </Stack>
    );
};
