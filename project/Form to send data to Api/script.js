const formEl = document.querySelector('.form');

    formEl.addEventListener('submit', event =>{
        event.preventDefault();

        const formData= new FormData(formEl);
        const data = Object.fromEntries(formData);
        // console.log(data);
        fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(data => console.log(data));

    });
