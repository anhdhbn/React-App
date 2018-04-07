import Cookies from 'js-cookie';
export const fetchTodos = () => {
    // var url = "https://honganh.azurewebsites.net/api/codecamp/todos";
    
    // //var url = "https://uetcc-todo-app.herokuapp.com/draft";
    // return fetch(url)
    // .then(response => {
    //     return response.json();
    // });

    const url = "https://honganh.azurewebsites.net/api/codecamp/todos?user=" + Cookies.get('user');
    const request = new Request(url, {
        method: 'Get',
        headers: {
            'content-type': 'application/json',
            'Authorization' : 'Bearer ' + localStorage.getItem('access_token')
        }
    });
    return fetch(request).then(respond => {
        return respond.json();
    });
};

export const createTodo = (text) => {
    const url = "https://honganh.azurewebsites.net/api/codecamp/todos?user=" + Cookies.get('user');
    const request = new Request(url, {
        method: 'Post',
        headers: {
            'content-type': 'application/json',
            'Authorization' : 'Bearer ' + localStorage.getItem('access_token')
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
    const url = "https://honganh.azurewebsites.net/api/codecamp/todos?user=" + Cookies.get('user');
    const request = new Request(url, {
        method: 'Put',
        headers: {
            'content-type': 'application/json',
            'Authorization' : 'Bearer ' + localStorage.getItem('access_token')
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

export const DeleteTodo = (key) => {
    const url = "https://honganh.azurewebsites.net/api/codecamp/todos?user=" + Cookies.get('user');
    const request = new Request(url, {
        method: 'Delete',
        headers: {
            'content-type': 'application/json',
            'Authorization' : 'Bearer ' + localStorage.getItem('access_token')
        },
        body: JSON.stringify({
            id: key
        })
    });
    return fetch(request).then(respond => {
        return respond.json();
    });
}


export const PostRegister = (name, user, email, psw) => {
    const url = "https://honganh.azurewebsites.net/api/codecamp/register";
    const request = new Request(url, {
        method: 'Post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            Name: name,
            User: user,
            Email: email,
            Pass: psw
        })
    });
    return fetch(request).then(respond => {
        return respond.json();
    });
}

export const PostLogin = (user, psw) => {
    const url = "https://honganh.azurewebsites.net/api/codecamp/login";
    const request = new Request(url, {
        method: 'Post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            User: user,
            Pass: psw
        })
    });
    return fetch(request).then(respond => {
        return respond.json();
    });
}

export const GetToken = (user, psw) => {
    const url = "https://honganh.azurewebsites.net/api/codecamp/token";
    const request = new Request(url, {
        method: 'Post',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded'
        },
        body: "username=" + user + "&password=" + psw + "&grant_type=password"
    });
    return fetch(request).then(respond => {
        return respond.json();
    });
}
export const GetInfo = () => {
    const url = "https://honganh.azurewebsites.net/api/codecamp/infomation?user=" + Cookies.get('user');
    const request = new Request(url, {
        method: 'Get',
        headers: {
            'content-type': 'application/json',
            'Authorization' : 'Bearer ' + localStorage.getItem('access_token')
        }
    });
    return fetch(request).then(respond => {
        return respond.json();
    });
};

export const changeInfo = (name, email, psw) => {
    const url = "https://honganh.azurewebsites.net/api/codecamp/changeinfo?user=" + Cookies.get('user');
    const request = new Request(url, {
        method: 'Post',
        headers: {
            'content-type': 'application/json',
            'Authorization' : 'Bearer ' + localStorage.getItem('access_token')
        },
        body: JSON.stringify({
            Name: name,
            Email: email,
            Pass: psw
        })
    });
    return fetch(request).then(respond => {
        return respond.json();
    });
}