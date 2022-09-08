import css from 'components/Profile/Profile.module.css'
// import PropTypes from 'prop-types';

export const Profile = ({ user }) => {
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
                    alt="User avatar"
                    className="avatar"
                />
                <p className={css.name}>DFGJK</p>
                <p className={css.tag}>gjgkhl</p>
                <p className={css.location}>jkkl;</p>
            </div>

            <ul className={CSS.stats}>
                <li>
                    <span className={css.label}>Followers</span>
                    <span className={css.quantity}>jkkl</span>
                </li>
                <li>
                    <span className={css.label}>Views</span>
                    <span className={css.quantity}>hjk</span>
                </li>
                <li>
                    <span className={css.label}>Likes</span>
                    <span className={css.quantity}>hjk.l</span>
                </li>
            </ul>
        </div>
    );
}


// Profile.propTypes = {

//     name: PropTypes.string.isRequired,
//     tag: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     stats: PropTypes.arrayOf (
//         PropTypes.exact ({
//             followers: PropTypes.number.isRequired,
//             views: PropTypes.number.isRequired,
//             likes: PropTypes.number.isRequired,
//         })
//     ),   
//     // avatar: PropTypes.string,
 
// };