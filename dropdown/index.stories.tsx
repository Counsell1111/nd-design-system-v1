import React from 'react';
import ReactDOM from 'react-dom';
import { FluentProvider, teamsLightTheme, makeStyles, Button } from '@fluentui/react-components';

const useStyles = makeStyles({
  wrapper: {
    columnGap: "15px",
    display: "flex",
  },
});

export const FluentButton = () => (

<>
        <FluentProvider theme={teamsLightTheme}>
           <Button appearance='primary'>Primary</Button>
    <Button shape="circular">Circular</Button>
        </FluentProvider>,
    </>
);