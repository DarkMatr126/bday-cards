function addReview (reviewer,text) {
    var div = document.createElement('div');
    div.setAttribute('class','review');
    var title = document.createElement('p');
    title.innerText = reviewer;
    title.setAttribute('class','reviewer');
    var innerText = document.createElement('p');
    innerText.innerText = text;
    innerText.setAttribute('class','text');

    div.append(title,innerText);
    document.getElementById('reviews').append(div);
}

window.addEventListener('load',() => {
    addReview('Kathrine R.','Mr. Arnell is like the best teacher and his class is so fun! 5 out of 5 stars.');
    addReview('Reese H.','I always look forward to Mr. Arnell\'s class. He is an awesome teacher and he\'s very funny.\nOne time Mr.Arnell was pretending like he was about to hit me with his stick and then he actually hit me with the stick, on accident though.');
    addReview('Jasmine J.','He is so funny. 100/10');
    addReview('Jane H.','Mr. Arnell is one of the greatest educators not just of the state, but of this nation. This man is single handedly changing the world. One swoosh. At a time.');
    addReview('Bevin M.','Mr. Arnell is one of the best teachers I have ever had. The day is just frankly boring without having his Class. \n FIVE STARS\n\nWhoever took down Mr. Arnell\'s graveyard of swoosh\'s, you should be ashamed of yourself and Mr. Arnell is ashamed too.');
    addReview('Olivia H.','Mr. Arnell is my favorite teacher and i don\'t even have him. 100/10');
    addReview('Jane R.','Mr. Arnell is the BEST teacher!!! That\'s all I need to say because he is.');
    addReview('Josh P.','He is a good teacher and makes class fun.');
    addReview('Vin J.','Mr Arnell is the goat, the goat.  Nobody can compare.  He has the mighty swoosh cut through blades grass. He has story time, wher he can provide person with the amount information they need in any history topic.  He also has made the best game ever, trashketball, which has been voted as the number one sport in the world.');
    addReview('Carson S.','Mr. Arnell is cool.');
    addReview('Ms. Leak (quote provided by Marco)','He\'s the best teacher in the school.');
    addReview('Will S.','He\'s a banger.');
    addReview('Ethan S.','One of the eight wonders of the world.');
});
