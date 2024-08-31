import {z} from 'zod'

export interface ISubscriber {
    id: string;
    subscribed_at: string;
    email: string;
}

export const SubscriberSchema = z.object({
    email: z.string(),
})