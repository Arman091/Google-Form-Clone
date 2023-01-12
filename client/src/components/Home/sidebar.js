import { useState } from "react";
import styles from "./Layout.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";


import Form from "../images/form.png";
import sheets from "../images/sheets.png"
import slides from "../images/slides.png"
import myforms from "../images/goforms.png"
function SideBar() {
  const [isOpen, setisOpen] = useState({ value: false });
  const toggleDrawer = (anchor, open) => (e) => {
    setisOpen((isOpen) => {
      return { ...isOpen, [anchor]: open };
    });
  };

  const list = (anchor) => (
    <div style={{ width: "280px" }} role="presentation">
      <List>
        <ListItem>
          <ListItemText className={styles.SideBar}>SideBar</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <ListItem className={styles.sideElement}>
        <img src={sheets} alt="Notfound" className={styles.image} />
        <div className={styles.text}>Sheets</div>
      </ListItem>
      <ListItem className={styles.sideElement}>
        <img src={Form} alt="Notfound" className={styles.image} />
        <div className={styles.text}>Docs</div>
      </ListItem>
      <ListItem className={styles.sideElement}>
        <img src={slides} alt="Notfound" className={styles.image} />
        <div className={styles.text}>Slides</div>
      </ListItem>
      <ListItem className={styles.sideElement}>
        <img src={myforms} alt="Notfound" className={styles.image} />
        <div className={styles.text}>Forms</div>
      </ListItem>
      <Divider />
    </div>
  );

  return (
    <>
      <IconButton onClick={toggleDrawer("left", true)}>
              <MenuIcon style={{ color: 'black'}}/>
      </IconButton>
      <Drawer
        open={isOpen["left"]}
        onClose={toggleDrawer("left", false)}
        anchor={"left"}
      >
        {list("left")}
      </Drawer>
    </>
  );
}

export default SideBar;
