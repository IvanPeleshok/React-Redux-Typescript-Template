import React, { FC, useState } from "react"
import { File } from "../../CustomFormik/CustomFile"
export const ImageUpload: FC = () => {
  const [file, setFile] = useState<null | File>(null)

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
      <File name={"photo"} setFile={setFile} fileID="0" />
    </>
  )
}
