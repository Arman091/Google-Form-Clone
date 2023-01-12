 let initialState = {
   questions: [
     {
       questionText: "Question",
       questionType: "radio",
       options: [{ optionText: "Option 1" }],
       open: true,
       required: false,
     },
   ],
   questionType: "radio",
   doc_name: "Untitled form ",
   doc_desc: " Untitled",
   form_id:234525
 };
 
export const actionTypes = {
  SET_QUESTIONS: "SET QUESTIONS",
  CHANGE_TYPE: "CHANGE_TYPE",
  SET_DOC_NAME: "SET_DOC_NAME",
  SET_DOC_DESC: "SET_DOC_DESC",
  SET_DOC_ID:"SET_DOC_ID"
};
export const reducer = (state = initialState, action) => {
  // if (action.type === actionTypes.SET_QUESTIONS) {
  //   let newquestions = action.questions
  //   let updatedquestions = state.questions.concat(newquestions)
  //   return updatedquestions;
  //  }
  switch (action.type) {
    case actionTypes.SET_QUESTIONS:
      return {
        ...state,
        questions: action.questions,
      }
    case actionTypes.CHANGE_TYPE:
      return {
        ...state,
        questionType: action.questionType,
      };
    case actionTypes.SET_DOC_NAME:
      return { ...state, doc_name: action.doc_name }
    case actionTypes.SET_DOC_DESC:
      return { ...state, doc_desc: action.doc_desc }
    case actionTypes.SET_DOC_ID:
      return{...state,form_id:action.form_id}
    default:
      return state;
  }

};

export default reducer;