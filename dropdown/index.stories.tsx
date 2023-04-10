import React from 'react';
import ReactDOM from 'react-dom';
import { FluentProvider, teamsLightTheme, makeStyles, Button } from '@fluentui/react-components';

const useStyles = makeStyles({
  wrapper: {
    columnGap: "15px",
    display: "flex",
  },
});
const styles = useStyles();
export const FluentButton = () => (
       <>
        <FluentProvider theme={teamsLightTheme}>
        <div className={styles.wrapper}>
           <Button shape="circular" appearance='primary'>Primary</Button>
           <Button shape="circular">Circular</Button>
           </div>
        </FluentProvider>
    </>
);