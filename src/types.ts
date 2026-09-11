export interface Project {
  id: string;
  title: string;
  status: string;
  statusType: 'completed' | 'current' | 'ongoing';
  technologies: string[];
  shortDescription: string;
  fullDescription?: string;
  keyFeatures?: string[];
  metricsOrHighlights?: string[];
  githubUrl?: string; // placeholder support
  demoUrl?: string; // placeholder support
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
  grade?: string;
  description?: string;
  badge?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer?: string;
  skillsCovered?: string[];
}

export interface ActivityItem {
  title: string;
  roleOrCategory: string;
  description: string;
  iconName: string;
  tags?: string[];
}
