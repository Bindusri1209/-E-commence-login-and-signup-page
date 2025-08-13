document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        alert(`Redirecting to ${button.innerText} page...`);
        // Here you can redirect to actual login pages:
        // window.location.href = 'user-login.html';
    });
});