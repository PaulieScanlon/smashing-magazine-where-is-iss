const axios = require('axios');

export default async function handler(req, res) {
  try {
    const { data: iss_now } = await axios.get(
      'http://api.open-notify.org/iss-now.json'
    );

    res.status(200).json({ iss_now });
  } catch (error) {
    res.status(500).json({ error });
  }
}
