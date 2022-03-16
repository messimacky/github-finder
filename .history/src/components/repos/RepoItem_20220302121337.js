import React from 'react'
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
    return (
        <div>RepoItem</div>
    )
}
RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
}

export default RepoItem