export const profile = {
  name: 'M. Sudalai',
  initials: 'MS',
  title: 'Aspiring Analytics Engineer',
  subtitle: 'Data Analytics & Machine Learning',
  pitch:
    'B.Tech AI & Data Science student turning data into reliable models and pipelines.',
  location: 'Tenkasi, Tamil Nadu, India',
  email: 'm.sudalaivasu@gmail.com',
  phone: '+91 86082 00483',
  phoneHref: 'tel:+918608200483',
  linkedin: 'https://www.linkedin.com/in/sudalai-m-345657332',
  github: 'https://github.com/msudalaivasu-droid',
  resume: '/Sudalai_M_Resume.pdf',
}

export const emailLinks = {
  mailto: `mailto:${profile.email}?subject=${encodeURIComponent('Opportunity for M. Sudalai')}`,
  gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${encodeURIComponent('Opportunity for M. Sudalai')}`,
}

export const about =
  'B.Tech student in Artificial Intelligence and Data Science with hands-on experience in Python, SQL and Machine Learning through academic projects and a data analytics internship. Currently building advanced skills in data warehousing, dbt and pipeline orchestration to pursue a career as an Analytics Engineer. Strong foundation in data analysis, model comparison and problem-solving.'

export type SkillGroup = { title: string; items: string[]; learning?: boolean }

export const skillGroups: SkillGroup[] = [
  { title: 'Programming & Querying', items: ['Python', 'SQL'] },
  {
    title: 'Machine Learning & Data Science',
    items: ['Scikit-learn', 'XGBoost', 'TensorFlow', 'Keras', 'RDKit', 'Pandas', 'NumPy'],
  },
  { title: 'Visualization', items: ['Matplotlib', 'Seaborn'] },
  {
    title: 'Currently Learning',
    items: ['dbt', 'Data Warehousing', 'Apache Airflow', 'Advanced SQL'],
    learning: true,
  },
]

export type Metric = {
  value: number
  decimals?: number
  prefix?: string
  suffix?: string
  label: string
  note?: string
}

export type Project = {
  slug: string
  title: string
  repo: string
  demo?: string
  metrics: Metric[]
  star: { label: 'Situation' | 'Task' | 'Action' | 'Result'; body: string }[]
  tech: string[]
}

export const projects: Project[] = [
  {
    slug: 'tnbc-drug-discovery',
    title: 'TNBC Drug Discovery & Comparative Study',
    repo: 'https://github.com/msudalaivasu-droid/Drug-discovery-and-comparative-study-.-',
    metrics: [
      { value: 0.8, decimals: 2, label: 'R² score', note: 'best model' },
      { value: 10.3, decimals: 1, suffix: '%', label: 'Improvement', note: 'over baseline' },
      { value: 2757, label: 'Molecular features' },
      { value: 1052, label: 'Compounds', note: 'lab-tested dataset' },
      { value: 10000, suffix: '+', label: 'Compound scalability' },
    ],
    star: [
      {
        label: 'Situation',
        body: 'Predicting how well a drug is absorbed (bioavailability) is a key step in screening candidates for triple-negative breast cancer (TNBC), and the initial baseline model was not accurate enough to rely on.',
      },
      {
        label: 'Task',
        body: 'Build a more accurate, reliable prediction pipeline using a 1,052-compound lab-tested dataset, and make it ready to scale to 10,000+ compounds for real-world drug screening.',
      },
      {
        label: 'Action',
        body: "Engineered 2,757 molecular features (30 physicochemical properties + 2,727 fingerprints from RDKit's Morgan, MACCS and Avalon methods). Compared four approaches: a residual deep neural network, XGBoost, a stacked cross-validated ensemble and a weighted ensemble, and tuned ensemble weights with SLSQP.",
      },
      {
        label: 'Result',
        body: 'The best model reached an R² score of 0.80 (80.39% accuracy as measured in the project), a 10.3% improvement over the baseline, giving a dependable pipeline for screening TNBC drug candidates.',
      },
    ],
    tech: ['Python', 'TensorFlow/Keras', 'Scikit-learn', 'XGBoost', 'RDKit'],
  },
]

export type PlannedProject = { title: string; status: string }

// Delete an entry (or empty the array) to remove it from the "In progress" row.
export const plannedProjects: PlannedProject[] = [
  { title: 'ETL/ELT pipeline project', status: 'Planned' },
  { title: 'dbt analytics project', status: 'Planned' },
]

export const education = [
  {
    period: '2021 – 2023',
    title: 'Higher Secondary Education',
    institution: 'Govt. Boys Hr. Sec. School, Kayanallur, Tenkasi',
    score: 'Score: 80%',
  },
  {
    period: '2023 – 2027 (Expected)',
    title: 'B.Tech, Artificial Intelligence and Data Science',
    institution: 'Easa College of Engineering and Technology, Coimbatore',
    score: 'CGPA: 8.1',
  },
]

export const certification = {
  title: 'Data Analytics Internship',
  issuer: 'Ideal Formatic Institute of Technology',
  period: 'June – July 2025 · 17 days',
}

export const languages = [
  { name: 'Tamil', level: 'Native' },
  {
    name: 'English',
    level: 'Working proficiency',
    detail: 'Fluent reading & writing, conversational speaking',
  },
]

export const navItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#project', label: 'Project' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]
