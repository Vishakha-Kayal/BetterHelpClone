import { v2 as cloudinary } from "cloudinary"
import fs from "fs"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadFileOnCloudinary = async function (localFilePath) {
    try {
        if (!localFilePath) {
            console.log("No file path provided");
            return null;
        }
        console.log("Attempting to upload file:", localFilePath);
        
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });
        
        console.log("File uploaded successfully. Response:", response);
        return response;
    } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        try {
            fs.unlinkSync(localFilePath); 
            console.log("Temporary file removed");
        } catch (unlinkError) {
            console.error("Error removing temporary file:", unlinkError);
        }
        return null;
    }
}

export { uploadFileOnCloudinary }