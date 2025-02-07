import { Pool } from "pg";

// Load environment variables
const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false, // Required for Neon Postgres
	},
});

export default pool;
