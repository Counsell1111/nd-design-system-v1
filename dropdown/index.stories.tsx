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

export const ExampleComponent = () => {
  const styles = useStyles();
return (
  <>
   <div className={styles.wrapper}>
  <Button shape="circular" appearance='primary'>Primary</Button>
  <Button shape="circular">Circular</Button>
  <Button shape="circular" icon={<CalendarMonthRegular />}>Default</Button>
  <Button shape="circular" appearance="primary" icon={<CalendarMonthRegular />}>Primary</Button>
  </div>
  </>
  );
};

export const FluentButton = () => (
       <>
        <FluentProvider theme={teamsLightTheme}>
        <ExampleComponent />
        </FluentProvider>
    </>
);