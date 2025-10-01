import type { APIRoute } from 'astro';
import { nanoid } from 'nanoid';

export const GET: APIRoute = func;

export const POST: APIRoute = func;

function func({ request }: { request: Request }): Response {
    const params = new URL(request.url).searchParams;
    const ids: string[] = params.get('ids')?.split(',') ?? [];

    let id = nanoid();

    while (ids.includes(id)) {
        id = nanoid();
    }

    return new Response(
        JSON.stringify({ id }),
        {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        }
    );
}