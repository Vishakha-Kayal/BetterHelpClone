import Doctor from "../models/doctor.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const registerDoctor = asyncHandler(async (req, res) => {
    const { name, email, password, phone, gender } = req.body
    if (!email || !name || !password || !phone || !gender) {
        throw new ApiError(400, "All fields are required");
    }
    const uploadedFiles = req.uploadedFiles || [];
    const identityCardFile = uploadedFiles.find(
        file =>
            file?.public_id &&
            req.files.license[0].originalname ===
            `${file.original_filename}.${file.format}`
    );
    const doctorPhotoFile = uploadedFiles.find(
        file =>
            file?.public_id &&
            req.files.photo[0].originalname ===
            `${file.original_filename}.${file.format}`
    );

    const licenseUrl = identityCardFile ? identityCardFile.secure_url : null;
    const doctorPhotoUrl = doctorPhotoFile ? doctorPhotoFile.secure_url : null;

    const doctor = await new Doctor({
        name,
        email,
        password,
        phone,
        gender,
        license: licenseUrl,
        photo: doctorPhotoUrl
    })

    try {
        await doctor.save();
        return res
            .status(201)
            .json(new ApiResponse(201, doctor, true, "doctor registered successfully"));
    } catch (error) {
        return res
            .status(500)
            .json(
                new ApiResponse(
                    500,
                    null,
                    "An error occurred while registering the doctor."
                )
            );
    }
})