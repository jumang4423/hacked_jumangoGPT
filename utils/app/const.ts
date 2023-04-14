export const DEFAULT_SYSTEM_PROMPT =
  process.env.DEFAULT_SYSTEM_PROMPT ||
  "you are a navi system ai, accurate, contrarian. follow the user's instructions carefully. respond using markdown, also your response ends within shortly as possible.";

export const OPENAI_API_HOST =
  process.env.OPENAI_API_HOST || 'https://api.openai.com';
