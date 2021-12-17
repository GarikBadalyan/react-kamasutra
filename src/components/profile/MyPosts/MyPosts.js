import React from "react";
import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {

    let postElement = props.postData.map( (elem) => {
        return <Post messages = {elem.messages} likeCount = {elem.likeCount}/>
    })

    let newPostElement = React.createRef()

    let addPost1 = () => {
        let text = newPostElement.current.value
       props.addPost(text);
        newPostElement.current.value = '';
    }

    return (
        <div className={s.postBlock}>
            <h2> MyPosts </h2>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={ addPost1 }>Add post</button>
                </div>
            </div>
    <div className={s.posts}>
        {postElement}
        {/*<Post messages = {postData[0].messages} likeCount = {postData[0].likeCount}/>*/}
        {/*<Post messages = {postData[1].messages} likeCount = {postData[1].likeCount}/>*/}
        {/*<Post messages ={postData[2].messages} likeCount = {postData[2].likeCount}/>*/}
        {/*<Post messages = {postData[3].messages} likeCount = {postData[3].likeCount} />*/}
        {/*<Post name =  {postData[4].name} age = {postData[4].age} />*/}
        {/*<Post anun = 'Garik' azganun = 'Badalyan' />*/}
    </div>
</div>
    )
}

export default MyPosts