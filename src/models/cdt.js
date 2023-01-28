import mongoose from "mongoose";

// modelo de cdt organizar
const CDTSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "El campo name es obligatorio"],
    },
    lastname: {
      type: String,
      required: [true, "El campo lastname es obligatorio"],
    },
    identificacion: {
      type: String,
      default: null,
      public_id: String,
      required: [true, "El campo lastname es obligatorio"],
    },
    email: {
      type: String,
      required: [true, "El campo email es obligatorio"],
    },
    // ciudad: {
    //   type: String,
    //   required: [true, "El campo ciudad es obligatorio"],
    //   unique: true,
    // },
    telefono: {
      type: Number,
      required: [true, "El campo telefono es obligatorio"],
    },
    user: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("CDT", CDTSchema);
