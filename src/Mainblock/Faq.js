import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    title: "FAQ (How it works)",
    rows: [
        {
            title: "What investment options do Investowarrior offer?",
            content: "Investowarrior offers a range of investment options including stocks, bonds, mutual funds, ETFs, and alternative investments like real estate investment trusts (REITs) and peer-to-peer lending platforms"
        },
        {
            title: "How does the pricing structure work for Investowarrior's services?",
            content: "Investowarrior operates on a fee-based model where investors pay a percentage of their assets under management (AUM) annually. For example, if you have $10,000 invested and the fee is 1%, you would pay $100 per year."
        },
        {
            title: "Can you explain the process of investing through Investowarrior?",
            content: "Investing with Investowarrior is simple. After signing up, you'll complete a risk assessment questionnaire to determine your investment goals and risk tolerance. Then, you can choose from our recommended investment portfolios or customize your own based on your preferences."
        },
        {
            title: "Are there any minimum investment requirements?",
            content: "Yes, Investowarrior requires a minimum initial investment of $1,000 to open an account. However, some investment options may have higher minimums."
        },
        {
            title: "How does Investowarrior ensure the security of investments?",
            content: "Investowarrior takes security seriously. We use industry-standard encryption to protect your personal and financial information, and our investment platform is monitored 24/7 for any suspicious activity. Additionally, we work with reputable custodians to safeguard your investments."
        },
        {
            title: "What kind of returns can I expect from investing with Investowarrior?",
            content: "While we cannot guarantee specific returns, Investowarrior aims to provide competitive returns based on your chosen investment strategy and market conditions. Past performance is not indicative of future results."
        },
        {
            title: "Does Investowarrior offer any educational resources for investors?",
            content: "Yes, Investowarrior provides a variety of educational resources including articles, webinars, and tutorials to help investors understand financial concepts, investment strategies, and market trends."
        },
        {
            title: "Are there any hidden fees or charges associated with Investowarrior's services?",
            content: "No, Investowarrior is transparent about its fees. We disclose all fees upfront, including management fees, transaction fees, and any other charges associated with our services."
        },
        {
            title: "Can I track the performance of my investments through Investowarrior's platform?",
            content: "Absolutely! Investowarrior provides a user-friendly dashboard where you can track the performance of your investments in real-time. You'll have access to detailed reports and analytics to help you make informed decisions about your portfolio."
        },
        {
            title: "What support services does Investowarrior provide for investors?",
            content: "Investowarrior offers comprehensive customer support to assist investors with any questions or issues they may have. Our support team is available via phone, email, and live chat during regular business hours. Additionally, we provide educational resources and investment guidance to help investors succeed."
        },
    ],
        styles:{
            titleTextSize: '28px',
            rowContentPaddingBottom: '10px',
            rowContentPaddingTop: '10px',
        }
}


function Faqcomponent() {
    return (
        <>
            <Faq data={data} />
        </>
    )
}


export default Faqcomponent
