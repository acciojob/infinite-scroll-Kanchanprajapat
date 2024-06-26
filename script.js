//your code here!
document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('ol');
	function addListItems(count) {
        for (let i = 0; i < count; i++) {
            let li = document.createElement('li');
            li.textContent = 'List item ' + (list.children.length + 1);
            list.appendChild(li);
        }
    }
	addListItems(10);

    // Event listener to check if the user has reached the end of the list
    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            addListItems(2);
        }
    });
});

