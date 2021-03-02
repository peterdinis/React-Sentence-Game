export interface Sentence {
    what: string;
    where: string;
    when: string;
    who: string;
}

export interface SentenceState {
    sentences: Sentence[]
}