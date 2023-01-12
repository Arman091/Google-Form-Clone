import ShortTextIcon from "@mui/icons-material/ShortText";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import CloseIcon from "@mui/icons-material/Close";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import AddTaskIcon from "@mui/icons-material/AddTask";
import FilterNoneIcon from "@mui/icons-material/FilterNone";

import { MoreVert } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";

import { IconButton, Button, Switch } from "@mui/material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

import { useParams } from "react-router";
import { useState } from "react";
import "./Question.css";
import QuestionTop from "./QuestionTop";
import AddOption from "./QuestionBody";

import Answer from "./answer";
import SavedQuestion from "./SavedQuestion";
//=======================Main Component====================================
function Questions() {
  const { id } = useParams();
  const [questions, setquestion] = useState([
    {
      questionText: "what is your name?",
      questionType: "radio",
      options: [
        { optionText: "arman" },
        { optionText: "arman" },
        { optionText: "arman" },
        { optionText: "arman" },
      ],
      answer: false,
      answerKey: "",
      points: 0,
      open: true,
      required: false,
    },
  ]);

  function changeQuestion(value, i) {
    let updatedQs = [...questions];
    updatedQs[i].questionText = value;
    setquestion(updatedQs);
  }

  function addQuestionType(i, type) {
    let question = [...questions];
    question[i].questionType = type;
    setquestion(question);
  }

  function changeOption(e, i, j) {
    let text = e.target.value;
    let optionQues = [...questions];
    optionQues[i].options[j].optionText = text;
    setquestion(optionQues);
  }

  function removeOption(optionno, j) {
    let removeoption = [...questions];
    if (removeoption[optionno].options.length > 1) {
      removeoption[optionno].options.splice(j, 1);
      setquestion(removeoption);
    }
  }

  function addOption(i) {
    let quesoption = [...questions];
    if (quesoption[i].options.length < 5) {
      quesoption[i].options.push({
        optionText: `option${quesoption[i].options.length + 1}`,
      });
    } else {
      alert("max-5 questions");
    }
    setquestion(quesoption);
  }

  function copyQuestion(i) {
    toggleAll();
    let qs = [...questions];
    let newQuestion = { ...qs[i] };
    qs.concat(newQuestion)
    setquestion(qs);
  }

  function deleteQuestion(i) {
    let qs = [...questions];
    if (questions.length > 1) {
      qs.splice(i, 1);
    }
    setquestion(qs);
  }
  function requiredOption(i) {
    let reqQuestion = [...questions];
    reqQuestion[i].required = !reqQuestion[i].required;
    console.log(reqQuestion[i].required + "" + i);
    setquestion(reqQuestion);
  }

  function addMoreQuestionField() {
    setquestion([
      ...questions,
      {
        questionType: "radio",
        options: [{ optionText: "option 1" }],
        open: true,
        required: false,
      },
    ]);
    toggleAll();
  }

  function toggleAll() {
    let qs = [...questions];
    for (let i = 0; i < qs.length; i++) {
      qs[i].open = false;
    }
    setquestion(qs);
  }
  function toggleOne(i) {
    let qs = [...questions];
    for (let k = 0; k < qs.length; k++) {
      if (k === i) {
        qs[k].open = true;
      } else {
        qs[k].open = false;
      }
      setquestion(qs);
    }
  }

  function setOptionAnswers(ans, qno) {
    var Questions = [...questions];

    Questions[qno].answerKey = ans;
    setquestion(Questions);
    console.log(ans,qno)
  }

  function setoptionPoints(points, qno) {
    var Questions = [...questions];

    Questions[qno].points = points;

    setquestion(Questions);
     console.log(points,+"hello from answer" +qno);
  }

  function doneAnswer(i) {
    let ansQuestions = [...questions];

    ansQuestions[i].answer = !ansQuestions[i].answer;

    setquestion(ansQuestions);
  }
  
  function addAnswer(i) {
    let answerQuestion = [...questions]
    answerQuestion[i].answer = !answerQuestion[i].answer;
    setquestion(answerQuestion)
  }
  //============ Main Rendering Component========================================
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  function questionsUI() {
    return questions.map((ques, i) => (
      <div>
        <Accordion
          variant="filled"
          expanded={questions[i].open}
          className={questions[i].open ? "+ add_border" : " + foo"}
          onChange={() => {
            toggleOne(i);
          }}
        >
          <AccordionSummary
            aria-controls="panella-content"
            id="panella-header"
            elevation={1}
            style={{ width: "100%" }}
          >
            {questions[i].open ? (
              <SavedQuestion question={ques} index={i} />
            ) : (
              ""
            )}
          </AccordionSummary>
          {questions[i].open ? (
            <div className="question_boxes">
                <AccordionDetails className="add_question">
              {/* {!questions[i].answer ? ( */}
                  {/* CUSTOMCOMPONENT-2 */}
                  <QuestionTop
                    index={i}
                    addQuestionType={addQuestionType}
                    addQuestion={changeQuestion}
                  />

                  {/* QuestionBody to be rendered */}
                  {ques.options.map((op, j) => (
                    <div className="add_question_body" key={j}>
                      {ques.questionType !== "text" ? (
                        <input type={ques.questionType} />
                      ) : (
                        <ShortTextIcon />
                      )}
                      <div>
                        <input
                          type="text"
                          className="text_input"
                          placeholder="Answer"
                          onChange={(e) => {
                            changeOption(e, i, j);
                          }}
                        ></input>
                      </div>
                      <CropOriginalIcon style={{ color: "#5f6368" }} />

                      <CloseIcon
                        onClick={() => {
                          removeOption(i, j);
                        }}
                      />
                    </div>
                  ))}
                  {/* CUSTOMCOMPONENT-3 ADDOPTION*/}
                  {ques.options.length < 5 ? (
                    <AddOption
                      question={ques}
                      index={i}
                      addoption={addOption}
                    />
                  ) : (
                    ""
                  )}
                  {/* CUSTOMCOMPONENT-4 */}
                  <div className="add_footer">
                    <div className="add_question_bottom_left">
                      <Button
                        variant="secondary"
                        onClick={() => {
                          addAnswer(i);
                        }}
                      >
                        Answer Key
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
                      <span style={{ color: "#5f6368", fontSize: "13px" }}>
                        Required{" "}
                      </span>{" "}
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
                </AccordionDetails>
              {/* ) : ( */}
                <Answer
                  setoption={setoptionPoints}
                  setOptionAnswer={setOptionAnswers}
                  doneAnswer={doneAnswer}
                  questions={questions}
                  index={i}
                />
              {/* )} */}
              <div className="question_edit">
                <AddTaskIcon onClick={addMoreQuestionField} />
                <OndemandVideoIcon />
                <CropOriginalIcon />
                <TextFieldsIcon />
              </div>
            </div>
          ) : (
            ""
          )}
        </Accordion>
      </div>
    ));
  }

  return (
    <>
      <div className="question_form">
        <br></br>
        <div className="section">
          <div className="question_title_section">
            <div className="question_form_top">
              <input
                type="text"
                className="question_form_top_name"
                placeholder={id}
              ></input>
              <input
                type="text"
                className="question_form_top_desc"
                placeholder="Form Description"
              ></input>
            </div>
          </div>
          {questionsUI()}
        </div>
      </div>
    </>
  );
}

export default Questions;
