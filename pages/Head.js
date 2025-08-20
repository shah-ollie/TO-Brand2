import Head from "next/head";

const PageHead = ({ title, description }) => {
  const getContextualTitle = (pageTitle) => {
    const titleMap = {
      "Home": "TalentOllie - World's First Agentic Talent Stack | AI-Powered Hiring Platform",
      "Pricing": "Pricing Plans - TalentOllie Agentic Talent Stack | AI Hiring Solutions",
      "Text Generator": "AI Text Generator - TalentOllie | Generate Hiring Content with AI",
      "Image Generator": "AI Image Generator - TalentOllie | Create Visual Content for Hiring",
      "Code Generator": "AI Code Generator - TalentOllie | Automate Development Tasks",
      "Email Generator": "AI Email Generator - TalentOllie | Craft Professional Hiring Emails",
      "Video Generator": "AI Video Generator - TalentOllie | Create Engaging Video Content",
      "Chat Export": "Chat Export - TalentOllie | Export and Analyze AI Conversations",
      "Image Editor": "AI Image Editor - TalentOllie | Edit and Enhance Images with AI",
      "Contact": "Contact Us - TalentOllie | Get Started with Agentic Talent Stack",
      "Blog": "Blog - TalentOllie | Latest Insights on AI Hiring and Talent Acquisition",
      "Blog Details": "Blog Article - TalentOllie | AI Hiring Insights and Best Practices",
      "Team": "Our Team - TalentOllie | Meet the Agentic Talent Stack Creators",
      "Help": "Help Center - TalentOllie | Support for AI Hiring Platform",
      "Privacy Policy": "Privacy Policy - TalentOllie | Your Data Security with AI Hiring",
      "Terms Policy": "Terms of Service - TalentOllie | Agentic Talent Stack Usage Terms",
      "Profile Details": "Profile Settings - TalentOllie | Manage Your AI Hiring Account",
      "Plans Billing": "Plans & Billing - TalentOllie | Manage Your AI Hiring Subscription",
      "Notification": "Notifications - TalentOllie | Stay Updated on AI Hiring Activities",
      "Sessions": "Active Sessions - TalentOllie | Manage Your AI Platform Access",
      "Application": "Application Dashboard - TalentOllie | AI-Powered Hiring Interface",
      "Appearance": "Appearance Settings - TalentOllie | Customize Your AI Platform",
      "Utilize": "Utilize AI Tools - TalentOllie | Maximize Your Hiring Efficiency",
      "Roadmap": "Product Roadmap - TalentOllie | Future of AI Hiring Technology",
      "Release Notes": "Release Notes - TalentOllie | Latest AI Hiring Platform Updates",
      "Style Guide": "Style Guide - TalentOllie | Design System for AI Platform",
      "Sign In": "Sign In - TalentOllie | Access Your Agentic Talent Stack",
      "Sign Up": "Sign Up - TalentOllie | Start Your AI Hiring Journey"
    };

    return titleMap[pageTitle] || `${pageTitle} - TalentOllie | Agentic Talent Stack AI Platform`;
  };

  const getContextualDescription = (pageTitle, customDescription) => {
    if (customDescription) return customDescription;
    
    const descriptionMap = {
      "Home": "Transform hiring with TalentOllie's Agentic Talent Stack - the world's first AI platform that orchestrates perfect hiring decisions from scorecard to onboarding with 5-10x faster screening.",
      "Pricing": "Choose the perfect AI hiring plan for your organization. Scale interviews 5-10x faster with voice-first AI screening and automated talent acquisition workflows.",
      "Text Generator": "Generate compelling job descriptions, interview questions, and hiring communications with TalentOllie's AI text generator. Streamline your talent acquisition content creation.",
      "Image Generator": "Create professional visuals for job postings, company branding, and recruitment materials using TalentOllie's AI image generator for hiring teams.",
      "Code Generator": "Automate development tasks and generate technical assessment code with TalentOllie's AI code generator designed for technical recruiting workflows.",
      "Email Generator": "Craft personalized, professional hiring emails at scale. Generate candidate outreach, rejection letters, and onboarding communications with AI.",
      "Video Generator": "Create engaging video content for job postings, company culture showcases, and candidate communications using TalentOllie's AI video generator.",
      "Contact": "Ready to revolutionize your hiring process? Contact TalentOllie to book a demo of the Agentic Talent Stack and discover AI-powered talent acquisition.",
      "Blog": "Stay ahead in AI hiring with insights from TalentOllie. Discover best practices, industry trends, and success stories in AI-powered talent acquisition.",
      "Team": "Meet the innovative team behind TalentOllie's Agentic Talent Stack - experts in AI, hiring technology, and talent acquisition transformation."
    };

    return descriptionMap[pageTitle] || `${pageTitle} - Advanced AI tools and features for modern hiring teams using TalentOllie's Agentic Talent Stack platform.`;
  };

  return (
    <>
      <Head>
        <title>{getContextualTitle(title)}</title>
        <meta name="description" content={getContextualDescription(title, description)} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="AI hiring, talent acquisition, agentic AI, recruitment technology, voice-first screening, automated interviews, AI talent stack" />
        <meta property="og:title" content={getContextualTitle(title)} />
        <meta property="og:description" content={getContextualDescription(title, description)} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={getContextualTitle(title)} />
        <meta name="twitter:description" content={getContextualDescription(title, description)} />
        <link rel="icon" href="/favicon.ico?v=2" type="image/x-icon" />
        <link rel="icon" href="/favicon.png?v=2" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png?v=2" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
      </Head>
    </>
  );
};

export default PageHead;
