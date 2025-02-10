import { Message } from "./message"

export interface MesagesSchema {
    messages: Message[]
    isLoading: boolean
    error?: string
}