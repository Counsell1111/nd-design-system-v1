import React from 'react';
import ReactDOM from 'react-dom';
import { FluentProvider, teamsLightTheme, makeStyles, Button } from '@fluentui/react-components';

ReactDOM.render(
  <FluentProvider theme={teamsLightTheme}>

  </FluentProvider>,
  document.getElementById('root'),
);

export const FluentButton = () => (
       <>
        <FluentProvider theme={teamsLightTheme}>
           <Button shape="circular" appearance='primary'>Primary</Button>
           <Button shape="circular">Circular</Button>
        </FluentProvider>
    </>
);