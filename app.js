repos = "https://api.github.com/users/caw8592/repos"

fetch(repos)
    .then(response => response.json())
    .then(repos => {
        const list = document.getElementById('repo-list');
        repos.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
        const topThree = repos.slice(0, 3);
        topThree.forEach(repo => {
            const project = document.createElement('li');

            const name = document.createElement('h2')
            name.textContent = repo.name;
            if(repo.name == "caw8592.github.io")
                name.textContent = "PortfolioWebsite";
            project.appendChild(name);

            const language = document.createElement('p');
            language.textContent += "Language: " + repo.language;
            project.appendChild(language);

            const description = document.createElement('p');
            description.textContent = "Description: ";
            if(repo.description != null)
                description.textContent += repo.description;
            else
                description.textContent += "This project is still being worked on, come back later to see how it turns out!";
            project.appendChild(description);

            const created = document.createElement('p');
            created.textContent = "Started: " + repo.created_at.slice(0,10);
            project.appendChild(created);

            const last_updated = document.createElement('p');
            last_updated.textContent = "Last Updated: " + repo.pushed_at.slice(0, 10);
            project.appendChild(last_updated);

            const url = document.createElement('a');
            url.href = repo.svn_url;
            url.textContent = "Look at the github!";
            url.target = "_blank";
            project.appendChild(url);

            list.appendChild(project);
        });
    })
    .catch(error => console.error('Error fetching repos:', error));