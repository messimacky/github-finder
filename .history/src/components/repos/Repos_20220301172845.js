import React from 'react'
import PropTypes from 'prop-types';

Repos.propTypes = {
    repos: PropTypes.array.isRequired

};

const Repos = ({ repo }) => {
    return Repos.map(repo => <RepoItem repo={repo} key={repo.id} />)

}

export default Repos