const repoList = document.getElementById('repo-list');
const repositorio = document.getElementById()

fetch('https://api.github.com/users/gabrielodorcik/repos')
	.then(response => response.json())
	.then(data => {
		data.forEach(repo => {
			const li = document.createElement('li');
			li.textContent = repo.name;
			li.addEventListener('click', () => {
				window.location.href = repo.html_url;
			});
			repoList.appendChild(li);
		});
	})
	.catch(error => {
		console.log(error);
	});
