function generateQuote() {
    fetch('https://dummyjson.com/quotes/random')
        .then(res => res.json())
        .then(data => {
            document.getElementById('quote').textContent = data.quote;
            document.getElementById('author').textContent = `- ${data.author}`;
            updateShareButton(data.quote, data.author);
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            document.getElementById('quote').textContent = 'Failed to load quote. Please try again.';
            document.getElementById('author').textContent = '';
        });
}

function updateShareButton(quote, author) {
    const container = document.getElementById('fb-share-button-container');
    container.innerHTML = `
        <div class="fb-share-button" data-href="https://example.com" data-layout="button" data-size="large">
            <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(quote + " " + author)}" class="fb-xfbml-parse-ignore">Поделиться</a>
        </div>
    `;
    FB.XFBML.parse(container);
}
