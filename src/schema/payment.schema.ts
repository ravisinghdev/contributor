import mongoose, { Schema } from "mongoose";

export interface IPayment extends Document {
	user: mongoose.Types.ObjectId;
	amount: number;
	paymentId: string;
	status: "success" | "failed" | "pending";
	createdAt: Date;
}

const PaymentSchema: Schema = new Schema(
	{
		user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
		amount: { type: Number, required: true },
		paymentId: { type: String, required: true, unique: true },
		status: {
			type: String,
			enum: ["success", "failed", "pending"],
			default: "pending",
		},
	},
	{ timestamps: true }
);

const Payment =
	mongoose.models.payments ||
	mongoose.model<IPayment>("Payment", PaymentSchema);

export default Payment;
