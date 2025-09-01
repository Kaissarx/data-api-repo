export default function handler(req, res) {
  // Enable CORS for all origins
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method === 'GET') {
    try {
      // Import data.json dynamically
      const data = require('../../data.json')

      // Return all services
      res.status(200).json(data.services)
    } catch (error) {
      console.error('Error fetching services:', error)
      res.status(500).json({
        error: 'Failed to fetch services',
        message: error.message,
      })
    }
  } else {
    res.setHeader('Allow', ['GET', 'OPTIONS'])
    res.status(405).json({
      error: `Method ${req.method} Not Allowed`,
      allowedMethods: ['GET', 'OPTIONS'],
    })
  }
}
