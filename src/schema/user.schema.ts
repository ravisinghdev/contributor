import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
	name: string;
	email: string;
	password: string;
	role: "admin" | "user";
	createdAt: Date;
}

const UserSchema: Schema = new Schema(
	{
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		role: { type: String, enum: ["admin", "user"], default: "user" },
	},
	{ timestamps: true }
);

const User =
	mongoose.models.users || mongoose.model<IUser>("users", UserSchema);

export default User;
