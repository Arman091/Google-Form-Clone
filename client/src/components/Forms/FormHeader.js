import { Fragment } from "react";
import { Button } from "@mui/material";
import Formicon from "../images/goforms.png";
import "./FormHeader.css";
import { useParams } from "react-router";
import { useState } from "react";
 import { useDispatch } from "react-redux";
const FormHeader = () => {

  const [isViewform, setisviewform] = useState(false);
  const [submit, setsubmit] = useState(false);

   function viewQuestionPaper() {
     setisviewform((prevstate) => {
       return !prevstate;
     });
  }
  
  function SaveForm() {
    setsubmit(true);

    // dispatch({ type: "SET QUESTIONS", questions: questions });
  }
  const { id } = useParams();
  return (
    <Fragment>
      <div className="form_header hamberger">
        <div className="form_header_left">
          <img
            src={Formicon}
            style={{ height: "37px", width: "36px", marginLeft: "23px" }}
            alt="Error"
          />
          <input type="text" placeholder={id} className="form_name"></input>

          <span className="span">All Changes Saved in Drive</span>
          <div className="my_buttons">
            {!isViewform ? (
              <Button variant="contained" onClick={viewQuestionPaper}>
                all Ques
              </Button>
            ) : (
              <Button
                variant="contained"
                size="medium"
                onClick={viewQuestionPaper}
              >
                Add More Ques
              </Button>
            )}

            <Button variant="contained" size="medium" onClick={SaveForm}>
              SAVE Form
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FormHeader;
