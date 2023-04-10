import React from 'react';
import ReactDOM from 'react-dom';
import { FluentProvider, teamsLightTheme, makeStyles, Button } from '@fluentui/react-components';

export const FluentButton = () => (
       <>
        <FluentProvider theme={teamsLightTheme}>
           <Button appearance='primary'>Primary</Button>
           <Button shape="circular">Circular</Button>
        </FluentProvider>
    </>
);