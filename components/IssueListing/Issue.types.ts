interface IAuthor {
  login: string;
}
interface IComments {
  totalCount: string;
}

export interface IIssue {
  id: string;
  title: string;
  comments: IComments;
  author: IAuthor;
  number: number;
  createdAt: string;
}
