export type NavLink = {
  name: string;
  href: string;
  source: string;
};

const navLinks: NavLink[] = [
  { name: '3-Column Feed', href: '/', source: 'Twitter/X' },
  { name: 'Sidebar + Content', href: '/sidebar-content', source: 'Gmail/Drive' },
  { name: 'Filter + Grid', href: '/filter-grid', source: 'Booking/Airbnb' },
  { name: 'Map + List Split', href: '/map-list-split', source: 'Airbnb/Zillow' },
  { name: 'Dashboard KPI', href: '/dashboard-kpi', source: 'Palantir/Tableau' },
  { name: 'CRM Record Detail', href: '/crm-record-detail', source: 'Salesforce' },
  { name: 'Data Table', href: '/data-table', source: 'Zoho/Airtable' },
  { name: 'Kanban Board', href: '/kanban-board', source: 'Trello/Jira' },
  { name: 'Chat/Messenger', href: '/chat-messenger', source: 'Slack/WhatsApp' },
  { name: 'Profile + Feed', href: '/profile-feed', source: 'LinkedIn/Facebook' },
  { name: 'Search Results', href: '/search-results', source: 'Google' },
  { name: 'Video Player', href: '/video-player', source: 'YouTube' },
  { name: 'E-commerce PDP', href: '/ecommerce-pdp', source: 'Amazon' },
  { name: 'Live Score', href: '/live-score', source: 'Cricinfo/ESPN' },
  { name: 'Settings Page', href: '/settings', source: 'Zoho/Notion' },
  { name: 'Calendar', href: '/calendar', source: 'Google Calendar' },
  { name: 'Form Builder', href: '/form-builder', source: 'Qualtrics/Typeform' },
];

export default navLinks;
