import React from 'react'

const Repos = ({ repo }) => {
    return Repos.map(repo => <RepoItem repo={repo} key={repo.id} />)

}

export default Repos