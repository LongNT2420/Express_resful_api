function loadPage(page){
$.ajax({
    url:'/account?page=' + page,
    type: 'GET'
})
.then(data=>{
    $('#content').empty();
    console.log(data);
    const items = data.map((item)=>{
        return `<h1>NAME: ${item.userName}</h1>
                <h1>PASSWORD: ${item.passWord}</h1>
        `
    })
    $('#content').append(items.join(''));
    console.log(items);

})
.catch(error=>{
    console.log('API loi');
})
}