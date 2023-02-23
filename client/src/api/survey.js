import http from './http-controller';

/* Actions */

const getSurvey = (surveyId, headers) => http.get(`/survey/${surveyId}`, {}, headers);

const submitSurvey = (surveyId, userId, answer, headers) => http.post(`/survey/${surveyId}/${userId}`, answer, headers);

export default {
    getSurvey,
    submitSurvey,
};
