
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/preloader";


const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src="https://img.freepik.com/free-photo/wide-angle-shot-of-a-single-tree-growing-under-a-clouded-sky-during-a-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg" alt=""/>
            </div>
            <div className={s.item}>
                <img src={props.profile.photos.large}/>
                <div>
                    {props.profile.lookingForAJobDescription}
                </div>
                <div>
                    {props.profile.fullName}
                </div>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo