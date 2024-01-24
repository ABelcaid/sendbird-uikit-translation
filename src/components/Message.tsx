import { useState } from "react";
import TranslationMenu from "./TranslationMenu";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Message(props: any) {
  const { message } = props;
  const [selectedLanguage, setSelectedLanguage] = useState("ja");

  const onTranslate = (lang: string) => {
    setSelectedLanguage(lang);
  };

  return (
    <div className="flex justify-end mb-4 cursor-pointer">
      <TranslationMenu onTranslate={onTranslate} />

      <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
        <p>{message.translations[selectedLanguage] ?? message.message}</p>
      </div>
      <img
        src={message.sender.plainProfileUrl}
        className=" m-1 w-10 h-10 rounded-full"
        alt="Avatar"
      />
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
