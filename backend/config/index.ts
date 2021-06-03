import 'dotenv/config';

const loadProcessENV = (key: string): string => {
  const value = process.env[key];
  if (value === undefined) {
    throw new Error(`환경변수 ${key} 가 정의되지 않았습니다`);
  }

  return value;
}

export const PORT = Number(loadProcessENV('PORT'))