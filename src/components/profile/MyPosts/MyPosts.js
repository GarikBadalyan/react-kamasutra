import s from './MyPosts.module.css'
import Post from './Post/Post'

let postData = [
    {id:"1", messages:"How tu you111'",likeCount:"000"},
    {id:"2", messages:"what is your name222",likeCount:"10"},
    {id:"3", messages:"Inche qo anun@",likeCount:"20"},
    {id:"4", messages:"AAAAAAAAAAAAAA",likeCount:"30"},
    {id:"5", name:"like5555 ",age:"AAA34"},
    {id:"6", anun:"Garik",azganun:"Badalyan"},
]

let postElement = postData.map( (elem) => {
    return <Post messages = {elem.messages} likeCount = {elem.likeCount}/>
})

const MyPosts = () => {
    return (
        <div className={s.postBlock}>
            <h2> MyPosts </h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
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