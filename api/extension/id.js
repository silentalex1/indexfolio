export default async function handler(req, res) {
  const { id } = req.query;
  
  if (!id || !/^[a-z]{32}$/i.test(id)) {
    return res.status(400).json({ error: 'Invalid extension ID' });
  }

  try {
    const response = await fetch(`https://chrome.google.com/webstore/detail/${id}`);
    
    if (!response.ok) {
      return res.status(404).json({ error: 'Extension not found' });
    }
    
    const html = await response.text();
    
    // Extract extension name from HTML
    const nameMatch = html.match(/<title>(.*?) - Chrome Web Store<\/title>/i);
    const name = nameMatch ? nameMatch[1] : 'Unknown Extension';
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 's-maxage=3600');
    
    return res.status(200).json({
      id,
      name,
      url: `https://chrome.google.com/webstore/detail/${id}`
    });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch extension details' });
  }
}
