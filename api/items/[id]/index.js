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
      const { id } = req.query

      // Validate ID parameter
      if (!id) {
        return res.status(400).json({
          error: 'Item ID is required',
          message: 'Please provide a valid item ID',
        })
      }

      // Import data.json dynamically
      const data = require('../../../data.json')

      // Find item by ID (using == for loose comparison to handle string/number)
      const item = data.items.find((item) => item.id == id)

      if (item) {
        res.status(200).json(item)
      } else {
        res.status(404).json({
          error: 'Item not found',
          message: `No item found with ID: ${id}`,
          availableIds: data.items.map((item) => item.id),
        })
      }
    } catch (error) {
      console.error('Error fetching item:', error)
      res.status(500).json({
        error: 'Failed to fetch item',
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
