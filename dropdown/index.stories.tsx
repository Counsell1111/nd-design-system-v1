import React from 'react';
import { FluentProvider, teamsLightTheme, Button } from '@fluentui/react-components';

export const Shape = () => {
    <>
    <FluentProvider theme={teamsLightTheme}>
      <Button>Rounded</Button>
      <Button shape="circular">Circular</Button>
      <Button shape="square">Square</Button>
    </FluentProvider>
    </>
}