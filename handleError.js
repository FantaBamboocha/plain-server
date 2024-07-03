import mongoose from "mongoose";

const handleError = (res, error) => {
  if (error instanceof mongoose.Error.ValidationError) {
    res.status(400).json({ message: error.message, errors: error.errors });
  } else {
    res.status(500).json({ message: error.message });
  }
};

export default handleError;
