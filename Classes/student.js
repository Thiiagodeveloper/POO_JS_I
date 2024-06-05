class Student{
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses= [],
        learnigPaths = []

    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this.solcialMedia = {
            twitter,
            instagram,
            facebook
        }
        this.approvedCourses = approvedCourses;
        this.learnigPaths = learnigPaths;
    }
}
