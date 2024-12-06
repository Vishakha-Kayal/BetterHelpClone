import { useRef, useState } from 'react'
import Heading from './Heading'
import Button from '../Button'
import { useVerification } from '../../context/verifyToken'
import { decodeToken } from '../../utils/decodeToken'
import { updateProfileImage } from '../../api/userAccountsettings'
const MyProfile = () => {
    const { decodedToken, getUserIdUserType,logout } = useVerification()
    const fileInputRef = useRef(null);
    const [imageSrc, setImageSrc] = useState(decodedToken.profileImage); // State to hold the image source
    const [updatedImg, setupdatedImg] = useState(null)
    const handleFileUpload = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
            // console.log(fileInputRef) // Trigger the file input click
        }
    }; 

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) { 
            const newImageSrc = URL.createObjectURL(file);
            setImageSrc(newImageSrc);
            setupdatedImg(file)
        }
    };

    const onSaveImageUpdate = async () => {
        const { formattedUserType, userId } = getUserIdUserType()
        const response = await updateProfileImage({  userId,formattedUserType, updatedImg :updatedImg})
        if (response.data.success === true) {
            alert("image updated succesfully.")
            logout()
        }
    }
    return (
        <div className='bg-textPrimary my-5 px-9 py-11  flex flex-col gap-3 rounded-md' >
            <Heading content="My Profile Picture" />
            <div className='flex flex-col items-center mb-4'>
                {imageSrc && ( // Render the image if it exists
                    <img src={imageSrc} alt="Uploaded" className='w-48 h-48 rounded-full' />
                )}
                <Button
                    paddingY="py-[0.4rem]"
                    text="text-[1.6rem]"
                    font="font-bold"
                    borderColor="border-[#007481]"
                    color="text-secondary rounded-md mt-8"
                    content="Upload An Image"
                    width="w-[28rem] md:w-[19rem]"
                    hoverbg="hover:bg-secondary hover:text-[#fff] transition all ease 1s cursor-pointer"
                    onClick={handleFileUpload}
                />
            </div>
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                accept="image/*"
                onChange={handleFileChange}
            />
            <Button
                bg="bg-secondary"
                paddingY="py-[0.6rem] "
                paddingX="lg:w-[15%]"
                text="text-[1.6rem] z-[99]"
                font="rounded-md"
                color="text-textPrimary border-none flex justify-center items-center"
                content="Save Changes"
                hoverbg="hover:bg-secondary  hover:text-white transition all ease 1s cursor-pointer"
                onClick={onSaveImageUpdate}
            />
        </div>
    )
}

export default MyProfile