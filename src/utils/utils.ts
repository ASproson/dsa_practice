import { ListNode } from '../linkedLists';

export const listToArray = (head: ListNode | null): number[] => {
    const result: number[] = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
};

export const arrayToList = (arr: number[]): ListNode | null => {
    let head: ListNode | null = null;
    let current: ListNode | null = null;

    for (const val of arr) {
        const node = new ListNode(val);
        if (!head) {
            head = node;
            current = node;
        } else {
            current!.next = node;
            current = node;
        }
    }

    return head;
};
