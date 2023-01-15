import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useRef } from "react";
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

  let id = props.id;
  const nameref = useRef();
  const descref = useRef();

  let changeData = () => {
    let name = nameref.current.value;
    let desc = descref.current.value;
    dispatch({ type: "SET_DOC_ID", form_id: id });
    dispatch({ type: "SET_DOC_NAME", doc_name: name });
    dispatch({ type: "SET_DOC_DESC", doc_desc: desc });
    return state;
  };
  const navigate = useNavigate();

  const handleSubmit = async () => {
    
    let updateddata= await changeData();
    const params =updateddata
    const options = {
      method: "POST",
      body: JSON.stringify(params),
    };
     fetch("http://localhost:3001/form/upload", options)
      .then((response) => console.log(response.statusText))
      .then((response) => {
        alert("form submitted succesfully");
        navigate("/");
      });
  };
  return (
    <div>
      <h1>we are submitting form</h1>

      <div className="question_form">
        <br></br>

        <div className="section">
          <div className="question_title_section">
            <div className="question_form_top">
              <EditIcon className="SAVEDICON" />
              <span className="name_edit">Description </span>
              <input
                type="text"
                className="question_form_top_desc"
                placeholder="Change Description"
                ref={nameref}
              ></input>{" "}
              <EditIcon className="SAVEDICON" />
              <span className="desc_edit">Name</span>
              <input
                type="text"
                placeholder="Change Name"
                className="question_form_top_desc"
                ref={descref}
              ></input>
              <h4 type="text" textalign="center" className="summary">
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
                        {state.doc_name}
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
              <div className="my_data_buttons">
                <Button variant="contained" size="small" onClick={handleSubmit}>
                  Confirm
                </Button>
                <Button variant="contained" size="small" onClick={changeData}>
                  preview ChANGED Data
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Submit;
