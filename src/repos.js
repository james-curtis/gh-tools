// 在浏览器控制台就可以执行

async function getRepos() {
    // const username = 'james-curtis';
    const token = 'xxxxxxxx';
    const page = 1;
    const response = await fetch(`https://api.github.com/user/repos?per_page=100&page=${page}`, {
        headers: {
            'Authorization': `token ${token}`
        }
    });
    const data = await response.json();
    return data;
}

async function sortReposBySize() {
    const repos = await getRepos()

    // Sort repos by size
    repos.sort((a,b)=>b.size - a.size);

    // Populate the sorted list
    const result = repos.map((repo)=>{
        return `${repo.name} - ${(repo.size / 1024).toFixed(4)} MB`;
    }
    );

    console.log(result)
}

sortReposBySize()
