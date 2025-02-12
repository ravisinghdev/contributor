import mongoose from "mongoose";

const connectDb = async (): Promise<void> => {
	try {
		if (!process.env.DATABASE_URL) {
			throw new Error("DATABASE_URL is not defined in environment variables.");
		}

		const connection = await mongoose.connect(process.env.DATABASE_URL);

		console.log(`MongoDB Connected: ${connection.connection.host}`);
	} catch (error) {
		console.error("Error while connecting to the database:", error);
		process.exit(1);
	}
};

export default connectDb;
