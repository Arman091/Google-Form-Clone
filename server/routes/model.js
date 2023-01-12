
const mongoose= require("mongoose");

const FormSchema = new mongoose.Schema(
  {
    questions: [
      {
        questionText: String,
        questionType: String,

        options: [
          {
            optionText: String,
          },
        ],
        open: { type: Boolean, default: false },
        required: { type: Boolean, default: false },
      },
    ],
    questionType: String,
    doc_name: String,
    doc_desc: String,
    form_id: {type:Number},
  },
  { timestamps: true }
);

module.exports = mongoose.model("forms", FormSchema);