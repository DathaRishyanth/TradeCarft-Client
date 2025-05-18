const url = `${import.meta.env.VITE_BACKEND_URL}/api/v1/news/news-details`;

const fetchNewsDetails = async (symbol) => {
  const token = localStorage.getItem('token'); 
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ symbol }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Network response was not ok: ${response.statusText}`);
      console.error(`Response body: ${errorText}`);
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data; // Expecting this to be a single object, not an array
  } catch (error) {
    console.error(`Error fetching news details for symbol ${symbol}:`, error);
    throw new Error('Failed to fetch news details.');
  }
};

export const newsData = async (symbol) => {
  try {
    const temp = await fetchNewsDetails(symbol);

    return {
      event1: temp.event1,
      event2: temp.event2,
      event3: temp.event3,
      news1: temp.news1,
      news2: temp.news2,
      news3: temp.news3,
    };
  } catch (error) {
    console.error(`Error fetching data for symbol ${symbol}:`, error);
    throw new Error('Failed to fetch news data.');
  }
};
