import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadFileOnCloudinary = async function(localFilePath) {
  try {
    if (!localFilePath) {
      console.log("No file path provided");
      return null;
    }
    console.log("Attempting to upload file:", localFilePath);

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // console.log("File uploaded successfully. Response:", response);
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
};

const uploadMultipleFiles = async (req, res, next) => {
  const files = req.files;
  // console.log("uploadMultipleFiles req.files = ", files);

  if (!files || files.length === 0) {
    return res.status(400).send("No files uploaded.");
  }

  try {
    const uploadPromises = [];

    if (Array.isArray(files.identityCard)) {
        uploadPromises.push(uploadFileOnCloudinary(files?.identityCard[0]?.path));
    }

    if (Array.isArray(files.farmerPhoto)) {
      files.farmerPhoto.forEach(file => {
        uploadPromises.push(uploadFileOnCloudinary(file.path));
      });
    }

    if(Array.isArray(files.photo)){
      uploadPromises.push(uploadFileOnCloudinary(files?.photo[0]?.path));
    }

    if(Array.isArray(files.license)){
      uploadPromises.push(uploadFileOnCloudinary(files?.license[0]?.path))
    }

    const results = await Promise.all(uploadPromises);
    req.uploadedFiles = results; 
    next(); 
  } catch (error) {
    console.error("Error uploading files:", error);
    res.status(500).send("Error uploading files.");
  }
};

const uploadStudentFiles = async (req, res, next) => {
  const files = req.files;
  console.log("uploadMultipleFiles req.files = ", files);

  if (!files || files.length === 0) {
    return res.status(400).send("No files uploaded.");
  }

  try {
    const uploadPromises = [];

    if (Array.isArray(files.identityCard)) {
        uploadPromises.push(uploadFileOnCloudinary(files?.identityCard[0]?.path));
    }

    if (Array.isArray(files.studentPhoto)) {
      files.studentPhoto.forEach(file => {
        uploadPromises.push(uploadFileOnCloudinary(file.path));
      });
    }

    const results = await Promise.all(uploadPromises);
    req.uploadedFiles = results; 
    next(); 
  } catch (error) {
    console.error("Error uploading files:", error);
    res.status(500).send("Error uploading files.");
  }
};
export { uploadFileOnCloudinary, uploadMultipleFiles ,uploadStudentFiles};
