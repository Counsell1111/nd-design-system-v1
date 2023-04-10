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
  <Button shape="circular" appearance='primary'>Primary</Button>
  <Button shape="circular">Circular</Button>
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