import * as quizApiDao from "./quizApiQuestionsDao.js"
//import other daos

//use the dao you need here.
export const getQuestions = async () => {
    try {
        return await quizApiDao.getQuestions();
    } catch (error) {
        throw error;
    }
}