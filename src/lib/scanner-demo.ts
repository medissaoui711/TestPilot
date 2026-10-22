// ============================================================================
// Public Demo Scanner (Client-Side Mock / Simulation Engine)
// No backend API calls or private AI prompts. Purely for public demo evaluation.
// ============================================================================

export interface Issue {
  id: string;
  title: string;
  description: string;
  severity: 'Critical' | 'Major' | 'Minor' | 'Info';
  category: 'Security' | 'Architecture' | 'Code Quality' | 'Dependencies' | 'Accessibility/UX';
  file?: string;
  line?: number;
  impact?: string;
  remediation?: string;
  proLogs?: {
    snippet: string;
    payload: string;
  };
  learnHub?: {
    problem: string;
    impact: string;
    solution: string;
  };
}

export interface OverviewMetrics {
  fileCount: number;
  linesOfCode: number;
  languages: string[];
  projectType: string;
  functionsCount: number;
  vulnerabilityCount: number;
  performanceScore: number;
}

export interface ProjectHealth {
  emptyFiles: string[];
  missingFiles: string[];
  duplicateFiles: string[];
  largeFiles: string[];
}

export interface DevelopmentPlan {
  fixNow: string[];
  next: string[];
  later: string[];
}

export interface TestReport {
  id: string;
  url: string;
  date: string;
  scores: {
    security: number;
    architecture: number;
    codeQuality: number;
    dependencies: number;
    accessibility: number;
  };
  overview: OverviewMetrics;
  health: ProjectHealth;
  missingParts: string[];
  plan: DevelopmentPlan;
  issues: Issue[];
  assumptions: string[];
  runReadyVerdict: 'Runnable' | 'Not Runnable' | 'Conditional';
  rawText?: string;
}

export interface FileData {
  path: string;
  content: string;
}

export async function runDemoScan(
  target: string, 
  files: FileData[] = [], 
  _metrics?: { fileCount: number, linesOfCode: number }
): Promise<TestReport> {
  // Simulate network latency for realism in demo
  await new Promise(resolve => setTimeout(resolve, 2500));
  
  const isBadTarget = target.toLowerCase().includes('vulnerable') || target.toLowerCase().includes('bad') || target.toLowerCase().includes('test');
  
  const scores = {
    security: isBadTarget ? 45 : 92,
    architecture: isBadTarget ? 58 : 90,
    codeQuality: isBadTarget ? 62 : 94,
    dependencies: isBadTarget ? 50 : 96,
    accessibility: isBadTarget ? 55 : 93
  };

  const issues: Issue[] = [];
  if (isBadTarget) {
    issues.push({
      id: 'DEMO-01',
      title: 'Hardcoded Secret Fallback Detected (Demo)',
      description: 'Potential exposure of default fallback secret keys in configuration files.',
      severity: 'Critical',
      category: 'Security',
      file: 'src/config.ts',
      line: 14,
      impact: 'Unauthorized access via default credentials.',
      remediation: 'Use secure environment variables and remove hardcoded fallbacks.',
      proLogs: {
        snippet: 'const API_KEY = process.env.KEY || "default_insecure_key";',
        payload: 'Default insecure fallback key active'
      },
      learnHub: {
        problem: 'Insecure default secret fallbacks',
        impact: 'Attackers can exploit well-known fallback credentials.',
        solution: 'Enforce strict environment validation on startup.'
      }
    });
  } else {
    issues.push({
      id: 'DEMO-02',
      title: 'Minor Accessibility Optimization',
      description: 'Missing aria-label on secondary action button.',
      severity: 'Minor',
      category: 'Accessibility/UX',
      file: 'src/components/Header.tsx',
      line: 42,
      impact: 'Screen reader users may miss button context.',
      remediation: 'Add descriptive aria-label attribute.',
      proLogs: {
        snippet: '<button className="icon-btn"><Search /></button>',
        payload: 'Missing aria-label'
      },
      learnHub: {
        problem: 'Incomplete ARIA attributes',
        impact: 'Reduced accessibility compliance.',
        solution: 'Add ARIA labels to icon-only buttons.'
      }
    });
  }

  return {
    id: Date.now().toString(),
    url: target,
    date: new Date().toISOString(),
    scores,
    overview: {
      fileCount: files.length || (isBadTarget ? 35 : 120),
      linesOfCode: isBadTarget ? 1850 : 14200,
      languages: ['TypeScript', 'TSX', 'CSS'],
      projectType: 'React SaaS Application (Public Demo)',
      functionsCount: isBadTarget ? 92 : 340,
      vulnerabilityCount: issues.length,
      performanceScore: isBadTarget ? 70 : 95,
    },
    health: {
      largeFiles: [],
      missingFiles: [],
      duplicateFiles: [],
      emptyFiles: []
    },
    missingParts: ['Automated Unit Tests'],
    plan: {
      fixNow: ['Resolve critical security warnings'],
      next: ['Improve test coverage'],
      later: ['Add enterprise SSO']
    },
    assumptions: ['Demo Mode: Client-side mock evaluation active.'],
    runReadyVerdict: isBadTarget ? 'Conditional' : 'Runnable',
    issues
  };
}

export const runScan = runDemoScan;
