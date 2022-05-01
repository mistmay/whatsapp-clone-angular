export interface User {
    id: number;
    username: string;
}

export interface Message {
    body: string;
    id: number;
    postId: number;
    user: User;
}

export interface MessageHistory {
    text: string;
    time: string;
    isMe: boolean;
    isRead: boolean;
}

export interface MessageToUse {
    messages: MessageHistory[];
    id: number;
    postId: number;
    user: User;
}

export interface ApiResponse {
    comments: Message[];
    limit: number;
    skip: number;
    total: number;
}