export interface ChatMessage {
  author: string;
  message: string;
}

export interface ChatState {
  author: string;
  input: string;
  messages: ChatMessage[];
}
