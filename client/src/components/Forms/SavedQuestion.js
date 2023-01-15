import { Typography, TextField } from "@mui/material";
import ShortTextIcon from "@mui/icons-material/ShortText";
function SavedQuestion(props) {
  let ques = props.question;
  
  return (
    <div className="saved_questions">
      <Typography
        style={{
          fontSize: "15px",
          fontweight: "400",
          letterSpacing: ".1px",
          lineHeight: "24px",
          paddingBottom: "8px",
          textAlign: "left",
          marginLeft:"5px"
        }}
      >
        {ques.required ? (
          <TextField
            required
            id="standard-required"
            defaultValue={`${ques.questionText} *`}
            variant="standard"

          />
        ) : (
          <> {ques.questionText} </>
          )}
      </Typography>

      {ques.options.map((op, j) => (
        <div className="add_question_body" key={j}>
          {ques.questionType !== "text" ? (
            <input
              type={ques.questionType}
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
              style={{ marginLeft: "10px", marginRight: "10px" }}
              disabled
            />
          ) : (
            <ShortTextIcon style={{ marginRight: "10px" }} />
          )}
          <div className="my_box">
            <input
              type="text"
              className="text_input"
              placeholder="Answer"
              defaultValue={ques.options[j].optionText}
            ></input>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SavedQuestion;
