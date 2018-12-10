import { HistoryItem } from './historyItem';

export class History {
    _id: string;
    user: Object;
    arrItems: HistoryItem[];
    totalAmount: number;
    date: Date;
}

