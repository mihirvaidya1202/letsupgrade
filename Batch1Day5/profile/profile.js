class User
{
   
    constructor(name,age,email)
    {
        this.name=name;
        this.age=age;
        this.email=email;
        this.coins=0;
        this.courses=[];
    }

    login(user)
    {
        console.log(`You are loggged in ${user.name}`);
    }
    logout(user)
    {
        console.log(`You are logged off ${user.name}`)
    }
}

class Moderator extends User
{
    addCoins(user)
    {
        user.coins++;
        console.log(`${user.name} has ${user.coins} coins`);
    }
    subtractCoins()
    {
        if(coins>0)
        {
            user.coins--;
        }
        console.log(`${user.name} has ${user.coins} coins`);
    }
}

class Administrator extends Moderator
{
    addCourse(user,course)
    {
        user.courses.push(course);
        console.log(`${user.name} enrolled into ${user.courses}`);
    }
    deleteCourse(user,course)
    {
        var i;
        for(i=0;i<user.courses.length;i++)
        {
            if(user.courses[i]==course)
            {
                var temp=user.courses[i];
                user.courses.splice(i,1);
            }
        }
        console.log(`The course deleted is ${temp}`)
        console.log(user.courses);
    }
}

user1=new User("Alpha",24,"alpha@gmail.com");
user1.login(user1);
user1.logout(user1);
console.log(user1.age);
console.log(user1.email);

mod1=new Moderator();
mod2=new Moderator();
mod1.addCoins(user1);
mod1.addCoins(user1);
mod1.addCoins(user1);
mod2.addCoins(user1);
console.log(user1);

admin1=new Administrator();
admin1.addCourse(user1,"JavaScript");
admin1.addCourse(user1,"Python");
admin1.deleteCourse(user1,"Python");
console.log(user1);