import jwt_decode from 'jwt-decode';

export function parseJwt(token: string) {
  const decoded = jwt_decode(token);
  return decoded;
}