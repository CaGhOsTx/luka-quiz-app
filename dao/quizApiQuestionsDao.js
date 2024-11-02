const QUIZ_DATA_ENDPOINT = "https://quizapi.io/api/v1/questions?apiKey=cSJvb0ZbxBFRsDCOcBJrieX7C0WOBZ7yh3EvdGdi&limit=5&category=Linux";

export async function getQuestions() {
  try {
    const response = await fetch(QUIZ_DATA_ENDPOINT);
    if (!response.ok) {
      throw new Error("Response is not OK", response);
    }
    const quizQuestions = await response.json();
    console.debug("api response: ", response);
    console.debug("api call results: ", quizQuestions);
    return quizQuestions;
  } catch (error) {
    console.error(`Error while trying to fetch questions for ${QUIZ_DATA_ENDPOINT}:`, error);
    throw error;
  }
}
