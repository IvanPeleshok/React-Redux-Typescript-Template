import React, { useState } from 'react';
import { File } from '../../CustomFeld/CustomFile';
export const ImageUpload = () => {

    const [file, setFile] = useState(null);

    // submit buttom 
    // const handleSubmit = async () => {
    //     const formData = new FormData();
    //     formData.append("image", file);
    //     try {
    //         const response = await apiEdit.editPhoto(url, formData, {
    //             "Content-Type": 'multipart/form-data'
    //         });
    //     }

    //     catch {
    //         console.log('Edit photo error')
    //     }
    // }


    return (
        <>
            <File name={'photo'} setFile={setFile} fileID='0' />
        </>
    )
}


