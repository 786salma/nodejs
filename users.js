
var users = [
    {
        id: 1,
        name: 'Salma'
    },
    {
        id: 2,
        name: 'Resha'
    },
    {
        id: 3,
        name: 'Latif'
    }
];
class User{
    fetchAll(){
        return users;
    }
    fetchById(id){
        return users.find(u => u.id == id);
    }
    addUser(u){
        users.push(u);
        return users;
    }
}

module.exports = User;