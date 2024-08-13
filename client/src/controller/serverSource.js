// PRODUCTION SERVER URL
const serverSource = "https://senaiserver-adi-permadis-projects.vercel.app";

// DEV SERVER URL
// const serverSource = "http://192.168.43.228:5000";

// GET
export const groqGetModelsEndPoint = `${serverSource}/getGroqModels`;
export const firestoreCheckAUser = `${serverSource}/checkAUser`;
export const firestoreGetAllChatsEndPoint = `${serverSource}/getAllChats`;
export const firestoreGetAllChatsMemoryEndPoint = `${serverSource}/getAllChatsMemory`;
export const firestoreGetNameAndPPUrlEndPoint = `${serverSource}/getNameAndPPUrl`;

export const groqGetReplyEndPoint = `${serverSource}/getGroqReply`;
export const groqGetTranscriptionEndPoint = `${serverSource}/getGroqTranscription`;
export const firestoreAddNewUserEndPoint = `${serverSource}/addNewUser`;
export const firestoreAddNewChatsEndPoint = `${serverSource}/addNewChats`;
export const firestoreDeleteAllChatsEndPoint = `${serverSource}/deleteAllChats`;
export const firestoreDeleteSomeChatsEndPoint = `${serverSource}/deleteSomeChats`;

export const firestoreUpdateNameEndPoint = `${serverSource}/updateName`;
export const firestoreUploadSeenHistoryEndPoint = `${serverSource}/uploadSeenHistory`;
export const firestoreGetPermissionToDeleteAllDataEndPoint = `${serverSource}/getPermissionToDeleteAllData`;
export const firestoreDeleteAllDataEndPoint = `${serverSource}/deleteAllData`;
export const firestoreAddNewVoiceChatEndPoint = `${serverSource}/addNewVoiceChat`;
export const firestoreUpdateProfilePhotoEndPoint = `${serverSource}/updateProfilePhoto`;
export const firestoreUpdatePPUrlEndPoint = `${serverSource}/updatePPUrl`;