function lockedProfile() {
    // const a = document.querySelectorAll('input[name="user1Locked"]');
    // console.log(a);
    const buttons = Array.from(document.getElementsByTagName('button'));
    buttons.forEach(x =>
        x.addEventListener('click', revealOrHide)
    );

    function revealOrHide(e) {
        const div = e.target.parentElement.getElementsByTagName('div')[0];
        let radio = e.target.parentElement.querySelector('input[type="radio"]');
        
        if (!radio.checked) {

            if (e.target.textContent == 'Hide it') {
                e.target.textContent = 'Show more';
                div.style.display = '';
            } else {
                e.target.textContent = 'Hide it'
                div.style.display = 'block';

            }
        }
    }
}