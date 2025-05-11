repos = "https://api.github.com/users/caw8592/repos"

fetch(repos)
    .then(response => response.json())
    .then(repos => {
        const list = document.getElementById('repo-list');
        repos.forEach(repo => {
            const project = document.createElement('li');

            const name = document.createElement('h2')
            name.textContent = repo.name;
            if(repo.name == "caw8592.github.io")
                name.textContent = "Portfolio Website";
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

            const date = document.createElement('p');
            date.textContent = "Last Updated: " + repo.pushed_at.slice(0, 10);
            project.appendChild(date);

            const url = document.createElement('a');
            url.href = repo.svn_url;
            url.textContent = "Look at the github!";
            url.target = "_blank";
            project.appendChild(url);

            list.appendChild(project);
        });
    })
    .catch(error => console.error('Error fetching repos:', error));