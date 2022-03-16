import React from 'react'

const Repos = ({ Repos }) => {
    return Repos.map(repo => <RepoItem repo={repo} key={Repo.id} />)
}

export default Repos