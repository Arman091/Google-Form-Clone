import ShortTextIcon from "@mui/icons-material/ShortText";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import CloseIcon from "@mui/icons-material/Close";


function QuesBody(props) {
  let i = props.i;
  let ques = props.ques;
  let changeOption = props.changeOption;
  let removeOption = props.removeOption;
  return (
    <div>
     { ques.options.map((op, j) => (
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
            onChange={(e) => {
              changeOption(e, i, j);
            }}
          ></input>
        </div>

        <CropOriginalIcon style={{ color: "blue" }} />

        <CloseIcon
          style={{ cursor: "pointer" }}
          onClick={() => {
            removeOption(i, j);
          }}
        />
      </div>
      ))}
    </div>
  );
}

export default QuesBody;
