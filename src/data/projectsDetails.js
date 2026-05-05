export const projectsDetails = [
{
  id: 1,
  title: "Payroll Management System",
  client: "Ergo",
  role: "Frontend Software Engineer",
  timeline: "2025 - Present",
  githubUrl: "#",
  liveUrl: "#",
  screenshots: [
    "/src/assets/payroll/login.png",
    "/src/assets/payroll/dashboard.jpg",
  ],
  overview: "A scalable and user-centric ERP and payroll web application built for Ergo to streamline workforce management across multiple factory locations. The platform focuses on delivering a seamless user experience for handling attendance, shift tracking, and payroll visualization, reducing manual workload and improving operational clarity.",
  challenges: [
    "Designing intuitive interfaces to represent complex payroll data and multi-shift schedules clearly for different user roles.",
    "Managing state and data flow efficiently across dashboards with high-frequency updates (attendance, shifts, salaries).",
    "Ensuring consistent performance and responsiveness across devices while handling large datasets."
  ],
  solutions: [
    "Built modular, reusable UI components using React to maintain scalability and consistency across the application.",
    "Integrated REST APIs with optimized state management to handle real-time data updates smoothly.",
    "Implemented responsive design and performance optimizations (lazy loading, memoization) to ensure fast and fluid user experience."
  ],
  keyFeatures: [
    "Interactive dashboards for payroll and attendance insights",
    "Role-based UI rendering for HR, managers, and admins",
    "Real-time data synchronization with backend services",
    "Responsive design across desktop and tablet devices"
  ]
},
{
  id: 2,
  title: "Cashflow Management System",
  client: "Internal Business Tool",
  role: "Frontend Software Engineer",
  timeline: "8-2025 to 11-2025",
  githubUrl: "#",
  liveUrl: "#",
  screenshots: [
    "/src/assets/cashflow/login.png", 
    "/src/assets/cashflow/dashboard.png",
    "/src/assets/cashflow/profile.png"
  ],
  overview: "A modern financial dashboard built to provide clear, real-time insights into budgets, expenses, and overall cash flow. The application replaces fragmented spreadsheet workflows with a responsive, intuitive interface focused on usability and data clarity.",
  challenges: [
    "Designing a smooth single-page application (SPA) experience while maintaining seamless integration with backend routing and authentication.",
    "Visualizing complex financial data in a way that is both interactive and easy to understand for non-technical users."
  ],
  solutions: [
    "Leveraged Inertia.js to tightly couple the frontend with the Laravel backend, enabling fast page transitions without a traditional API layer.",
    "Developed reusable, data-driven UI components and integrated efficient state handling to ensure real-time updates across dashboards.",
    "Implemented interactive charts and dynamic filters to enhance data exploration and usability."
  ],
  keyFeatures: [
    "Real-time financial dashboards with interactive charts",
    "Dynamic expense tracking and categorization UI",
    "Role-based interface rendering for different user types",
    "Responsive and accessible design across devices"
  ]
}

];