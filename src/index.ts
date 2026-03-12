import { Hono } from "hono";

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.get("/", (c) => {
  const cf = c.req.raw.cf;

  if (!cf) {
    return c.json({
      message: "Hello with Hono on Cloudflare Workers!",
    });
  }

  return c.json({
    location: `${cf.city} ${cf.country}`,
  });
});

export default app;
