import { useEffect, useState } from 'react'

import { RepositoryItem } from './RepositoryItem'
import '../styles/repositories.scss'

export function RepositoryList() {

  const [repos, setRepos] = useState([])

  useEffect(()=> {
    fetch('https://api.github.com/users/mouravocal/repos')
      .then(response => response.json())
      .then(data => setRepos(data))
  },[])

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repos.map(repo => <RepositoryItem repository={repo} />)}      
      </ul>
    </section>
  )
}