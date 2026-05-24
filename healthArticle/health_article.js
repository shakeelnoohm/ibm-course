fetch('./health_article.json')
  .then(response => response.json())
  .then(data => {
    const articlesDiv = document.getElementById('articles');
    const articles = data.articles;

    articles.forEach((article, index) => {
      const articleDiv = document.createElement('div');
      articleDiv.className = 'article';

      const title = document.createElement('h2');
      title.textContent = article.title;

      const description = document.createElement('p');
      description.textContent = article.description;

      const waysHeader = document.createElement('h3');
      waysHeader.textContent = 'Ways to Achieve:';

      const waysList = document.createElement('ul');
      article.ways_to_achieve.forEach(way => {
        const li = document.createElement('li');
        li.textContent = way;
        waysList.appendChild(li);
      });

      const benefitsHeader = document.createElement('h3');
      benefitsHeader.textContent = 'Benefits:';

      const benefitsList = document.createElement('ul');
      article.benefits.forEach(benefit => {
        const li = document.createElement('li');
        li.textContent = benefit;
        benefitsList.appendChild(li);
      });

      articleDiv.appendChild(title);
      articleDiv.appendChild(description);
      articleDiv.appendChild(waysHeader);
      articleDiv.appendChild(waysList);
      articleDiv.appendChild(benefitsHeader);
      articleDiv.appendChild(benefitsList);

      articlesDiv.appendChild(articleDiv);
    });
  })
  .catch(error => {
    console.error('Error loading health articles:', error);
    document.getElementById('articles').innerHTML = '<p>Failed to load articles. Please try again later.</p>';
  });
