const serverSource = "https://bucin-server.vercel.app";
// const serverSource = "http://192.168.43.228:5000";
export const groqGetReplyEndPoint = `${serverSource}/getGroqReply`;
export const groqGetModelsEndPoint = `${serverSource}/getGroqModels`;
export const firestoreAddNewUserEndPoint = `${serverSource}/addNewUser`;
export const firestoreGetAllChatsEndPoint = `${serverSource}/getAllChats`;
export const firestoreAddNewChatsEndPoint = `${serverSource}/addNewChats`;
export const firestoreDeleteAllChatsEndPoint = `${serverSource}/deleteAllChats`;
export const firestoreDeleteSomeChatsEndPoint = `${serverSource}/deleteSomeChats`;
export const firestoreGetNameEndPoint = `${serverSource}/getName`;
export const firestoreUpdateNameEndPoint = `${serverSource}/updateName`;
export const firestoreUploadSeenHistoryEndPoint = `${serverSource}/uploadSeenHistory`;
export const firestoreGetPermissionToDeleteAllDataEndPoint = `${serverSource}/getPermissionToDeleteAllData`;
export const firestoreDeleteAllDataEndPoint = `${serverSource}/deleteAllData`;
