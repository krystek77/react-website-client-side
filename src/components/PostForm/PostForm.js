/* eslint-disable no-unused-vars */
import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {createPost} from '../../actions/posts'
import FileBase64 from 'react-file-base64';
import {Box, TextField,Button} from '@mui/material';
import useStyles from './styles';

function PostForm(){
    const [postData,setPostData]= useState({creator:"",title:"",contents:"",tags:"",selectedImage:""})
    const classes = useStyles();
    const dispatch = useDispatch();
    
    const handlePostData=(e)=>{
        e.preventDefault();
        const formatedPostData = {...postData,tags:postData.tags.split(',')}
        dispatch(createPost(formatedPostData));
        clear();
    }
    const clear = () => {
        setPostData({creator:"",title:"",contents:"",tags:"",selectedImage:""})
    }

    return (
        <Box className={classes['post-form']} component="form" autoComplete="off" noValidate onSubmit={handlePostData}>
            <TextField className={classes['post-form__input']} fullWidth label="Autor" type="text" name="creator" variant="standard" value={postData.creator} onChange={(e)=>{setPostData({...postData,creator:e.target.value})}} />
            <TextField className={classes['post-form__input']} fullWidth label="Tytuł" type="text" name="title" variant="standard" value={postData.title} onChange={(e)=>{setPostData({...postData,title:e.target.value})}} />
            <TextField className={classes['post-form__input']} fullWidth label="Treść" type="text" name="contents" multiline minRows="10"  variant="standard" value={postData.contents} onChange={(e)=>{setPostData({...postData,contents:e.target.value})}} />
            <TextField className={classes['post-form__input']} fullWidth label="Tagi"  type="text" name="tags" variant="standard" value={postData.tags} onChange={(e)=>{setPostData({...postData,tags:e.target.value})}} />
            <div className={classes['post-form__file']}>
                <FileBase64 type="file" multiple={false} onDone={({base64})=>setPostData({...postData,selectedImage:base64})} />
            </div>
            <Button className={`${classes['post-form__btn']} ${classes['post-form__btn--submit']}`} fullWidth type="submit" variant="contained" size="large">wyślij</Button>
            <Button className={`${classes['post-form__btn']} ${classes['post-form__btn--clear']}`} fullWidth type="button" onClick={clear}  variant="contained" size="medium">wyczyść</Button>
        </Box>
    )
}

export default PostForm;