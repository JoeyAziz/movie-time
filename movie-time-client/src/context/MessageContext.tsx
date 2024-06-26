import { createContext, useCallback, useState } from "react";

export type MessageType = "success" | "error";

interface Message {
  id: number;
  message: string;
  messageType?: MessageType;
}

interface MessageContextProps {
  messages: Message[];
  addMessage: (msg: string, messageType?: MessageType) => void;
  removeMessage: (id: number) => void;
}

export const MessageContext = createContext<MessageContextProps | undefined>(undefined);

export const MessageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = useCallback((message: string, messageType?: MessageType) => {
    const id = new Date().getTime();
    setMessages((prev) => [...prev, { id, message, messageType }]);
  }, []);

  const removeMessage = useCallback((id: number) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  }, []);

  return <MessageContext.Provider value={{ messages, addMessage, removeMessage }}>{children}</MessageContext.Provider>;
};
