
export type Post = {
    id: any;
    title: string;
    author: string;
    contents: string;
  };


export type User = {
  uuid: any;
  name: string;
  //contact: string;
  email: string;
  password: string;
  image?: string;
  // 추가 프로필 정보에 대한 타입 정의
};
  