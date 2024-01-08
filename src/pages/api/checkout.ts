import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const priceId = "price_1OW6mEISCbVexMYm2dtQ1nqf";

  const successUrl = `${process.env.NEXT_URL}/success`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: "payment",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  });
  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
}

// Cartões para teste: https://stripe.com/docs/testing
// Checkout para Teste: https://checkout.stripe.com/c/pay/cs_test_a1hdGqj0ZfhiHPGO17TdPgG2JPLmB0Iy1sB1crFp2XW2QGVk1Nasl1q4on#fidkdWxOYHwnPyd1blpxYHZxWjA0SlI2fW5MVkZnU2B9SFxoT0NIRmgxUFE8SDx%2FUXJCV1NjZn9xYmN0SGxkVFVHdXx1PHFfTGxoV2ZkdEdVT2FMa01OYn9mYTc0a0xSaWBRaFNoYlVQPHBGNTVkYHc2PHxDZycpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl
