import CropOriginalIcon from "@mui/icons-material/CropOriginal";

import SubjectIcon from "@mui/icons-material/Subject";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import { Select, MenuItem } from "@mui/material";
function AddQuesType(props) {
  let changeQuestion = props.changeQuestion;
  let addQuestionType = props.addQuestionType;
  let i = props.index;
  let ques = props.ques;
  return (
    <div className="add_question_top">
      <input
        type="text"
        className="question"
        placeholder="Question"
        value={ques.questionText}
        onChange={(e) => {
          changeQuestion(e.target.value, i);
        }}
      ></input>
      <CropOriginalIcon style={{ color: "#5f6368" }} />{" "}
      <Select className="select" style={{ color: "#5f6368", fontSize: "13px" }}>
        <MenuItem
          id="text"
          value="Text"
          onClick={() => {
            addQuestionType(i, "text");
          }}
        >
          {" "}
          <SubjectIcon style={{ marginRight: "10px" }} /> Paragraph
        </MenuItem>
        <MenuItem
          id="checkbox"
          value="Checkbox"
          onClick={() => {
            addQuestionType(i, "checkbox");
          }}
        >
          <CheckBoxIcon
            style={{ marginRight: "10px", color: "#70757a" }}
            checked
          />
          Checkboxes
        </MenuItem>

        <MenuItem
          id="Radio"
          value="Radio"
          onClick={() => {
            addQuestionType(i, "radio");
          }}
        >
          <RadioButtonCheckedIcon
            style={{ marginRight: "10px", color: "#70757a" }}
            checked
            onClick={() => {
              addQuestionType(i, "radio");
            }}
          />
          Multiple Choice
        </MenuItem>
      </Select>
    </div>
  );
}

export default AddQuesType;
