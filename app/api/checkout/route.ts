import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin") ?? "https://tattoosbyjess.com";

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "cad",
            product_data: {
              name: "Booking Deposit — Tattoos by Jess",
              description: "Non-refundable deposit to secure your appointment. Applied toward your final price.",
            },
            unit_amount: 2000, // $20.00 CAD in cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/deposit/success`,
      cancel_url: `${origin}/deposit`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
