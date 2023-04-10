import { FluentProvider, teamsLightTheme, makeStyles, Button } from '@fluentui/react-components';

export const FluentButton = () => (
       <>
        <FluentProvider theme={teamsLightTheme}>
        <Button shape="circular" appearance='primary'>Primary</Button>
        <Button shape="circular">Circular</Button>
        </FluentProvider>
    </>
);