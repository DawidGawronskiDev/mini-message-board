import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
      minlength: 3,
      maxLength: 32,
    },
    text: {
      type: String,
      required: true,
      minlength: 3,
      maxLength: 255,
    },
    added: {
      type: Date,
      default: Date.now,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
