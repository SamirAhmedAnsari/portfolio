export interface NavItem {
  title: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  approach: string;
  tools: string[];
  outcome: string;
  image?: string;
}

export interface Skill {
  name: string;
  description: string;
  icon: string;
}