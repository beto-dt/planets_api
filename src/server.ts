import app from "./app.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load the env file based on the current environment
const currentEnv = process.env.NODE_ENV || "development";
const envFile = path.join(__dirname, `./../.env.${currentEnv}`);

// env variables
dotenv.config({ path: envFile });



const DB: string = process.env.MONGO_DB?.replace(
	"YJvDrRuzDCLyRYqjvUEfpLZsdenkIKIo",
	process.env.MONGO_DB_PASSWORD || "",
) as string;
mongoose
	.connect(DB, {
		dbName: "YouCanCode",
	})
	.then(() => {
		// eslint-disable-next-line no-console
		console.log(`MongoDB connected successfully`);
	})
	.catch((err) => {
		// eslint-disable-next-line no-console
		console.log(err);
	});

const PORT = parseInt(process.env.PORT || "3000");
app.listen(PORT, "0.0.0.0", () => {
	// eslint-disable-next-line no-console
	console.log(`Server running on port ${PORT}`);
});
