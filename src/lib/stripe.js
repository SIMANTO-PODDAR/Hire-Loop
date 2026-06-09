import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID = {
    'seeker_free':'price_1TgJETRrE3rEwN8zrxG9z56S',
    'recruiter_free': 'price_1TgJETRrE3rEwN8zrxG9z56S',
    'seeker_pro': 'price_1TgJETRrE3rEwN8zrxG9z56S',
    'seeker_premium': 'price_1TgJETRrE3rEwN8zrxG9z56S',
    'recruiter_growth': 'price_1TgJETRrE3rEwN8zrxG9z56S',
    'recruiter_enterprise': 'price_1TgJETRrE3rEwN8zrxG9z56S'
}