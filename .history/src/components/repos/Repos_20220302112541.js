import React from 'react'

const Repos = ({ repos }) => {
    return Repos.map(repo => <RepoItem repo={repo} key={Repo.id} />)
}

export default Repos