export const projectsDetails = [
    {
    id: 1,
    title: "Masroufaty Expense Tracker",
    client: "Freelance Project",
    role: "Mobile App Developer",
    timeline: "8-2025 to 9-2025",
    githubUrl: "#",
    liveUrl: "#",
    screenshots: [
      "/assets/masroufaty/dashboard.jpeg",
      "/assets/masroufaty/expenses.jpeg",
      "/assets/masroufaty/add-expense.jpeg",
      "/assets/masroufaty/settings.jpeg",
      "/assets/masroufaty/monthly-reports.jpeg",
      "/assets/masroufaty/export.jpeg",
    ],
    overview:
      "This project is a comprehensive, offline-first personal finance management application tailored for the Egyptian marketplace. It empowers users to track daily expenses, manage varying income streams, and digitally archive physical receipts. Built with a heavy emphasis on a clean, modern UI/UX and robust local data processing, the app offers enterprise-grade reporting entirely on-device.",
    challenges: [
      "Data Persistence & Reliability: Ensuring complex financial data remains consistent and accessible without relying on a constant internet connection.",
      "Localization Complexity: Handling Right-to-Left (RTL) layouts and localized currency calculations within a modern, catchy visual framework.",
      "Fragmented Documentation: Managing physical paper receipts which are easily lost or damaged, leading to incomplete financial records.",
      "Portable Reporting: Providing users with professional, shareable financial summaries in standard formats (PDF/Excel) directly from a mobile environment."
    ],
    solutions: [
      "Relational Local Storage: Implemented a robust SQLite database using sqflite to manage relational integrity between expenses, income sources, and dynamic categories.",
      "Service Layer Abstraction: Abstracted all business logic and database queries into a dedicated ExpenseService to keep the UI code clean and strictly focused on rendering.",
      "Custom Theming System: Developed a cohesive design language using a centralized color dictionary to ensure a modern aesthetic while supporting future Light/Dark mode transitions.",
      "Algorithmic File Generation: Built custom export logic using the pdf and excel libraries to generate localized, professional reports on-demand."
    ],
    keyFeatures: [
      "Financial Dashboard.",
      "Receipt Archiving.",
      "Multi-Format Export.",
      "Data Portability.",
      "Dynamic Category Management."
    ],
  },
  {
    id: 2,
    title: "Payroll Management System",
    client: "Ergo",
    role: "Frontend Software Engineer",
    timeline: "2025 - Present",
    githubUrl: "#",
    liveUrl: "#",
    screenshots: [
      "/assets/payroll/login.png",
      "/assets/payroll/dashboard.jpg",
    ],
    overview:
      "A scalable and user-centric ERP and payroll web application built for Ergo to streamline workforce management across multiple factory locations. The platform focuses on delivering a seamless user experience for handling attendance, shift tracking, and payroll visualization, reducing manual workload and improving operational clarity.",
    challenges: [
      "Designing intuitive interfaces to represent complex payroll data and multi-shift schedules clearly for different user roles.",
      "Managing state and data flow efficiently across dashboards with high-frequency updates (attendance, shifts, salaries).",
      "Ensuring consistent performance and responsiveness across devices while handling large datasets.",
    ],
    solutions: [
      "Built modular, reusable UI components using React to maintain scalability and consistency across the application.",
      "Integrated REST APIs with optimized state management to handle real-time data updates smoothly.",
      "Implemented responsive design and performance optimizations (lazy loading, memoization) to ensure fast and fluid user experience.",
    ],
    keyFeatures: [
      "Interactive dashboards for payroll and attendance insights",
      "Role-based UI rendering for HR, managers, and admins",
      "Real-time data synchronization with backend services",
      "Responsive design across desktop and tablet devices",
    ],
  },
  {
    id: 3,
    title: "Cashflow Management System",
    client: "Internal Business Tool",
    role: "Frontend Software Engineer",
    timeline: "8-2025 to 11-2025",
    githubUrl: "#",
    liveUrl: "#",
    screenshots: [
      "/assets/cashflow/login.png",
      "/assets/cashflow/dashboard.png",
      "/assets/cashflow/profile.png",
    ],
    overview:
      "A modern financial dashboard built to provide clear, real-time insights into budgets, expenses, and overall cash flow. The application replaces fragmented spreadsheet workflows with a responsive, intuitive interface focused on usability and data clarity.",
    challenges: [
      "Designing a smooth single-page application (SPA) experience while maintaining seamless integration with backend routing and authentication.",
      "Visualizing complex financial data in a way that is both interactive and easy to understand for non-technical users.",
    ],
    solutions: [
      "Leveraged Inertia.js to tightly couple the frontend with the Laravel backend, enabling fast page transitions without a traditional API layer.",
      "Developed reusable, data-driven UI components and integrated efficient state handling to ensure real-time updates across dashboards.",
      "Implemented interactive charts and dynamic filters to enhance data exploration and usability.",
    ],
    keyFeatures: [
      "Real-time financial dashboards with interactive charts",
      "Dynamic expense tracking and categorization UI",
      "Role-based interface rendering for different user types",
      "Responsive and accessible design across devices",
    ],
  },
    {
    id: 4,
    title: "Medicore medical app",
    client: "freelance project",
    role: "mobile app developer",
    timeline: "4-2026 to 5-2026",
    githubUrl: "#",
    liveUrl: "#",
    screenshots: [
      "/assets/medicore/login.jpeg",
      "/assets/medicore/home.jpeg",
      "/assets/medicore/profile.jpeg",
      "/assets/medicore/community.jpeg",
      "/assets/medicore/emergency.jpeg",
    ],
    overview:
      "medicore is a comprehensive, modern healthcare mobile application designed to bridge the gap between patients and medical services. As the primary UI/UX Developer for this phase, my objective was to translate high-fidelity Figma designs into a pixel-perfect, highly responsive, and performant Flutter frontend. The project required setting up a scalable architecture, establishing a robust design system, and implementing complex, scrollable interfaces without compromising on fluid 60-FPS animations.",
    challenges: [
      "Translating a complex Figma design into code often leads to bloated, hard-to-maintain widget trees and performance bottlenecks, especially when dealing with nested scroll views and rich graphic elements. Furthermore, the design required absolute precision in padding, typography, and color gradients. The primary challenge was to engineer a frontend architecture that was not only visually identical to the design but also structured in a way that would allow backend engineers to seamlessly inject API logic later, without having to refactor the UI layer.",
    ],
    solutions: [
      "Centralized Design System: Rather than hardcoding styles, I built a highly configurable AppTheme class that dictates global InputDecoration, CardTheme, and GoogleFonts text styles. This shrank the codebase significantly by removing repetitive styling parameters.",
      "Optimized Rendering: To maximize performance, I relied heavily on native Flutter layouts (like Stack, Positioned, and custom BoxDecorations) instead of heavy third-party UI packages.",
      "Ready-to-Scale Routing: I implemented GoRouter coupled with Riverpod for dependency injection, establishing a robust, declarative routing system that handles deep linking and complex nested navigation out of the box. The result is a catchy, modern, and ultra-smooth interface that stands ready for full backend integration.",
    ],
    keyFeatures: [
      "Persistent Bottom Navigation.",
      "Responsive Typography & Sizing.",
      "Advanced Scroll Physics.",
      "Engaging Micro-interactions.",
    ],
  },

];
