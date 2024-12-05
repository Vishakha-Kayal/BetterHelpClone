import { useRef, useState } from 'react'
import Heading from './Heading'
import Button from '../Button'
import { useVerification } from '../../context/verifyToken'
import { decodeToken } from '../../utils/decodeToken'
const MyProfile = () => {
    const { token, userType } = useVerification()
    const [decodedToken, setDecodedToken] = useState(token ? decodeToken(token) : null)
    const fileInputRef = useRef(null);
    const [imageSrc, setImageSrc] = useState(decodedToken.profileImage); // State to hold the image source

    const handleFileUpload = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click(); // Trigger the file input click
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const newImageSrc = URL.createObjectURL(file); // Create a URL for the uploaded file
            setImageSrc(newImageSrc); // Update the image source
            // Optionally, you can also handle the file upload to the server here
            console.log(file);
        }
    };
    return (
        <div className='bg-textPrimary my-5 px-9 py-11  flex flex-col gap-3 rounded-md' >
            <Heading content="My Profile Picture" />
            <div className='flex flex-col items-center mb-4'>
                {imageSrc && ( // Render the image if it exists
                    <img src={imageSrc} alt="Uploaded" className='w-48 h-48 rounded-full' />
                )}
                <Button
                    paddingY="py-[0.4rem]"
                    text="text-[1.8rem]"
                    font="font-bold"
                    color="text-secondary rounded-md mt-2"
                    content="Upload An Image"
                    width="w-[28rem] md:w-[19rem]"
                    hoverbg="border-[#007481] border-[1px] hover:bg-secondary hover:text-[#fff] transition all ease 1s cursor-pointer"
                    onClick={handleFileUpload}
                />
            </div>
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }} // Hide the file input
                onChange={handleFileChange} // Handle file change
            />
            <Button
                bg="bg-secondary"
                paddingY="py-[0.6rem]"
                paddingX="lg:w-[15%]"
                text="text-[1.6rem] z-[99]"
                font="rounded-md"
                color="text-textPrimary border-none flex justify-center items-center"
                content="Save Changes"
                hoverbg="hover:bg-secondary  hover:text-white transition all ease 1s cursor-pointer"

            />
        </div>
    )
}

export default MyProfile