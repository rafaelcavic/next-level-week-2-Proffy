const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //INSERIR DADOS

    const proffyValue = {
        name: "Rafael Cavic",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "999245937",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    }

    const classValue = {
        subject: "1",
        cost: "20",
        //proffy id vem pelo banco
    }

    const classScheduleValues = [{
        //class id vem pelo banco
        weekday: 0,
        time_from: 720,
        time_to: 1220,
    },{
        weekday: 0,
        time_from: 520,
        time_to: 1220,
    }]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //CONSULTAR DADOS

    //CONSULTAR TODOS PROFFYS
    const selectedProffys = await db.all("SELECT * FROM proffys")

    const selectedProffysAndClasses = await db.all(`SELECT * FROM proffys
    INNER JOIN classes ON (classes.proffy_id = proffys.id)`)

    const selectedProffysAndClassesAndSchedules = await db.all(`SELECT * FROM proffys
    INNER JOIN classes ON (classes.proffy_id = proffys.id)
    INNER JOIN class_schedule ON (classes.id = class_schedule.class_id)`)

    //console.log(selectedProffysAndClassesAndSchedules)

})