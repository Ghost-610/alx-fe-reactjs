import React from 'react'
import UserContext from './UserContext'


// Access user data from UserContext
const UserProfile = (props) => {
    const { user } = UserContext(UserContext);

    return (
        <div className='User-Profile'>
            <h2>
                {props.name}
            </h2>

            <p>
                Age:{props.age}
            </p>

            <p>Bio:{props.bio}
            </p>
        </div>
    )
}

export default UserProfile