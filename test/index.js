import test from 'ava';
import micro from 'micro';
import request from 'supertest';

import lambda from '..';

const HOST = 'https://anthony.codes';

test('GET / returns 301 with correct location', async t => {
  t.plan(3); // we plan to have 3 assertions
  const endpoint = micro(lambda), // set up lambda
    path = '/', // define path
    res = await request(endpoint).get(path); // make request
  t.snapshot(`${res.status} ${res.header.location}`);
  t.is(res.status, 301);
  t.is(res.header.location, `${HOST}${path}`);
});

test('GET /something returns 301 with correct location', async t => {
  t.plan(3);
  const endpoint = micro(lambda),
    path = '/something',
    res = await request(endpoint).get(path);
  t.snapshot(`${res.status} ${res.header.location}`);
  t.is(res.status, 301);
  t.is(res.header.location, `${HOST}${path}`);
});
