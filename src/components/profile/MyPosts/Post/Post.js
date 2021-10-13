import s from "./Post.module.css";


const Post = (props) => {
    // console.log(props.message)
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFUGYnfwWubPdcPbkc35TSaHA5qQarlYhew&usqp=CAU"
                alt=""/>
            {props.messages}
            {props.anun} , {props.azganun}
            <div>
                <span>{props.name}</span>
                <span>{props.age}</span>
            </div>
        </div>
    )
}

export default Post