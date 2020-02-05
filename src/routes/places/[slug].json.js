import db from '../_database';

export async function get(req, res, next) {
  const { slug } = req.params;

  const place = await db.places.findBySlug(slug);

  if (place) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(place));
  } else {
    next();
  }
}
