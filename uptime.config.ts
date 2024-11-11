const pageConfig = {
  // Title for your status page
  title: "Green Shade Capital Status",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/Green-Shade-Capital', label: 'GitHub' },
    { link: 'mailto:dev@greenshadecapital.com', label: 'Email Me', highlight: true },
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
    {
      id: 'gs-website-status',
      name: 'Green Shade Capital',
      method: 'GET',
      target: 'https://greenshadecapital.com',
      tooltip: 'Green Shade Capital Website monitor',
      statusPageLink: 'https://greenshadecapital.com',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'gs-api-status',
      name: 'Green Shade Capital API',
      method: 'GET',
      target: 'https://api.greenshadecapital.com',
      tooltip: 'Green Shade Capital Website monitor',
      statusPageLink: 'https://api.greenshadecapital.com',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'gs-network-status',
      name: 'Green Shade Capital IMN',
      method: 'GET',
      target: 'https://frp.greenshadecapital.com',
      tooltip: 'Green Shade Capital Website monitor',
      statusPageLink: 'https://frp.greenshadecapital.com', 
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'gs-github-status',
      name: 'Green Shade Capital Developer',
      method: 'GET',
      target: 'https://github.com/Green-Shade-Capital',
      tooltip: 'Green Shade Capital Github Developer Community monitor',
      statusPageLink: 'https://github.com/Green-Shade-Capitalm', 
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
  ],
  notification: {
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
