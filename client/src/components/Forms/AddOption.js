
//CONDITIONAL RENDERING TO ADD MORE ANSWER BOXES IF LESS THAN

import ShortTextIcon from "@mui/icons-material/ShortText";
import { FormControlLabel } from "@mui/material";

import { Button } from "@mui/material";

function AddOption(props) {
  return (
    <div className="add_question_body">
      <FormControlLabel
        disabled
        control={
          props.ques.questionType !== "text" ? (
            <input
              type={props.ques.questionType}
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
              style={{ marginLeft: "10px", marginRight: "10px" }}
              disabled
            />
          ) : (
            <ShortTextIcon style={{ marginRight: "10px" }} />
          )
        }
        label={
          <div>
            <input
              type="text"
              className="text_input"
              style={{ fontSize: "13px", width: "60px" }}
              placeholder="Add other"
            ></input>
            <Button
              size="small"
              style={{
                textTransform: "none",
                color: "#4285f4",
                fontSize: "13px",
                fontweight: "600",
              }}
              onClick={() => {
                props.addOption(props.index);
              }}
            >
              Add Option
            </Button>
          </div>
        }
      />
    </div>
  );
}

export default AddOption;
