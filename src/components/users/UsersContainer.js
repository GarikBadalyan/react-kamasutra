import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import {
    follow,
    setCurrentPage,
    setUser,
    setUsersTotalCount,
    toggleIsFetching,
    unFollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";

class UsersContainer extends React.Component {
    componentDidMount(){
        // console.log('componentDidMount=XXX===', )
        // alert('sarqvum e nor object') // aysinqn erb vor ej@ tarmacnum enq kam gnum enq orinak profile page kam Messages -i mej alert@ ashxatum e isk erb sexmum enq follow kam unfollow et vaxt el pererisovka chi gnum arajva pes rerender chi linum
        // stex props inchpes functiayi depqum avtomat galis e UsersContaineri migic inch uxarkum enq et el galisa

        // api -i migi page         ev api-i migi count@
        // aysinqn menq zapros aneluc asecinq qo page = mer propsic ekac currentPage -in isk count@ = props.pageSize-in
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                // debugger
                this.props.toggleIsFetching(false)
                console.log('items =====333=', response.data.items)
                this.props.setUser(response.data.items)
            })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)// stex ushadir menq get parametr page-in talis enq pageNumber@
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.toggleIsFetching(false)
                this.props.setUser(response.data.items)
                // debugger
                console.log('response.data.totalCount=', response.data.totalCount)
                this.props.setUsersTotalCount(response.data.totalCount / 100)
            })
    }
    render() {   // render -@ asum e tur indz jsx heto es kmtacem inch anem dra hamar ashxatum e skzbic render@ heto componentDidMount -i mej zapros e linum vercvum e respons@ talis e props.setUsers-in u heto galis e nkarum
        return <>
            {this.props.isFetching ?
            <Preloader />
                :null}
        <Users totalUsersCount = {this.props.totalUsersCount}
                      pageSize = {this.props.pageSize}
                      currentPage = {this.props.currentPage}
                      onPageChanged = {this.onPageChanged}
                      users = {this.props.users}
                      follow = {this.props.follow}
                      unfollow = {this.props.unfollow}
        />
        </>

    }
}

let mapStateToProps = (state) => {  // mapStateToProps @ndunum e state-@ amboxjutyamb
    console.log('state=1AAA==', state)
    return {
        users: state.usersPage.users, // aysinqn mapStateToProps functian Users komponentin talis e users(key@)
        pageSize:state.usersPage.pageSize,                           // vori mej ka state.usersPage.users ner-@ : aysinqn inch@ petq e et
        totalUsersCount:state.usersPage.totalUsersCount,                           // vori mej ka state.usersPage.users ner-@ : aysinqn inch@ petq e et
        currentPage:state.usersPage.currentPage,                                                  // enq vercnum
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    follow, // iramej dispatch functian ka arden nayel nerqevum arajva dzev@ ka qomentac
    unFollow,  // voncvor orinak follow kanche dispanch functian u poxance vorpes parametr followAC-@
    setUser,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching
})
(UsersContainer)

// export default connect(mapStateToProps, {
//     follow: follow, // iramej dispatch functian ka arden nayel nerqevum arajva dzev@ ka qomentac
//     unfollow:unFollow,  // voncvor orinak follow kanche dispanch functian u poxance vorpes parametr followAC-@
//     setUsers: setUser,
//     setCurrentPage: setCurrentPage,
//     setTotalUsersCount: setUsersTotalCount,
//     toggleIsFetching: toggleIsFetching
// })
// (UsersContainer)


// let mapDispatchToProps = (dispatch) => {
// // henc skzbic vor bacum enq tekuz userneri ej@ follow,unfollow , setUsers es ereq funqcianer@ chen ashxatum
//     // heto dispatch-i jamanak nor ashxatum en
//     return {
//         follow: followAC, // iramej dispatch functian ka arden nayel nerqevum arajva dzev@ ka qomentac
//         unfollow:unFollowAC,  // voncvor orinak follow kanche dispanch functian u poxance vorpes parametr followAC-@
//         setUsers: setUserAC,
//         setCurrentPage: setCurrentPageAC,
//         setTotalUsersCount: setUsersTotalCountAC,
//         toggleIsFetching: toggleIsFetchingAC
//     }
// }

// return {
//     follow: (userId) => {
//         console.log('userId==SSS==lllllllllllllllllllllllllllllllll', userId)
//         dispatch(followAC(userId))
//         // debugger
//     },
//     unfollow: (userId) => {
//         console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX===', userId)
//         dispatch(unFollowAC(userId))
//     },
//     setUsers: (users) => {
//         console.log('setUsers-i users ==',users)
//         dispatch(setUserAC(users))
//     },
//     setCurrentPage: (pageNumber) => {
//         dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalUsersCount: (totalCount) => {
//         dispatch(setUsersTotalCountAC(totalCount))
//     },
//     toggleIsFetching: (isFetching) => {
//         dispatch(toggleIsFetchingAC(isFetching))
//     }
// }
