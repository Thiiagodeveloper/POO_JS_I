//CLasess
class Comment{
    constructor({
        content,
        studentName,
        studentRole = "estudiante"
    }){
        this.content  = content;
        this.studentName  = studentName;
        this.studentRole  = studentRole;
        this.likes = 0
    }

    publicar(){
        console.log(this.studentName + "( " + this.studentRole + " )");
        console.log(this.likes + " likes");
        console.log(this.content);
        
        
    }
}

 class PlatziClass{
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID
    }

    reproducir(){
        videoPlay(this.videoID)
    }

    pausar(){
        videoStop(this.videoID)

    }
}

class Course{
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = 'spanish',

    }){
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name(){
        return this._name;
    }

    set name(newName){
        if(newName === "Curso malito"){
            console.error('Web.. no');
            
        }
        else{
            this._name = newName;
        }
    }
}

class Class{
    constructor({
        name
    }){
        this.name = name
    }
}

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

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        })
        comment.publicar();
    }
}
class FreeStudent extends Student{
    constructor(props){
        super(props);
    }

    approvedCourse(newCurso){
        if(newCurso.isFree){
            this.approvedCourses.push(newCurso)
        }else{
            console.warn('Lo sentimos' + this.name + " solo puedes toamr cursos free");
            
        }
    }
}

class BasicStudent extends Student{
    constructor(props){
        super(props);
    }

    approvedCourse(newCurso){
        if(newCurso.lang !== "english"){
            this.approvedCourses.push(newCurso)
        }else{
            console.warn('Lo sentimos' + this.name + " no  puedes tomar cursos en ingles");  
        }
    }

}

class ExpertStudent extends Student{
    constructor(props){
        super(props);
    }

    approvedCourse(newCurso){
        this.approvedCourses.push(newCurso)
    }
}

class TeacherStudent extends Student {
    constructor(
      props,
      skills = []) {
      super(props);
      this.skills = skills
    }
  
    approvedCourse(newCurso) {
      this.approvedCourse.push(newCurso)
    }
  
    publicarComentario(commentContent) {
      const comment = new Comment({
        content: commentContent,
        studentName: this.name,
        studentRole: `profesor de ${this.skills.join(",")}`
  
      })
      return comment.publicar();
    }
}

const skills = ["js", "python", "mongodb"]
  const props = {
    name: "Erik Ochoa",
    username: "elyager"
  }

  const profesor = new TeacherStudent(props, skills)
  profesor.publicarComentario('Mi primer comentario')


class LearningPaths{
    constructor({
        name, 
        courses = []
    }){
        this.name = name;
        this.approvedCourses = courses
    }
}

function videoPlay(id){
    const urlScreta = 'http://platzinasa.com';
    console.log("Se esta produciendo un video" + urlScreta);
    
}

function videoStop(id){
    const urlScreta = 'http://platzinasa.com';
    console.log("Pausamos el video" + urlScreta);
    
}


//Instances of prototypes

const cursoProgramacionBasica = new Course({
    name: "Programacion Basica",
    isFree: true,
})
const cursoDefinitivoHTML = new Course({
    name: "cursoDefinitivoHTML ",
})
const cursoPracticoHTML= new Course({
    name: "Programacion Basica",
    lang: "english",
})

const esculaWeb = new LearningPaths({
    name: "Escuela de desarrollo Web",
    courses : [ 
        cursoProgramacionBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML
    ]
})

const escuelaData = new LearningPaths({
    name: "Escuela de Data Scients",
    courses : [ 
        cursoProgramacionBasica,
        "Curso de introduccion a la produccion de Vgs",
        "Curso de Unreal Engine",
        "Curso de Tableu",
    ]
})

const escuelaVideoGames = new LearningPaths({
    name: "Escuela de VideoGames",
    courses: [
        cursoProgramacionBasica,
        "Curso de introduccion a la produccion de Vgs",
        "Curso de Unreal Engine",
        "Curso de Unity 3D"
    ]
})



const santiDev2 = new FreeStudent({
    name:"Santiago",
    username: "santiDev",
    email: "santidev@santi.com",
    instagram : "santidev_feliz",
    learnigPaths: [
        escuelaData,
        esculaWeb
    ]
})
const freddy = new TeacherStudent({
    name:"Freddy",
    username: "Freddier",
    email: "Freddy@santi.com",
    instagram : "FreddyVega",
    learnigPaths: [
        escuelaData,
        esculaWeb
    ]
})

// console.log(santiDev2);
// console.log(JuanDev);