interface Link {
  text: string;
  url: string;
}

interface Hobby {
  title: string;
  description: string;
  link?: Link;
}

export interface AboutMeData {
  aboutMe: {
    description: string;
  };
  hobbies: {
    title: string;
    items: Hobby[];
  };
}