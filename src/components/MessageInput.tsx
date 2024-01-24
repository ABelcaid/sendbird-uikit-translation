/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  sendBirdSelectors,
  useSendbirdStateContext,
} from "@sendbird/uikit-react";
import { useRef, useState } from "react";
import { useChannelContext } from "@sendbird/uikit-react/Channel/context";
import { chatTranslationLanguages } from "../utils/lang";

export function MessageInput() {
  const [inputText, setInputText] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const globalStore = useSendbirdStateContext();
  const sendUserMessage = sendBirdSelectors.getSendUserMessage(globalStore);
  const channelStore = useChannelContext();
  const channel = channelStore.currentGroupChannel;

  const handleChange = (event: any) => {
    setInputText(event.target.value);
  };

  const checkSendUserMessage = () => {
    const params = { message: "" } as any;
    params.message = inputText;
    params.translationTargetLanguages = chatTranslationLanguages.map(
      (language) => language.code
    );
    if (channel && params.message.trim() !== "") {
      sendUserMessage(channel, params)
        .onSucceeded(() => {
          if (inputRef.current) {
            inputRef.current.click();
          }
          setInputText("");
        })
        .onFailed((error: any) => {
          console.log(error.message);
        });
    }
  };

  return (
    <footer className="bg-white border-t border-gray-300 p-4 absolute bottom-0 w-full">
      <div className="flex items-center">
        <input
          ref={inputRef}
          type="text"
          placeholder="Type a message..."
          className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
          onChange={handleChange}
        />
        <button
          className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2"
          onClick={checkSendUserMessage}
        >
          Send
        </button>
      </div>
    </footer>
  );
}
