
import FilterNoneIcon from "@mui/icons-material/FilterNone";

import { MoreVert } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";

import { IconButton, Button, Switch } from "@mui/material";


function Footer(props) {
  let copyQuestion = props.copyQuestion;
  let requiredOption = props.requiredOption;
  let deleteQuestion = props.deleteQuestion;
  let AddAnswer = props.AddAnswer;
  let i = props.index;
  return (
    <div className="add_footer">
      <div className="add_question_bottom_left">
        <Button
          variant="secondary"
          onClick={() => {
            AddAnswer(i);
          }}
        >
        Add Answer Key
        </Button>
      </div>
      <div className="add_question_bottom">
        <IconButton
          aria-label="Copy"
          onClick={() => {
            copyQuestion(i);
          }}
        >
          <FilterNoneIcon />
        </IconButton>
        <IconButton
          aria-label="Delete"
          onClick={() => {
            deleteQuestion(i);
          }}
        >
          <DeleteIcon />
        </IconButton>
        <span style={{ color: "#5f6368", fontSize: "13px" }}>Required </span>{" "}
        <Switch
          name="checked"
          color="primary"
          onChange={() => {
            requiredOption(i);
          }}
        />
        <IconButton aria-label="Copy">
          <MoreVert />
        </IconButton>
      </div>
    </div>
  );
}

export default Footer;
