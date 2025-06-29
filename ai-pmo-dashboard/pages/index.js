import React, { useState, useMemo } from 'react';
import Head from 'next/head';

// Simple icon components
const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const FilterIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const BrainIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Research data
  const researchData = [
    {
      id: 1,
      title: "AI-powered PMO: Transforming project management with intelligence",
      source: "Association for Project Management (APM)",
      url: "https://www.apm.org.uk/blog/ai-powered-pmo-transforming-project-management-with-intelligence/",
      category: "AI Strategy",
      date: "Recent",
      rating: 5,
      tags: ["AI PMO", "Automation", "Predictive Analytics"],
      summary: "Explores how AI-powered PMOs enhance efficiency through automation and predictive decision-making.",
      keyPoints: [
        "AI algorithms analyze project timelines to predict delays",
        "Automated project reporting provides real-time insights",
        "Resource allocation optimization through AI forecasting",
        "AI chatbots provide real-time project updates"
      ]
    },
    {
      id: 2,
      title: "Artificial Intelligence in Project Management",
      source: "Project Management Institute (PMI)",
      url: "https://www.pmi.org/learning/ai-in-project-management",
      category: "Professional Standards",
      date: "2025",
      rating: 5,
      tags: ["PMI Standard", "AI Training", "CPMAI"],
      summary: "PMI's comprehensive guide to AI in project management, including the new CPMAI certification program.",
      keyPoints: [
        "Introduction of Cognitive Project Management in AI (CPMAI) certification",
        "Structured, vendor-neutral approach to managing AI initiatives",
        "Training covers AI strategy, data management, and Generative AI",
        "PMI Infinity tool provides AI-powered project management assistance"
      ]
    },
    {
      id: 3,
      title: "How AI Will Transform Project Management",
      source: "Harvard Business Review",
      url: "https://hbr.org/2023/02/how-ai-will-transform-project-management",
      category: "Future Trends",
      date: "February 2023",
      rating: 5,
      tags: ["Transformation", "2030 Vision", "Virtual Assistants"],
      summary: "Harvard Business Review analysis of AI's transformative impact on project management by 2030.",
      keyPoints: [
        "Only 35% of projects completed successfully due to low technology maturity",
        "By 2030, field will undergo major shifts through AI and machine learning",
        "Technology will improve project selection and prioritization",
        "Project managers will focus more on coaching and stakeholder management"
      ]
    },
    {
      id: 4,
      title: "AI in Project Management: Is the Future Already Here?",
      source: "Epicflow",
      url: "https://www.epicflow.com/blog/ai-in-project-management-is-the-future-already-here/",
      category: "AI Applications",
      date: "January 2025",
      rating: 4,
      tags: ["Multi-project Management", "Machine Learning", "Virtual Assistant"],
      summary: "Examines current state of AI in project management with focus on multi-project environments.",
      keyPoints: [
        "Gartner predicts 80% of PM tasks will be run by AI by 2030",
        "AI algorithms determine which projects bring most value",
        "Machine learning detects patterns beyond manual capability",
        "Epica virtual assistant provides proactive service to users"
      ]
    },
    {
      id: 5,
      title: "The 4 best AI project management tools in 2025",
      source: "Zapier",
      url: "https://zapier.com/blog/best-ai-project-management-tools/",
      category: "AI Tools",
      date: "November 2024",
      rating: 4,
      tags: ["Tool Review", "Asana", "ClickUp", "Wrike"],
      summary: "Comprehensive review of top 4 AI-powered project management tools, focusing on practical features.",
      keyPoints: [
        "Asana: Machine learning for task relationships and workspace optimization",
        "ClickUp: AI reports and conversation starters for project insights",
        "Wrike: AI predicts project risks using machine learning analysis",
        "Hive: Project-from-prompt tool using AI for project generation"
      ]
    },
    {
      id: 6,
      title: "AI and Machine Learning in Project Management: From Automation to Intelligent Decision-Making",
      source: "Celoxis",
      url: "https://www.celoxis.com/article/ai-ml-project-management",
      category: "AI Strategy",
      date: "Recent",
      rating: 5,
      tags: ["Machine Learning", "Intelligent Decision-Making", "Market Growth"],
      summary: "Comprehensive analysis of AI/ML evolution in project management from basic automation to intelligent decision-making.",
      keyPoints: [
        "Global AI in PM market forecasted to reach $14.45 billion by 2034 (16.91% CAGR)",
        "Evolution from basic task automation to cognitive capabilities",
        "AI enables real-time monitoring, NLP analysis, and proactive interventions",
        "Predictive analytics for bottleneck identification and risk management"
      ]
    }
  ];

  const categories = ['all', 'AI Strategy', 'Professional Standards', 'Future Trends', 'AI Applications', 'AI Tools'];

  const filteredData = useMemo(() => {
    return researchData.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const getStarRating = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
    ));
  };

  const keyTrends = [
    { trend: "80% of PM tasks will be AI-automated by 2030", source: "Gartner" },
    { trend: "AI market in PM reaching $14.45B by 2034", source: "Market Research" },
    { trend: "90% accuracy in predicting project delays by 2028", source: "Industry Analysis" },
    { trend: "PMI launches CPMAI certification for AI projects", source: "PMI" }
  ];

  return (
    <>
      <Head>
        <title>AI for PMO & Project Management Research</title>
        <meta name="description" content="Comprehensive research on AI applications in Project Management Offices" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white shadow-2xl">
          <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <BrainIcon />
                <h1 className="text-5xl font-bold">
                  AI for PMO & Project Management
                </h1>
              </div>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Comprehensive research on Artificial Intelligence applications, tools, and strategies for Project Management Offices
              </p>
            </div>

            {/* Key Trends Banner */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4 text-center">🚀 Key AI Trends & Predictions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {keyTrends.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white/5 p-3 rounded">
                    <div className="text-cyan-300 flex-shrink-0">🤖</div>
                    <div>
                      <div className="text-sm font-medium">{item.trend}</div>
                      <div className="text-xs text-blue-200">— {item.source}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold">{researchData.length}</div>
                <div className="text-sm opacity-90">AI-Focused Articles</div>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold">4.7/5</div>
                <div className="text-sm opacity-90">Avg Quality Rating</div>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-violet-600 text-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold">{categories.length - 1}</div>
                <div className="text-sm opacity-90">AI Categories</div>
              </div>
              <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold">2025</div>
                <div className="text-sm opacity-90">Latest Research</div>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <div className="absolute left-3 top-3 text-white/70">
                    <SearchIcon />
                  </div>
                  <input
                    type="text"
                    placeholder="Search AI tools, techniques, applications..."
                    className="w-full pl-10 pr-4 py-2 bg-white/20 border border-white/30 text-white placeholder-white/70 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute left-3 top-3 text-white/70">
                    <FilterIcon />
                  </div>
                  <select
                    className="w-full pl-10 pr-4 py-2 bg-white/20 border border-white/30 text-white rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent appearance-none"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map(category => (
                      <option key={category} value={category} className="text-gray-900">
                        {category === 'all' ? 'All AI Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              AI Research Results ({filteredData.length} resources)
            </h2>
            <p className="text-gray-600">
              Latest insights on AI applications in PMO and project management
            </p>
          </div>

          <div className="grid gap-6">
            {filteredData.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-medium text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
                          {item.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-sm text-gray-700 font-medium">{item.source}</span>
                        <div className="flex items-center gap-1">
                          {getStarRating(item.rating)}
                        </div>
                        <span className="text-sm text-gray-500">{item.date}</span>
                      </div>

                      <p className="text-gray-700 mb-4 leading-relaxed">{item.summary}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag, index) => (
                          <span key={index} className="text-xs bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-2 py-1 rounded-full border border-blue-200">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key AI Capabilities:</h4>
                        <ul className="space-y-1">
                          {item.keyPoints.map((point, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 text-sm">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="ml-4">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 text-sm font-medium bg-purple-50 px-3 py-2 rounded-lg hover:bg-purple-100 transition-colors"
                      >
                        <ExternalLinkIcon />
                        View Source
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredData.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No AI resources found</h3>
              <p className="text-gray-600">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white py-12 mt-12">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-2xl font-semibold mb-4">🚀 AI for PMO: Key Insights</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-cyan-300">Current State</h4>
                <p className="text-gray-300 text-sm">
                  AI is actively transforming PMO functions through automation, predictive analytics, and intelligent decision-making.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-green-300">Key Applications</h4>
                <p className="text-gray-300 text-sm">
                  Risk prediction, resource optimization, automated reporting, virtual assistants, and knowledge management.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-orange-300">Strategic Recommendations</h4>
                <p className="text-gray-300 text-sm">
                  Start with data collection, invest in AI training (CPMAI certification), and focus on trust/governance frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}