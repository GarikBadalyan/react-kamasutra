
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2021/09/17/08/40/lake-6632026__340.jpg" alt=""/>
            </div>
            <div className={s.item}>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo