import http from './http-controller';

/* Actions */

const getSurvey = (id, headers) => http.get('/survey', {}, headers);

export default {
    getSurvey,
};
