
import React from 'react';
import { 
  Code2, 
  Database, 
  Layout, 
  FileSpreadsheet, 
  GraduationCap, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  Languages, 
  Calendar,
  Briefcase,
  PenTool
} from 'lucide-react';

export const RESUME_DATA = {
  name: "Nivetha B",
  email: "bnivetha259@gmail.com",
  phone: "+91 93454 13565",
  address: "9/239 Bommanayackanpatti, Poolavadi(post), Dharapuram(Tk), Tirupur(DT)-642206",
  objective: "Entry-level Computer Science professional with a strong learning mindset, ready to adapt quickly and contribute to organizational success.",
  dob: "30-March-2005",
  languages: ["English", "Tamil"],
  skills: {
    technical: [
      { category: "Programming", skills: ["C", "C++", "Python"], icon: <Code2 className="w-5 h-5" /> },
      { category: "Database", skills: ["RDBMS", "SQL"], icon: <Database className="w-5 h-5" /> },
      { category: "Web Development", skills: ["HTML"], icon: <Layout className="w-5 h-5" /> },
      { category: "Microsoft Office", skills: ["Word", "Excel", "Power Point"], icon: <FileSpreadsheet className="w-5 h-5" /> }
    ],
    soft: ["Communication", "Team collaboration", "Eager to learn", "Time management"]
  },
  education: [
    {
      degree: "B.Sc. Computer Science",
      institution: "Nallamuthu Gounder Mahalingam College (Bharathiyar University)",
      year: "2023 - 2026",
      marks: "67% (upto 5th Sem)"
    },
    {
      degree: "Higher Secondary (HSC)",
      institution: "Rajalakshmi Gengusamy Matric Higher Secondary School, Pethappampatti",
      year: "2023",
      marks: "65.33%"
    },
    {
      degree: "Secondary School (SSLC)",
      institution: "Rajalakshmi Gengusamy Matric Higher Secondary School, Pethappampatti",
      year: "2021",
      marks: "100%"
    }
  ],
  certifications: [
    { title: "Python Programming", provider: "IIT Spoken Tutorial" },
    { title: "HTML", provider: "IIT Spoken Tutorial" },
    { title: "Cloud Computing", provider: "Value-Added Course" },
    { title: "Power BI", provider: "Value-Added Course" },
    { title: "UI/UX Design", provider: "Novitech" },
    { title: "Virtual Cloud Computing", provider: "Great learning" }
  ],
  affiliations: [
    "Placement Co-ordinator",
    "Member of SGS (Student Guide of Service)"
  ],
  achievement: "Awarded First Prize for excellence in Tamil Handwriting (overall) during 9th grade"
};

export const ICONS = {
  Mail, Phone, MapPin, Languages, Calendar, GraduationCap, Award, Briefcase, PenTool
};
