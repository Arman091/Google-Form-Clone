import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@mui/material";

import { useParams } from "react-router";
import { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import "./Question.css";
import "./FormHeader.css";
import AddQuesType from "./AddQuesType";
import AddOption from "./AddOption";
import Footer from "./Footer";
import SavedQuestion from "./SavedQuestion";
import QuesBody from "./QuesBody";
import Answer from "./Answer.js";
import AllQuestions from "./AllQuestions";
import Submit from "./submit";
function Questions() {
  const { id } = useParams();
  const [isViewform, setisviewform] = useState(false);
  const [submit, setsubmit] = useState(false);
  const dispatch = useDispatch();
  const [questions, setquestion] = useState([
    {
      questionText: "",
      questionType: "radio",
      options: [
        { optionText: "" },
        { optionText: "" },
        { optionText: "" },
        { optionText: "" },
      ],
      answer: false,
      answerKey: "",
      points: 0,
      open: true,
      required: false,
    },
  ]);

  
  // View saved Questions

  function viewQuestionPaper() {
    setisviewform((prevstate) => {
      return !prevstate;
    });
  }
  function SaveForm() {
    setsubmit(true);

    dispatch({ type: "SET QUESTIONS", questions: questions });

    
  }
  function changeQuestion(text, i) {
    let updatedQs = [...questions];
    updatedQs[i].questionText = text;
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
    console.log("triggred me copy");
    let qs = [...questions];
    let newQuestion = qs[i];

    setquestion([...questions, newQuestion]);
    toggleAll();
  }

  function deleteQuestion(i) {
    let qs = [...questions];
    if (questions.length > 1) {
      qs.splice(i, 1);
    }
    setquestion(qs);
  }
  function requiredQuestion(i) {
    let reqQuestion = [...questions];
    reqQuestion[i].required = !reqQuestion[i].required;
    console.log(reqQuestion[i].required + "" + i);
    setquestion(reqQuestion);
  }

  function addMoreQuestion() {
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
      if (i === qs.length - 1) {
        qs[qs.length].open = true;
      }
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
    }
    setquestion(qs);
  }

  function setOptionAnswer(ans, qno) {
    var Questions = [...questions];

    Questions[qno].answerKey = ans;
    setquestion(Questions);
    console.log(ans + "option is set for Question " + qno);
  }

  function setOptionPoints(points, qno) {
    var Questions = [...questions];

    Questions[qno].points = points;

    setquestion(Questions);
    console.log(points + " point are set for this question " + qno);
  }

  function doneAnswer(i) {
    let ansQuestions = [...questions];

    ansQuestions[i].answer = !ansQuestions[i].answer;

    setquestion(ansQuestions);
  }

  function AddAnswer(i) {
    let answerQuestion = [...questions];
    answerQuestion[i].answer = !answerQuestion[i].answer;
    setquestion(answerQuestion);
  }
  //+++++++++++++++++++++++=============Main Jsx Component++++++++++++=======================
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
            {/*++++++++++++++++++++ SAVED QUESTION TOP HERE++++++++++++++++  */}
            {questions[i].open ? <SavedQuestion question={ques} /> : ""}
          </AccordionSummary>
          {/*++++++++++++++++++++ Question  EDITING EDITING SECTION  STARTS HERE++++++++++++++++  */}
          <div className="question_boxes">
            {!questions[i].answer ? (
              <AccordionDetails className="add_question">
                <AddQuesType
                  changeQuestion={changeQuestion}
                  addQuestionType={addQuestionType}
                  index={i}
                  ques={ques}
                />
                {/*++++++++++++++++++++ Question options SECTION HERE++++++++++++++++  */}
                <QuesBody
                  i={i}
                  ques={ques}
                  changeOption={changeOption}
                  removeOption={removeOption}
                />

                {ques.options.length < 5 ? (
                  <AddOption index={i} ques={ques} addOption={addOption} />
                ) : (
                  ""
                )}
                <Footer
                  copyQuestion={copyQuestion}
                  requiredOption={requiredQuestion}
                  deleteQuestion={deleteQuestion}
                  AddAnswer={AddAnswer}
                  index={i}
                />
              </AccordionDetails>
            ) : (
              <Answer
                ques={ques}
                setOptionPoints={setOptionPoints}
                setOptionAnswer={setOptionAnswer}
                doneAnswer={doneAnswer}
                index={i}
              />
            )}
            {!ques.answer ? (
              <div className="question_edit">
                <AddCircleOutlineIcon
                  onClick={addMoreQuestion}
                  color="secondary"
                />
                <OndemandVideoIcon />
                <CropOriginalIcon />
                <TextFieldsIcon />
              </div>
            ) : (
              ""
            )}
          </div>
        </Accordion>
      </div>
    ));
  }

  return (
    <Fragment>
      {!submit ? (
        <div className="question_form">
          <br></br>
          <div className="section">
            <div className="question_title_section">
              <div className="question_form_top">
                <input
                  type="text"
                  className="question_form_top_name"
                  placeholder="Description"
                
                ></input>

                <h5 type="text" className="question_form_top_desc">
                  Description <EditIcon className="icon" />
                </h5>
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
            {!isViewform ? (
              questionsUI()
            ) : (
              <AllQuestions questions={questions} toggleOne={toggleOne} />
            )}
          </div>
        </div>
      ) : (
        <Submit id={id} />
      )}
    </Fragment>
  );
}

export default Questions;
