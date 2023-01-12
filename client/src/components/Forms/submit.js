import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useRef, useEffect } from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router";
function Submit(props) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  let myques = state.questions.length;
  let name = state.doc_name;
  let id = props.id;
  const nameref = useRef();
  const descref = useRef();
  function changeData() {
    let name = nameref.current.value;
    let desc = descref.current.value;
    dispatch({ type: "SET_DOC_ID", form_id: id });
    dispatch({ type: "SET_DOC_NAME", doc_name: name });
    dispatch({ type: "SET_DOC_DESC", doc_desc: desc });
  }
  const navigate = useNavigate();
  const handleSubmit = async () => {
    const params = state;
    const options = {
      method: "POST",
      body: JSON.stringify(params),
    };
    fetch("http://localhost:3001/form/upload", options)
      .then((response) => response.json())
      .then((response) => {
        alert("form submitted succesfully");
        navigate('/')
      });
  };
  return (
    <div>
      <h1>we are submitting form</h1>
      <div className="my_data_buttons">
        <Button variant="contained" size="medium" onClick={handleSubmit}>
          Confirm
        </Button>
        <Button variant="contained" size="medium" onClick={changeData}>
          Save ChANGED Data
        </Button>
      </div>
      <div className="question_form">
        <br></br>

        <div className="section">
          <div className="question_title_section">
            <div className="question_form_top">
              <EditIcon className="SAVEDICON" />
              <input
                type="text"
                className="question_form_top_desc"
                placeholder={state.doc_name}
                ref={nameref}
              ></input>{" "}
              <EditIcon className="SAVEDICON" />
              <input
                type="text"
                className="question_form_top_desc"
                placeholder="Change Form Description"
                ref={descref}
              ></input>
              <h4 type="text" textAlign="center" className="summary">
                Summary
              </h4>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left" colSpan={3}>
                        Description
                      </TableCell>
                      <TableCell align="center" colSpan={3}>
                        {state.doc_desc}
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell align="left" colSpan={3}>
                        Document Name
                      </TableCell>
                      <TableCell align="center" colSpan={3}>
                        {name}
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell align="left" colSpan={3}>
                        Total Questions
                      </TableCell>
                      <TableCell align="center" colSpan={3}>
                        {myques}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left" colSpan={3}>
                        Questions Type
                      </TableCell>
                      <TableCell align="center" colSpan={3}>
                        {state.questionType}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="left" colSpan={3}>
                        Forms id
                      </TableCell>
                      <TableCell align="center" colSpan={3}>
                        {props.id}
                      </TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Submit;
