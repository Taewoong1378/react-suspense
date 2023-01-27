export interface Resource {
  user: {
    read(): {
      name: string;
      email: string;
    };
  };
  posts: {
    read(): {
      id: number;
      title: string;
    }[];
  };
}
