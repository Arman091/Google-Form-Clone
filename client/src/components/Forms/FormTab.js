import styles from "./Form.module.css";
import { Paper } from "@mui/material";
import { Tabs, Tab } from "@mui/material";
import React, { useState } from "react";
const FormTab = () => {
    const [value, setvalue] = useState(1);
    const handlechange = (event,newValue) => {
       setvalue(newValue)
  }
  return (
    <Paper>
      <Tabs centered value={value} onChange={handlechange}>
        <Tab label="Questions" className={styles.tab} value={1}></Tab>
        <Tab label="Responses" className={styles.tab} value={2}></Tab>
      </Tabs>
    </Paper>
  );
};

export default FormTab;
