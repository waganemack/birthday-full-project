const apiBaseUrl = process.env.REACT_APP_API_URL;

export const getTodaysBirthday = async () => {
  let queryUrl = `${apiBaseUrl}/intervenants/today`;

  try {
    const response = await fetch(queryUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching today\'s birthday:', error);
    return false;
  }
};

export const getRandomQuote = async () => {
  let queryUrl = `${apiBaseUrl}/quotes/random`;

  try {
    const response = await fetch(queryUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching random quote:', error);
    return false;
  }
};
