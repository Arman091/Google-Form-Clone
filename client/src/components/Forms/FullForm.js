import Questions from "./MainPaper";
import FormHeader from "./FormHeader.js";
import FormTab from "./FormTab"
function FullForm() {
    return (
        <>
            <FormHeader />
            <FormTab/>
            <Questions/>
        </>
    )
}

export default FullForm;