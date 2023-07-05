import mongoose from "mongoose";
import IMovie from "types/movies";

const { Schema } = mongoose;

const thumbnailSchema = new Schema(
  {
    small: Schema.Types.String,
    medium: Schema.Types.String,
    large: Schema.Types.String,
  },
  { _id: false }
);

const movieSchema = new Schema<IMovie>({
  title: {
    type: Schema.Types.String,
    required: true,
  },
  thumbnail: {
    trending: thumbnailSchema,
    regular: thumbnailSchema,
  },
  year: {
    type: Schema.Types.Number,
    required: true,
  },
  category: {
    type: Schema.Types.String,
    required: true,
  },
  rating: {
    type: Schema.Types.String,
    required: true,
  },
  isBookmarked: {
    type: Schema.Types.Boolean,
    required: true,
  },
  isTrending: {
    type: Schema.Types.Boolean,
    required: true,
  },
});

const Movie = mongoose.model<IMovie>("Movie", movieSchema);

export default Movie;
