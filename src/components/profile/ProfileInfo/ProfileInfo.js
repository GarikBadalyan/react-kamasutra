
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://img.freepik.com/free-photo/wide-angle-shot-of-a-single-tree-growing-under-a-clouded-sky-during-a-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg" alt=""/>
            </div>
            <div className={s.item}>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo