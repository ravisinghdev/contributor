import mongoose, { Schema, Document } from "mongoose";

export interface IGallery extends Document {
	title: string;
	description?: string;
	images: Array<string>; // Explicitly defining as an array of strings
	createdAt: Date;
}

const GallerySchema: Schema = new Schema(
	{
		title: { type: String, required: true },
		description: { type: String },
		images: { type: [String], required: true }, // Storing image URLs as strings
	},
	{ timestamps: true }
);

const Gallery =
	mongoose.models.galleries ||
	mongoose.model<IGallery>("Gallery", GallerySchema);

export default Gallery;
