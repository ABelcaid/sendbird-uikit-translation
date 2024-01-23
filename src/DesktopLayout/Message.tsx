import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Message(props: any) {
  const { message } = props;
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  return (
    <div className="flex justify-end mb-4 cursor-pointer">
      <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
        <p>{message.translations[selectedLanguage] ?? message.message}</p>
      </div>
      <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
        <img
          src={message.sender.plainProfileUrl}
          alt="My Avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </div>
  );
}

// On demand translate >>

// const [translatedMessage, setTranslatedMessage] = useState<
// string | undefined
// >();

// const channelStore = useChannelContext();
// const channel = channelStore.currentGroupChannel;

// useEffect(() => {
// const onTranslateUserMessage = async () => {
//   const messageResponse = await channel?.translateUserMessage(message, [
//     selectedLanguage,
//   ]);

//   const translations = messageResponse?.translations as {
//     [key: string]: string;
//   };
//   setTranslatedMessage(translations[selectedLanguage]);
// };

// onTranslateUserMessage();
// }, [channel, message, selectedLanguage]);
