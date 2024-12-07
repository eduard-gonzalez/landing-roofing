export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly imagePath: string;
  readonly category: string;
  readonly details: ProjectDetails;
}

export interface ProjectDetails {
  location: string;
  area: string;
  duration: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}
