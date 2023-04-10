import React from 'react';
import ReactDOM from 'react-dom';
import { FluentProvider, teamsLightTheme, makeStyles, Button } from '@fluentui/react-components';
import {
  bundleIcon,
  CalendarMonthFilled,
  CalendarMonthRegular,
} from "@fluentui/react-icons";


const useStyles = makeStyles({
  wrapper: {
    columnGap: "15px",
    display: "flex",
  },
});
const styles = useStyles();
export const FluentButton = () => (
       <>
       <div className={styles.wrapper}>
        <FluentProvider theme={teamsLightTheme}>
           <Button appearance='primary'>Primary</Button>
           <Button shape="circular">Circular</Button>
        </FluentProvider>
        </div>
    </>
);