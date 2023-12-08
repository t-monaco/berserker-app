import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      'Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local',
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', {
      status: 400,
    });
  }

  // Try to insert the user into the DB
  if (evt.type === 'user.created') {
    const { id, first_name, last_name, email_addresses } = evt.data;

    const userData = {
      clerkId: id,
      firstName: first_name,
      lastName: last_name,
      email: email_addresses[0]?.email_address,
    };

    try {
      const user = await prisma.user.create({
        data: userData,
      });

      if (user) {
        return new Response('Webhook completed successfully.', { status: 200 });
      } else {
        throw new Error('Failed inserting user.');
      }
    } catch (err) {
      console.error('Error while pushing user into DB:', err);
      return new Response(
        `Error while pushing user into DB. ${err} ${userData}`,
        {
          status: 400,
        },
      );
    }
  }
}
