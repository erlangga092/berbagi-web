export interface IPost {
    slug: string;
    date: string;
    title: string;
    description: string;
    prerequisites: Array<string>;
    stacks: Array<string>;
}
