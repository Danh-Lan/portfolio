interface Link {
  text: string;
  url: string;
}

interface Hobby {
  title: string;
  description: string;
  link?: Link;
}

interface Award {
  title: string;
  description: string;
}

export interface AboutMeData {
  aboutMe: {
    description: string;
  };
  hobbies: {
    title: string;
    items: Hobby[];
  };
  awards: {
    title: string;
    items: Award[];
  };
}