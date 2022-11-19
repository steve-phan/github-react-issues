interface IAuthor {
  login: string;
}
interface IComments {
  totalCount: number;
}

export interface IIssue {
  id: string;
  title: string;
  comments: IComments;
  author: IAuthor;
  number: number;
  createdAt: string;
}
