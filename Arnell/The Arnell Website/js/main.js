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
    addReview('Jane H.','Mr. Arnell is one of the greatest educators not just of the state, but of this nation. This man is single handedly changing the world. One swoosh. At a time.')
    addReview('Bevin M.','Mr. Arnell is one of the best teachers I have ever had. The day is just frankly boring without having his Class. \n FIVE STARS')
    addReview('Olivia H.','Mr. Arnell is my favorite teacher and i don\'t even have him. 100/10')
});