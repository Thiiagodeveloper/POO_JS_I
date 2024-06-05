import { Student } from "./main1.js"

export class TeacherStudent{
    constructor(
        props,
        skills = [] ){
        super(props)
        this.skills = skills
    }

    approvedCourse(newCurso){
        this.approvedCourse.push(newCurso)
    }

    publicarComentario(commentContent){
        const skills = this.skills
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: `Profesor de ${this.skills.join()}`
        })
        comment.publicar();
    }

}

const skills = [" js", "python", "mongodb"]
  const props = {
    name: "Erik Ochoa",
    username: "elyager"
  }

  const profesor = new TeacherStudent(props, skills)
  profesor.publicarComentario('Mi primer comentario')