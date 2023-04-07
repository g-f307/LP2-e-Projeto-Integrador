
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const videosHTML = data.videos.map(video => `
            <div class="p-container2">
                <h3>${video.title}</h3>
                <iframe width="560" height="315" src="${video.url}" frameborder="0" allowfullscreen></iframe>
            </div>
        `).join('');
        document.getElementById('videos').innerHTML = videosHTML;
    });
