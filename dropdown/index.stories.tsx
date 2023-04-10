import React from 'react';
import ReactDOM from 'react-dom';
import { FluentProvider, teamsLightTheme, makeStyles, Button } from '@fluentui/react-components';


  export const ExampleComponent = () => {
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