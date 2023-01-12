import styles from "./Layout.module.css";
import { IconButton } from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import contact from "../images/contact-form.webp";
import invite from "../images/invite2.png";
import Add from "../images/plus-sign.png";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";
const Layout = (props) => {
  const navigate = useNavigate();
  const formCreator = () => {
    const id = uuid();
    const small_id = id.slice(0, 8);
    navigate("/forms/" + small_id);
    //============ RECIEVED THIS FUNCTION FROM PARENT TO STATE LIFTING ========//
    props.getFormId({ form_id: small_id });
  };

  return (
    <div className={styles.template_section}>
      <div className={styles.template_top}>
        <div className={styles.template_left}>
          <span>Start New Form</span>
        </div>
        <div className={styles.template_right}>
          <div className={styles.gallary_button}>template gallery</div>
          <UnfoldMoreIcon />
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className={styles.template_body} onClick={formCreator}>
        <div className={styles.card}>
          <img src={Add} alt="Error" />
          <p>Add New Form</p>
        </div>
        <div className={styles.card}>
          <img src={invite} alt="Error" />
          <p>Party Invite</p>
        </div>
        <div className={styles.card}>
          <img src={contact} alt="Error" />
          <p>ContactForm</p>
        </div>
      </div>
    </div>
  );
};
export default Layout;
