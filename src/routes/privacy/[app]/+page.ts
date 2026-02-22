import { policies } from '$lib/data/policies';
import { error } from '@sveltejs/kit';

export const entries = () => Object.keys(policies).map((app) => ({ app }));

export function load({ params }) {
  const policy = policies[params.app];
  if (!policy) error(404, 'Privacy policy not found');
  return { policy };
}
