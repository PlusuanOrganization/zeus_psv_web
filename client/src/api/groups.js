import http from './http-controller';

/* Actions */

const getAllGroups = (cardId, headers) => http.get(`/groups?cardId=${cardId}`, {}, headers);

const updateCardGroup = (cardId, groupId, headers) => http.post(`/cards/${cardId}/group`, { groupId: groupId }, headers);

export default {
    getAllGroups,
    updateCardGroup,
};
