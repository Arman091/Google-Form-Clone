import ShortTextIcon from "@mui/icons-material/ShortText";

import { Button } from "@mui/material";

import { AccordionDetails } from "@mui/material";

function Answer(props) {
  let i = props.index;
  let setOptionPoints = props.setOptionPoints;
  let setOptionAnswer = props.setOptionAnswer;
  let doneAnswer = props.doneAnswer;
  let ques = props.ques;
 
  return (
    <AccordionDetails className="add_question">
      <div className="top_header">Choose Option To Set Answer</div>
      <div>
        <div className="answer_top">
          <input
            type="text"
            className="question "
            placeholder="Question"
            value={ques.questionText}
            disabled
          />
          <span className="answer_setpoints">SetPoints</span>
          <input
            type="number"
            className="points"
            min="0"
            step="1"
            placeholder="0"
            onChange={(e) => {
              setOptionPoints(e.target.value, i);
            }}
          />
        </div>
        {ques.options.map((op, j) => (
          <div
            className="add_question_body"
            key={j}
            style={{
              marginLeft: "8px",
              marginBottom: "10px",
              marginTop: "5px",
            }}
          >
            <div key={j}>
              <div style={{ display: "flex" }} className="">
                <div className="form-check">
                  <label
                    style={{ fontSize: "13px" }}
                    onClick={() => {
                      setOptionAnswer(ques.options[j].optionText, i);
                    }}
                  >
                    {ques.questionType !== "text" ? (
                      <input
                        type={ques.questionType}
                        name={ques.questionText}
                        className="form-check-input"
                        value="option3"
                        required={ques.required}
                        style={{
                          marginRight: "10px",
                          marginBottom: "10px",
                          marginTop: "5px",
                        }}
                      />
                    ) : (
                      <ShortTextIcon style={{ marginRight: "10px" }} />
                    )}
                    {ques.options[j].optionText}
                  </label>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="add_question_body">
          <Button
            size="small"
            style={{
              textTransform: "none",
              color: "#4285f4",
              fontSize: "13px",
              fontweight: "600",
            }}
          >
            Add Answer Feedback
          </Button>
        </div>
        <div className="add_question_bottom">
          <Button
            variant="success"
            onClick={() => {
              doneAnswer(i);
            }}
          >
            Done
          </Button>
        </div>
      </div>
    </AccordionDetails>
  );
}

export default Answer;
