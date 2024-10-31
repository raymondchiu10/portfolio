import { v2 as cloudinary } from "cloudinary";

const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME as string;
const apiKey = import.meta.env.VITE_CLOUDINARY_API_KEY as string;
const apiSecret = import.meta.env.VITE_CLOUDINARY_API_SECRET as string;

if (cloudName && apiKey && apiSecret) {
	cloudinary.config({
		cloud_name: cloudName,
		api_key: apiKey,
		api_secret: apiSecret,
	});
} else {
	throw new Error("Cloudinary environment variables are not defined");
}
