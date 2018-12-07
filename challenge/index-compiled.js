const axios = require('axios');

function getId(url) {
    let indexOfId = url.indexOf("id=");
    return url.substr(indexOfId + 3);
}

function follow(id) {
    let url = 'https://letsrevolutionizetesting.com/challenge.json';
    if (id) {
        url += "?id=" + id;
    }
    axios.get(url).then(resp => {
        if (resp.data.follow) {
            let followId = getId(resp.data.follow);
            return follow(followId);
        }
        console.log(resp.data);
        return;
    });
}

follow();
