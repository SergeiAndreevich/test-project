const users = [
    {
    username: 'David',
    status: 'online',
    lastActivity: 10
    },
    {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
    },
    {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
    }
]



function checkStatus(arr){
    const newM = [];
    arr.forEach(element => {
        if(element?.status === 'online'){
            newM.push(element);
        }// }else{
        //     res(element);
        // }
    });
    return newM;
}

// const newP = checkStatus(users);
// console.log('-----------');
// console.log(newP);

const onlineUsers = [
    ...checkStatus(users)
];
console.log(onlineUsers);

//add some info
//alert(`Онлайн находятся пользователи ${}`);
//iiiiiiiiiiiiiiiiiiiiiiiiiiii
//olllllll;;