import { Fragment } from "react";
import { AiOutlineStar } from "react-icons/ai";
import SettingsIcon from "@mui/icons-material/Settings";
import { IconButton } from "@mui/material";
import { IoMdFolderOpen } from "react-icons/io";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Formicon from "../images/goforms.png";
import "./FormHeader.css";
import { useParams } from "react-router";
const FormHeader = () => {
  const { id } =useParams()
  return (
    <Fragment>
      <div className="form_header">
        <div className="form_header_left">
          <img src={Formicon} style={{height: "37px",width:'36px', marginLeft:"23px"}} alt="Error"  />
          <input type="text" placeholder={id} className="form_name"></input>
          <IoMdFolderOpen
            className="form_header_icon"
            style={{ marginRight: "20px" }}
          ></IoMdFolderOpen>
          <AiOutlineStar
            className="form_header_icon"
            style={{ marginRight: "10px" }}
          ></AiOutlineStar>
          <span style={{ fontSize: "19px", fontWeight: "600" }}>
            All Changes Saved in Drive
          </span>
        </div>
        <div className="form_header_right">
          <IconButton>
            <ColorLensIcon size="small" className="form_header_icon" />
          </IconButton>
          <VisibilityIcon />
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon className="form_header_icon" />
          </IconButton>
        </div>
      </div>
    </Fragment>
  );
};

export default FormHeader;
