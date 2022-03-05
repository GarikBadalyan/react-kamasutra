const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'


let initialState = {
    users: [],
    pageSize:5,
    totalUsersCount: 6,
    currentPage:4,// @ntacik ej@ aragin@ :
    isFetching: false
}

// let initialState = {
//     users: [
//         {id: 1, photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Dmitry_Nagiev_2017_3.jpg/220px-Dmitry_Nagiev_2017_3.jpg',
//             followed:false, fullName: "Garik B", status:"I am a boss", location:{city:"Erevan", country:"Armenia"}},
//         {id: 2, photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Dmitry_Nagiev_2017_3.jpg/220px-Dmitry_Nagiev_2017_3.jpg',
//             followed:true, fullName: "Narek A", status:"AAAAAAAAA", location:{city:"Moscow", country:"Russia"}},
//         {id: 3, photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Dmitry_Nagiev_2017_3.jpg/220px-Dmitry_Nagiev_2017_3.jpg',
//             followed:false, fullName: "Alberta A", status:"BBBBBBBBB", location:{city:"Berlin", country:"Germany"}},
//     ],
// }

const usersReducer = (state = initialState, action) => {
    console.log('action.userId===433', action.userId)
    console.log('action=FFF===', action)
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state, // piti state-@ qopi anenq vor karoxananq meji objekt@ kopy anenq
                users: state.users.map(usr => {
                    console.log('usr.id==ttt===', usr.id)
                    if (usr.id === action.userId) { // es if -i imast@ ayn e vor gtnenq mer click arac element@
                        return {...usr,  // ete id ham@nknum e veradarcnum enq copy-n poxvac tesqov : es true -i
                        followed: true                     // darcnelu imastn ayn e vor gna ej@ nkarveluc stugi ete true - e
                        }                                // buttoni mej gri unfollow ete false -e follow
                    }
                    return usr // ete chi ham@nknum id nuyn bann enq veradarcnum
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(usr => {
                    if (usr.id === action.userId) {
                        console.log('usr.id=', usr.id)
                        console.log('action.userId=', action.userId)
                        return {...usr, followed: false}
                    }
                    return usr // ete chi ham@nknum id nuyn bann enq veradarcnum
                })
            }
        }
        case SET_USERS: {
            // console.log('BBBBBBBBBBBBBBBB state=', state)
            // console.log('AAAAAAAAAAAAAAAA action=', action)
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
            ...state, currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state, totalUsersCount:action.count
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching:action.isFetching
            }
        }
        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId:userId});
export const unFollow = (userId) => ({type: UNFOLLOW, userId:userId });

export const setUser = (users) => {
    console.log('setUserAC-i users', users)
    return {
        type: SET_USERS,
        users:users
    }
}
export const setCurrentPage = (currentPage) => ({type:SET_CURRENT_PAGE,currentPage:currentPage})
export const setUsersTotalCount = (totalUsersCount) => ({type:SET_TOTAL_USERS_COUNT, count:totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching})


export default usersReducer