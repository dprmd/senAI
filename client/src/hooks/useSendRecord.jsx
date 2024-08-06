import { useAppStore } from "@/store/appStore";
import { useRecordStore } from "@/store/useRecordStore";
import { useShallow } from "zustand/react/shallow";
import { useSubmitGroq } from "./useSubmitGroq";
import { toast } from "../components/ui/use-toast";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export const useSendRecord = (audioPlaybackRef, seekBar) => {
  // hooks
  const [
    setIsRecording,
    setIsRecordingStart,
    setHaveRecord,
    setSendProgress,
    setIsPlayRecord,
  ] = useRecordStore(
    useShallow((state) => [
      state.setIsRecording,
      state.setIsRecordingStart,
      state.setHaveRecord,
      state.setSendProgress,
      state.setIsPlayRecord,
    ]),
  );
  const [userId] = useAppStore(useShallow((state) => [state.userId]));
  const handleSubmit = useSubmitGroq();
  const { t } = useTranslation();
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const audioBlobRef = useRef();

  const handleCancel = () => {
    setIsRecordingStart(false);
    setHaveRecord(false);
  };

  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream, {
        mimeType: "audio/webm; codecs=opus",
      });

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm; codecs=opus",
        });

        const audioUrl = URL.createObjectURL(audioBlob);
        audioPlaybackRef.current.src = audioUrl;
        audioChunksRef.current = [];
        audioBlobRef.current = audioBlob;
      };

      mediaRecorderRef.current.start();
      setIsRecordingStart(true);
    } catch (err) {
      console.log(err);
      toast({
        description: t("microphone_allow_false"),
        duration: 2000,
      });
    }
  };

  const handleStopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecordingStart(false);
    setHaveRecord(true);
  };

  const handleSendRecord = async () => {
    setIsPlayRecord(false);
    setIsRecording(false);
    setHaveRecord(false);
    setSendProgress(true);
    const formData = new FormData();
    formData.append("audio", audioBlobRef.current, `${userId}-recording.webm`);
    formData.append(
      "jsonData",
      JSON.stringify({
        apiKeyIndex: localStorage.getItem("senAi-user"),
      }),
    );
    const { getGroqTranscription } = await import("@/controller/groq");
    const { addNewVoiceChatToFireStorage } = await import(
      "@/controller/CRUDFirestore"
    );
    const transcriptionText = await getGroqTranscription(formData);
    const downloadUrl = await addNewVoiceChatToFireStorage(formData);
    handleSubmit({ text: transcriptionText, downloadUrl }, "audio");
    setSendProgress(false);
  };

  const handlePlayRecordResult = () => {
    if (audioPlaybackRef.current.paused) {
      setIsPlayRecord(true);
      audioPlaybackRef.current.play();
    } else {
      setIsPlayRecord(false);
      audioPlaybackRef.current.pause();
    }
  };

  const handleEndedRecordResult = () => {
    setIsPlayRecord(false);
  };

  const handleTimeUpdateRecordResult = () => {
    const value =
      (100 / audioPlaybackRef.current.duration) *
      audioPlaybackRef.current.currentTime;
    seekBar.current.value = value;
  };

  const handleSeekBarChangeRecordResult = () => {
    const time =
      audioPlaybackRef.current.duration * (seekBar.current.value / 100);
    audioPlaybackRef.current.currentTime = time;
  };

  return {
    handleCancel,
    handleStartRecording,
    handleStopRecording,
    handlePlayRecordResult,
    handleEndedRecordResult,
    handleTimeUpdateRecordResult,
    handleSeekBarChangeRecordResult,
    handleSendRecord,
  };
};
