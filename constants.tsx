
import React from 'react';
import { 
  Brain, 
  Calculator, 
  Database, 
  GitBranch, 
  Map as MapIcon, 
  LayoutTemplate,
  Workflow,
  Sparkles,
  Zap
} from 'lucide-react';
import { Feature, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Introduction', href: '#intro' },
  { label: 'Insights', href: '#hub' },
  { label: 'Features', href: '#features' },
  { label: 'Copilot', href: '#copilot' },
];

export const FEATURES: Feature[] = [
  {
    id: 'copilot',
    title: 'Copilot 2.0',
    subtitle: 'From Chatbot to Autonomous Analyst',
    description: 'The next generation of AI in Power BI doesn’t just answer questions; it discovers the narrative behind your data proactively.',
    details: [
      'Proactive narrative discovery based on business goals',
      'Conversational voice-based report authoring',
      'Automated root-cause analysis with actionable suggestions'
    ],
    iconName: 'Brain',
    color: 'blue'
  },
  {
    id: 'calculations',
    title: 'Visual Calculations',
    subtitle: 'The Definitive DAX Killer',
    description: 'Common calculations are now handled directly on the visuals themselves, abstracting the complexity of DAX.',
    details: [
      'Drag-and-drop rolling averages and growth percentages',
      'Context-aware visual logic without complex row context',
      'Significant performance gains for heavy matrix visuals'
    ],
    iconName: 'Calculator',
    color: 'indigo'
  },
  {
    id: 'directlake',
    title: 'Direct Lake Standard',
    subtitle: 'The New Gold Standard for Performance',
    description: 'Zero-latency analytics is no longer a dream. Direct Lake mode is now the default for all OneLake-connected reports.',
    details: [
      'Real-time responsiveness with import-mode speeds',
      'Zero data movement between Fabric and Power BI',
      'Massive storage cost savings via OneLake integration'
    ],
    iconName: 'Database',
    color: 'sky'
  },
  {
    id: 'pbir',
    title: 'PBIR & Pro-Dev',
    subtitle: 'Professional Developer Workflow',
    description: 'Power BI Enhanced Report (PBIR) format enables modern software engineering practices for BI teams.',
    details: [
      'Git-native collaboration with branch-level report editing',
      'Seamless CI/CD pipelines with GitHub and Azure DevOps',
      'Full Dev → Test → Prod automation for enterprise reports'
    ],
    iconName: 'GitBranch',
    color: 'slate'
  },
  {
    id: 'spatial',
    title: '3D Spatial Analytics',
    subtitle: 'Enterprise-Grade Geospatial Insights',
    description: 'Native Azure Maps integration allows for deep spatial storytelling within your dashboard.',
    details: [
      'Layered data including real-time traffic and weather',
      'High-performance 3D heatmaps and extrusion',
      'GeoJSON support for custom territory boundaries'
    ],
    iconName: 'MapIcon',
    color: 'emerald'
  },
  {
    id: 'ux',
    title: 'App-Like UX',
    subtitle: 'Responsive, Modern Layouts',
    description: 'Your reports now feel like full-scale applications, automatically adapting to any device or orientation.',
    details: [
      'Dynamic slicers with mobile-first touch optimization',
      'Advanced small multiples with nested interactions',
      'Single-canvas responsive design (Fluid Layouts)'
    ],
    iconName: 'LayoutTemplate',
    color: 'violet'
  }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-8 h-8" />,
  Calculator: <Calculator className="w-8 h-8" />,
  Database: <Database className="w-8 h-8" />,
  GitBranch: <GitBranch className="w-8 h-8" />,
  MapIcon: <MapIcon className="w-8 h-8" />,
  LayoutTemplate: <LayoutTemplate className="w-8 h-8" />,
  Workflow: <Workflow className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
};
