import mongoose, { Schema } from "mongoose";

export interface IContribution extends Document {
	user: mongoose.Types.ObjectId;
	amount: number;
	status: "pending" | "approved" | "rejected";
	createdAt: Date;
}

const ContributionSchema: Schema = new Schema(
	{
		user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
		amount: { type: Number, required: true },
		status: {
			type: String,
			enum: ["pending", "approved", "rejected"],
			default: "pending",
		},
	},
	{ timestamps: true }
);

const Contribution =
	mongoose.models.contributions ||
	mongoose.model<IContribution>("contributions", ContributionSchema);

export default Contribution;
