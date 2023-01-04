import React from 'react';
import {  useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { loadUser } from '../../Redux/Actions/userAction';
// import { getCookie } from '../../Redux/Cookie';

const Profile = () => {
    const user=useSelector(state=>state?.user?.user);
    // console.log(user)
    // const token=getCookie('token');
    // const dispatch=useDispatch();
    // dispatch(loadUser(token));
    return (
        <div class="container container-fluid">
        <h2 class="mt-5 ml-5">My Profile</h2>
        <div class="row justify-content-around mt-5 user-info">
            <div class="col-12 col-md-3">
                <figure class='avatar avatar-profile'>
                    <img class="rounded-circle img-fluid" src='' alt='' />
                </figure>
                <Link to="#" id="edit_profile" class="btn btn-primary btn-block my-5">
                    Edit Profile
                </Link>
            </div>
     
            <div class="col-12 col-md-5">
                 <h4>Full Name</h4>
                 <p>{user?.user?.name}</p>
     
                 <h4>Email Address</h4>
                 <p>{user?.user?.email}</p>

                 <Link to="#" class="btn btn-danger btn-block mt-5">
                    My Orders
                </Link>

                <Link to="#" class="btn btn-primary btn-block mt-3">
                    Change Password
                </Link>
            </div>
        </div>
    </div>
    );
};

export default Profile;