import test from 'ava';
import micro from 'micro';
import request from 'supertest';

import lambda from '..';

test('GET / returns 301 with location', async t => {
  t.plan(3); // we plan to have 3 assertions
  const endpoint = micro(lambda); // set up lambda
  const res = await request(endpoint).get('/'); // make request
  t.snapshot(`${res.status} ${res.header.location}`);
  t.is(res.status, 301);
  t.is(res.header.location, 'https://anthony.codes');
});

test('GET /something returns 301 with location', async t => {
  t.plan(3);
  const endpoint = micro(lambda);
  const res = await request(endpoint).get('/something');
  t.snapshot(`${res.status} ${res.header.location}`);
  t.is(res.status, 301);
  t.is(res.header.location, 'https://anthony.codes');
});
