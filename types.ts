export interface Project {
  image: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  year: number;
  url: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
  position: string;
  date: string;
  rating?: number;
  clientImage: string;
  projectImage: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
}
