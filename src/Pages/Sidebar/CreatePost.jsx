import { Box, Flex, Tooltip,Textarea,Input,useDisclosure,Button,CloseButton,Image } from "@chakra-ui/react";
import { CreatePostLogo } from "../../assets/constants";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
  } from '@chakra-ui/react'
import {BsFillImageFill} from 'react-icons/bs'
import { useRef, useState } from "react";
import usePreviewimg from "../../hooks/usePreviewimg";
import userAuthStore from "../../store/authStore";
import usePostStore from "../../store/postStore";
import useUserProfileStore from "../../store/userProfileStore";
import { useLocation } from "react-router-dom";
import { addDoc, arrayUnion, collection, doc, updateDoc } from "firebase/firestore";
import { firestore, storage } from "../../firebase/firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { toast } from "react-toastify";
const CreatePost = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [caption,setCaption] = useState('')
	const imageRef= useRef(null);
	const {selectedFile,handleImageChange,setSelectedFile} = usePreviewimg();
	const {isLoading,handleCreatePost}= useCreatePost();
	const handlePostCreation = async ()=>{
		try {
			await handleCreatePost(selectedFile,caption);
			onClose();
			setCaption("")
			setSelectedFile(null);
		} catch (error) {
			console.log(error.message)
		}
	};

	return (
		<>
			<Tooltip
				hasArrow
				label={"Create"}
				placement='right'
				ml={1}
				openDelay={500}
				display={{ base: "block", md: "none" }}
			>
				<Flex
					alignItems={"center"}
					gap={4}
					_hover={{ bg: "whiteAlpha.400" }}
					borderRadius={6}
					p={2}
					w={{ base: 10, md: "full" }}
					justifyContent={{ base: "center", md: "flex-start" }}
					onClick={onOpen}
				>
					<CreatePostLogo />
					<Box display={{ base: "none", md: "block" }}>Create</Box>
				</Flex>
			</Tooltip>
			<Modal isOpen={isOpen} onClose={onClose} size='xl'>
				<ModalOverlay />

				<ModalContent bg={"black"} border={"1px solid gray"}>
					<ModalHeader>Create Post</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<Textarea placeholder='Post caption...' 
						value={caption}
						onChange={(e)=>setCaption(e.target.value)}
						/>

						<Input type='file' hidden ref={imageRef}
						onChange={handleImageChange}
						/>

						<BsFillImageFill
						onClick={()=>imageRef.current.click()}
							style={{ marginTop: "15px", marginLeft: "5px", cursor: "pointer" }}
							size={16}
						/>
						{
							selectedFile && (
								<Flex mt={5} w={"full"} position={"relative"} justifyContent={"center"} >
									<Image src={selectedFile} alt='Selected img' />
									<CloseButton
										position={"absolute"}
										top={2}
										right={2}
										onClick={()=>{
											setSelectedFile("");
										}}
									/>
								</Flex>
							)
						}
					</ModalBody>

					<ModalFooter>
						<Button mr={3} onClick={handlePostCreation} isLoading={isLoading}  >Post</Button>
					</ModalFooter>
				</ModalContent>
			</Modal> 
		</>
	);
};

export default CreatePost;


function useCreatePost(){
	const [isLoading,setIsLoading] = useState(false);
	const authUser = userAuthStore((state)=>state.user);
	const createPost = usePostStore(state=>state.createPost)
	const addPost = useUserProfileStore(state=>state.addPost)
	const {pathname} = useLocation()
	
	
	const handleCreatePost = async (selectedFile,caption)=>{
		if(isLoading) return;
		if(!selectedFile) throw new Error('Please select an image')
		setIsLoading(true);
		const newPost ={
			caption:caption,
			likes:[],
			comments:[],
			createdAt:Date.now(),
			createdBy:authUser.uid,
		}
		try{
			const postDocRef = await addDoc(collection(firestore,"posts"),newPost);
			const userDocRef = doc(firestore,"users",authUser.uid);
			const imageRef = ref(storage,`posts/${postDocRef.id}`)
			await updateDoc(userDocRef,{posts:arrayUnion(postDocRef.id)});
			await uploadString(imageRef,selectedFile,"data_url")



			const downloadURL = await getDownloadURL(imageRef);
			await updateDoc(postDocRef,{imageURL:downloadURL});


			newPost.imgURL=downloadURL;
			createPost({...newPost,id:postDocRef.id});
			addPost({...newPost,id:postDocRef.id})
			toast.done("Post created Succesfully")
		}catch(error){
			console.log(error.message)
		}
		finally{
			setIsLoading(false);
		}
	}
	return {isLoading,handleCreatePost};
}


