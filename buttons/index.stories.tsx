import React from 'react';
import ReactDOM from 'react-dom';
import { FluentProvider, teamsLightTheme, makeStyles, Button } from '@fluentui/react-components';

import {
    bundleIcon,
    CalendarMonthFilled,
    CalendarMonthRegular,
  } from "@fluentui/react-icons";
  
const CalendarMonth = bundleIcon(CalendarMonthFilled, CalendarMonthRegular);

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
           <Button icon={<CalendarMonthRegular />}>Default</Button>
           <Button appearance="primary" icon={<CalendarMonthRegular />}>Primary</Button>
           <Button appearance='primary'>Primary</Button>
           <Button shape="circular">Circular</Button>
        </div>
        </FluentProvider>
    </>
);