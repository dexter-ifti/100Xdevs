import {PrismaClient} from  "@prisma/client"

const prisma = new PrismaClient()

async function insertUser(username:string, password: string, firstName: string, lastName: string, email: string, phone: string) {
    const user = await prisma.user.create({
        data: {
            email : username,
            password,
            firstName,
            lastName,
        },
        select: {
            id: true,
            password : true
        },
    })
    console.log(user);
    
}

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams){
    const user = await prisma.user.update({
        where : {
            email: username
        },
        data: {
            firstName,
            lastName
        },
        select : {
            id: true,
            firstName: true,
        }
    })
    console.log(user);
}


async function getUser(username:string) {
    const user = await prisma.user.findMany({
        where: {
            email: username
        },
        select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
        }
    })
    console.log(user);
}

async function main() {
    // await insertUser("user1", "password1", "first1", "last1", "email1", "phone1")
    // await insertUser("user2", "password2", "first2", "last2", "email2", "phone2")
    // await insertUser("user3", "password3", "first3", "last3", "email3", "phone3")
    // await insertUser("user4", "password4", "first4", "last4", "email4", "phone4")
    // await insertUser("user5", "password5", "first5", "last5", "email5", "phone5")

    // await updateUser("user4", {
    //     firstName: "dexter",
    //     lastName: "foo"
    // })

    await getUser("user4")
}

main();