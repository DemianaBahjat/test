import React from 'react';

const UserPosts = ({params}) => {
    return (
        <div>
            Posts for user {params.userId}
        </div>
    );
}

export default UserPosts;
