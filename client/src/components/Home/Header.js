import styles from "./Header.module.css";
import { IconButton } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";


//+++++++++++++++fetch API  http://localhost:3001/forms/data        +++++++++ +++++++++++++++
//++++++++++++++   http://localhost:3001/forms/delete/:id"          +++++++++++++++++++          

//   TO SEE ALL SAVED FORMS AND THEN WE CAN RENDER THEM WITH THERE NAME OR CAN PLAY WITH THEM LIKE CRUD
//   ALSO FETCH SECOND API TO DELETE SAVED FORM IN MONGO DB



import SideBar from "./sidebar";
function Header(props) {
  const formHandler = (e) => {
  
    alert(props.forms)
  };

  return (
    <div className={styles.header}>
      <SideBar />
      <div className={styles.header_info}>
        {/* single EventHandler */}
        <IconButton onClick={formHandler}>
          <DescriptionIcon color="secondary" />
          <span className={styles.info}>Forms</span>
        </IconButton>
      </div>
      <div className={styles.search}>
        <SearchIcon
          sx={{
            position: "relative",
            top: "8px",
            size: "8em",
          }}
        />
        <input type="search" placeholder="search" />
      </div>
      <div className={styles.right}>
        <IconButton>
          <AppsIcon color="secondary" />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
