function loadRepos() {
	const reposElement = document.getElementById('repos');
	reposElement.textContent = '';

	const username = document.getElementById('username').value;

    const url = `https://api.github.com/users/${username}/repos`;

    fetch(url)
        .then((res) => res.json())
        .then((data) => {

			data.forEach(repo => {
				const li = document.createElement('li');
				const linkTag = document.createElement('a');
				linkTag['href'] = repo['html_url'];
				linkTag.textContent = repo['full_name'];
	
				li.appendChild(linkTag);
	
				reposElement.appendChild(li);
			});
		})
		.catch((er) => {
			const li = document.createElement('li');
			li.textContent = 'Error';

			reposElement.appendChild(li);
		});
}