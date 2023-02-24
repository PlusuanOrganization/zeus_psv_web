import http from './http-controller';

/* Actions */

const getSurvey = (surveyId, headers) => http.get(`/survey/${surveyId}`, {}, headers);

const getAllSurveys = (cardId, headers) => http.get(`/survey?cardId=${cardId}`, {}, headers);

const updateCardSurvey = (cardId, surveyId, headers) => http.post(`/cards/${cardId}/survey`, { surveyId: surveyId }, headers);

const submitSurvey = (surveyId, cardId, userId, answer, headers) => http.post(`/survey/${surveyId}/${cardId}/${userId}`, { answer: answer }, headers);

export default {
    getSurvey,
    getAllSurveys,
    updateCardSurvey,
    submitSurvey,
};
