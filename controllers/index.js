var fn_index = async (ctx, next) => {
    ctx.response.body = `<h1>index</h1>
    <form action="/signin" method="post">
        <p>Name:<input name="name" value="wcg"></p>
        <p>Password:<input name="password" type="password"></p>
        <p><input type="submit" value="submit"></p>
    </form>`;
};

var fn_signin = async (ctx, next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'wcg' && password === '123456') {
        ctx.response.body = `<h1>welcome, ${name}`;
    } else {
        ctx.response.body = `<h1>login fail</h1>
        <p><a href="/">Try again</a></p>`;
    }
}

module.exports = {
    'GET /': fn_index,
    'POST /signin': fn_signin
};
