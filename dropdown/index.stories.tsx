
import { makeStyles, Button } from "@fluentui/react-components";
import * as React from "react";

const useStyles = makeStyles({
  wrapper: {
    columnGap: "15px",
    display: "flex",
  },
});

export const FluentButton = () => (
    <>
    <Button appearance='primary'>Primary</Button>
    <Button shape="circular">Circular</Button>
    </>
);