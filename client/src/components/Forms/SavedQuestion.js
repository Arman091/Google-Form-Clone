import { Typography, TextField } from "@mui/material";
import ShortTextIcon from "@mui/icons-material/ShortText";
function SavedQuestion(props) {
  let ques = props.question;
  console.log(props)
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
            value={`${ques.questionText} *`}
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
          <div>
            <input
              type="text"
              className="text_input"
              placeholder="Answer"
              value={ques.options[j].optionText}
            ></input>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SavedQuestion;
