import s from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = () => {
    return (
        <div>
            MyPosts
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
    <div className={s.posts}>
        <Post messages = 'How tu you' name = 'like1'/>
        <Post messages = 'what is your name' name = 'like2'/>
        <Post messages = 'Inche qo anun@' name = 'loke3' />
        <Post messages = 'AAAAAAAAAAAAAA' name = 'like4' />
        <Post name = 'like5555 ' age = ' AAA34'/>
        <Post anun = 'Garik' azganun = 'Badalyan' />
    </div>
</div>
    )
}

export default MyPosts