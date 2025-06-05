export interface Project {
  id: string;
  name: string;
  status: "completed" | "in-progress" | "pending";
  assignee: TeamMember;
  dueDate: string;
  type: string;
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  avatar: string;
  workingOn?: string;
  status?: "completed" | "in-progress" | "pending";
}

export interface ProjectAnalytics {
  day: string;
  completedTasks: number;
}

export interface ProjectStats {
  totalProjects: number;
  endedProjects: number;
  runningProjects: number;
  pendingProjects: number;
  trend: "increased" | "decreased" | "same";
}
