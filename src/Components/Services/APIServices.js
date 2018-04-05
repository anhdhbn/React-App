export const fetchTodos = () => {
    var url = "https://honganh.azurewebsites.net/api/uetcodecamp/";
    
    //var url = "https://uetcc-todo-app.herokuapp.com/draft";
    return fetch(url)
    .then(response => {
        return response.json();
    });
};

export const createTodo = (text) => {
    const url = "https://honganh.azurewebsites.net/api/uetcodecamp/";
    const request = new Request(url, {
        method: 'Post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            text: text
        })
    });
    return fetch(request).then(respond => {
        return respond.json();
    });
}

export const ChangeCompleted = (key, text, completed) => {
    const url = "https://honganh.azurewebsites.net/api/uetcodecamp/";
    const request = new Request(url, {
        method: 'Put',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            ID: key,
            text: text,
            completed: completed
        })
    });
    return fetch(request).then(respond => {
        return respond.json();
    });
}

export const DeleteTodo = (text, completed) => {
    const url = "https://honganh.azurewebsites.net/api/uetcodecamp/";
    const request = new Request(url, {
        method: 'Delete',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            text: text,
            completed: completed
        })
    });
    return fetch(request).then(respond => {
        return respond.json();
    });
}


export const PostRegister = (name, user, email, psw) => {
    const url = "https://honganh.azurewebsites.net/api/uetcodecamp/";
    const request = new Request(url, {
        method: 'Post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            user: user,
            email: email,
            psw: psw
        })
    });
    return fetch(request).then(respond => {
        return respond.json();
    });
}

export const PostLogin = (user, psw) => {
    const url = "https://honganh.azurewebsites.net/api/uetcodecamp/";
    const request = new Request(url, {
        method: 'Post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            user: user,
            psw: psw
        })
    });
    return fetch(request).then(respond => {
        return respond.json();
    });
}