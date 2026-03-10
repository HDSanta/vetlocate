const API_KEY = process.env.REACT_APP_ANTHROPIC_API_KEY;

export async function getBenefits(location, rating) {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: `You are a veteran benefits expert. List the top veteran benefits available in ${location} for a veteran with a ${rating}% VA disability rating. Include state tax exemptions, property tax benefits, education benefits, employment preferences, and any county/local benefits if known. Format as a clean bullet list grouped by category. Be specific and accurate.`
        }
      ]
    })
  });
  const data = await response.json();
  return data.content[0].text;
}
