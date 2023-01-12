import "./Question.css";
import {
  Typography,
  ListItem,
  ListItemText,
  TextField,
  AccordionSummary,
  Accordion,
} from "@mui/material";

import ShortTextIcon from "@mui/icons-material/ShortText";
function AllQuestions(props) {
  let questions = props.questions;
  let toggleOne = props.toggleOne;
  return questions.map((ques, i) => (
    <Accordion
      variant="filled"
      expanded={true}
      onClick={() => {
        toggleOne(i);
      }}
    >
      <AccordionSummary
        aria-controls="panella-content"
        id="panella-header"
        elevation={1}
        style={{ width: "100%" }}
      >
        <div className="saved_questions">
          <Typography
            style={{
              fontSize: "15px",
              fontweight: "400",
              letterSpacing: ".1px",
              lineHeight: "24px",
              paddingBottom: "8px",
              textAlign: "left",
              marginLeft: "5px",
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
                  style={{ marginLeft: "10px", marginRight: "10px" }}
                  disabled
                />
              ) : (
                <ShortTextIcon style={{ marginRight: "10px" }} />
              )}

              <ListItem>
                <ListItemText
                  primary={ques.options[j].optionText}
                 
                />
              </ListItem>
            </div>
          ))}
        </div>
      </AccordionSummary>
    </Accordion>
  ));
}

export default AllQuestions;
