import React, { useState } from 'react'
import { toast } from 'react-toastify';

function usePreviewimg() {
  const [selectedFile,setSelectedFile] = useState(null)
  const maxFileSizeInBytes = 2*1024*1024;
  const handleImageChange = (e)=>{
    const file = e.target.files[0]
    if(file && file.type.startsWith("image/")){
        if(file.size> maxFileSizeInBytes){
            toast.error("File size must be within 2MB")
            return;
        }
        const reader = new FileReader();
        reader.onloadend=()=>{
            setSelectedFile(reader.result)
        }
        reader.readAsDataURL(file)
    }
    else{
        toast.error("Please select an image file")
        setSelectedFile(null)
    }
  }
  return {selectedFile,handleImageChange,setSelectedFile};
};

export default usePreviewimg
