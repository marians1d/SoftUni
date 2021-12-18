function loadCommits() {
    const comitsElement = document.getElementById('commits');
	comitsElement.textContent = '';

	const username = document.getElementById('username').value;
	const repo = document.getElementById('repo').value;

    const url = `https://api.github.com/repos/${username}/${repo}/commits`;

    fetch(url)
        .then((res) => res.json())
        .then((data) => {

			data.forEach(commit => {
				const li = document.createElement('li');
				li.textContent = commit.commit.author.name + ': ' + commit.commit.message;

				comitsElement.appendChild(li);
			});
		})
		.catch((reason) => {
			const li = document.createElement('li');
			li.textContent = `Error: ${reason.status} (Not Found)`;


			comitsElement.appendChild(li);
		});
}