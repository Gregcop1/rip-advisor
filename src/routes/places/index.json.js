import db from '../_database';

export async function get(req, res, next) {
  const places = await db.places.findAll();

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(places));
}
