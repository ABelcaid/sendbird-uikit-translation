/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import TranslationMenu from "./TranslationMenu";

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
