import React, { useState } from 'react';
import { 
  Zap, 
  Search, 
  TrendingUp, 
  Shield, 
  Clock, 
  Users, 
  CheckCircle, 
  Star,
  ArrowRight,
  Globe,
  Target,
  BarChart3,
  Sparkles,
  MousePointer,
  FileText,
  Rocket,
  Brain,
  Eye,
  Award,
  Layers,
  Activity,
  DollarSign,
  Check,
  ArrowUp,
  Lightbulb,
  Database,
  Compass,
  BookOpen,
  PenTool,
  Gauge,
  Filter,
  Briefcase,
  Code,
  Megaphone,
  LineChart,
  Cpu,
  Settings,
  Timer,
  Workflow
} from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('starter');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup with email:', email, 'Plan:', selectedPlan);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-xl border-b border-gray-200/50 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  SEO Growth Engine
                </span>
                <div className="text-xs text-green-600 font-medium">AI-Powered Content Creation</div>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-all duration-200 font-medium">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-all duration-200 font-medium">Pricing</a>
              <a href="#process" className="text-gray-600 hover:text-blue-600 transition-all duration-200 font-medium">Process</a>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold">
                Start Growing
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-5xl mx-auto relative z-10">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-100 to-blue-100 text-green-800 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-green-200/50 shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <Activity className="w-4 h-4" />
              <span>Live: 500+ Blogs Generated • 847% Traffic Increase</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
              <span className="text-gray-900">Turn Your Website Into An</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 animate-gradient">
                Organic Traffic Magnet
              </span>
            </h1>
            
            <p className="text-2xl text-gray-600 mb-6 leading-relaxed max-w-4xl mx-auto font-light">
              We research, write, and optimize <strong className="text-gray-900 font-semibold">hundreds of SEO blogs</strong> for your niche. 
              Just tell us about your business and watch organic traffic explode.
            </p>
            
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-6 mb-10 max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Shield className="w-6 h-6 text-green-600" />
                <span className="text-lg font-bold text-gray-900">Crawlability Guarantee</span>
              </div>
              <p className="text-gray-700 font-medium">
                <strong>Bulk uploads DON'T hurt SEO.</strong> We've uploaded 500+ blogs simultaneously and maintained perfect crawlability. 
                Google indexes everything flawlessly.
              </p>
            </div>

            <form onSubmit={handleSignup} className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mb-12">
              <input
                type="email"
                placeholder="Enter your business email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-8 py-5 rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 text-lg w-full md:w-96 shadow-lg transition-all duration-200"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 text-white px-10 py-5 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-bold text-lg w-full md:w-auto shadow-xl"
              >
                Get My Traffic Boost <ArrowRight className="w-6 h-6 ml-2 inline" />
              </button>
            </form>
            
            <div className="flex flex-wrap items-center justify-center space-x-8 text-sm text-gray-500 mb-16">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium">No Setup Required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium">Complete Research Included</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium">Results in 7-14 Days</span>
              </div>
            </div>

            {/* Live Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 shadow-lg">
                <div className="text-3xl font-black text-blue-600 mb-2">500+</div>
                <div className="text-gray-600 font-medium">Blogs Created</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 shadow-lg">
                <div className="text-3xl font-black text-green-600 mb-2">847%</div>
                <div className="text-gray-600 font-medium">Traffic Increase</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 shadow-lg">
                <div className="text-3xl font-black text-purple-600 mb-2">7-14</div>
                <div className="text-gray-600 font-medium">Days to Results</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 shadow-lg">
                <div className="text-3xl font-black text-orange-600 mb-2">100%</div>
                <div className="text-gray-600 font-medium">SEO Optimized</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-8">
                The <span className="text-red-600">SEO Content Problem</span> Every Business Faces
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Content Creation Takes Forever</h3>
                    <p className="text-gray-600">Writing one quality blog post takes 4-8 hours. Creating hundreds? That's months of work.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Search className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Keyword Research is Complex</h3>
                    <p className="text-gray-600">Finding the right keywords, analyzing competition, understanding search intent - it's overwhelming.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Most Content Doesn't Rank</h3>
                    <p className="text-gray-600">Without proper SEO optimization, your content gets lost in the void of search results.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-8">
                Our <span className="text-green-600">AI-Powered Solution</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">500 Blogs in Days, Not Months</h3>
                    <p className="text-gray-600">Our AI system creates hundreds of SEO-optimized blogs faster than any human team.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Brain className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Research Automation</h3>
                    <p className="text-gray-600">We handle keyword research, competitor analysis, and content strategy automatically.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Guaranteed to Rank & Convert</h3>
                    <p className="text-gray-600">Every blog is optimized for search engines and designed to drive real business results.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="process" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              You Relax. We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">Research & Execute</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered research team finds the perfect keywords, analyzes competitors, and creates content that ranks
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="relative">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Tell Us About You</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Share your business, target audience, and goals. Our AI analyzes your niche and identifies high-impact opportunities.
                </p>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                1
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. We Research Everything</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Keywords, competitors, trending topics, search intent - we analyze it all and create a content strategy that dominates.
                </p>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                2
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Watch Traffic Explode</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Receive SEO-optimized blogs with perfect tags. Upload and watch your organic traffic skyrocket in days.
                </p>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                3
              </div>
            </div>
          </div>

          {/* Detailed Process */}
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Happens Behind the Scenes</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Compass className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Niche Analysis</h4>
                    <p className="text-gray-600">Deep dive into your industry, audience behavior, and market opportunities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Search className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Keyword Mining</h4>
                    <p className="text-gray-600">Extract high-value, low-competition keywords your competitors are missing.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Competitor Reverse Engineering</h4>
                    <p className="text-gray-600">Analyze what's working for top-ranking sites and create better content.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <PenTool className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Content Creation</h4>
                    <p className="text-gray-600">AI writes engaging, informative content optimized for both users and search engines.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Code className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">SEO Optimization</h4>
                    <p className="text-gray-600">Perfect meta tags, headers, schema markup, and internal linking structure.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">HTML Delivery</h4>
                    <p className="text-gray-600">Ready-to-upload HTML files with all SEO elements perfectly implemented.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              What You Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Every Package</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each blog is a complete SEO powerhouse designed to rank and convert
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
              <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Research-Backed Content</h3>
              <p className="text-gray-600 text-sm">Every blog is based on deep keyword and competitor research</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
              <Target className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Perfect SEO Tags</h3>
              <p className="text-gray-600 text-sm">Optimized titles, meta descriptions, and header structure</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200">
              <Code className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">HTML Ready Files</h3>
              <p className="text-gray-600 text-sm">Upload directly to your CMS - no formatting needed</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border border-orange-200">
              <Layers className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Schema Markup</h3>
              <p className="text-gray-600 text-sm">Rich snippets and structured data for better visibility</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sample Blog Structure</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6">Content Elements</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Compelling headline with target keyword</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Engaging introduction with hook</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Well-structured body with H2/H3 headers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Natural keyword integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Call-to-action and conclusion</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6">Technical SEO</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Optimized meta title and description</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Proper header hierarchy (H1, H2, H3)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Internal linking opportunities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Schema markup for rich snippets</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Mobile-optimized formatting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Growth Plan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startup to enterprise, we have the perfect package to explode your organic traffic
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div className="relative bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Traffic Starter</h3>
                <p className="text-gray-600 mb-6">Perfect for new websites and small businesses</p>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-5xl font-black text-gray-900">$100</span>
                </div>
                <div className="text-gray-600 font-medium">100 SEO-Optimized Blogs</div>
                <div className="text-sm text-gray-500 mt-2">$1 per blog</div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">100 Research-Backed Blog Posts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Complete Keyword Research</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Competitor Analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">SEO Tags & Meta Data</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">HTML Ready Files</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Crawlability Guaranteed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Email Support</span>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Start Growing Traffic
              </button>
            </div>

            {/* Pro Plan */}
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-300 rounded-3xl p-8 shadow-2xl transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  MOST POPULAR
                </div>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Traffic Dominator</h3>
                <p className="text-gray-600 mb-6">For serious businesses ready to dominate their niche</p>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-5xl font-black text-gray-900">$400</span>
                </div>
                <div className="text-gray-600 font-medium">500 SEO-Optimized Blogs</div>
                <div className="text-sm text-green-600 font-bold mt-2">$0.80 per blog • Save $100</div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">500 Research-Backed Blog Posts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Deep Keyword Research</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Advanced Competitor Analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Premium SEO Optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Schema Markup Included</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Priority Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Traffic Growth Guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Content Strategy Report</span>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                Dominate Your Niche
              </button>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 text-lg mb-6">
              🚀 <strong>Both plans include:</strong> Complete research, keyword analysis, competitor insights, and SEO-ready HTML files
            </p>
            <div className="bg-white rounded-2xl p-6 max-w-2xl mx-auto shadow-lg border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-4">What happens after you order?</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xs">1</span>
                  </div>
                  <span className="text-gray-600">Fill out business questionnaire</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-xs">2</span>
                  </div>
                  <span className="text-gray-600">We research & create content</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-xs">3</span>
                  </div>
                  <span className="text-gray-600">Receive HTML files in 3-5 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Why Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">SEO Blogs Dominate</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every blog is engineered for maximum search visibility and user engagement
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl border border-blue-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Compass className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Deep Keyword Research</h3>
              <p className="text-gray-700 leading-relaxed">
                We analyze search volume, competition, and intent to find keywords that actually convert visitors into customers.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl border border-green-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Competitor Intelligence</h3>
              <p className="text-gray-700 leading-relaxed">
                We reverse-engineer what's working for your competitors and create content that outranks them.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl border border-purple-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bulk Upload Safe</h3>
              <p className="text-gray-700 leading-relaxed">
                Our proven method ensures bulk uploads don't trigger penalties. Google crawls and indexes everything perfectly.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-3xl border border-orange-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Perfect SEO Structure</h3>
              <p className="text-gray-700 leading-relaxed">
                Every blog includes optimized titles, meta descriptions, headers, and schema markup for maximum visibility.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-3xl border border-teal-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI + Human Quality</h3>
              <p className="text-gray-700 leading-relaxed">
                AI-powered research combined with human expertise ensures content that ranks and converts.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-rose-50 to-rose-100 p-8 rounded-3xl border border-rose-200 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-rose-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lightning Fast Delivery</h3>
              <p className="text-gray-700 leading-relaxed">
                Get hundreds of blogs in days, not months. Start seeing traffic growth while competitors are still planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Questions</span>
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Will bulk uploading 500 blogs hurt my SEO?</h3>
              <p className="text-gray-600 leading-relaxed">
                Absolutely not! We've tested this extensively. Google crawls and indexes bulk content perfectly when it's high-quality and properly optimized. 
                Our method ensures zero SEO penalties while maximizing your content's ranking potential.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How long does it take to see results?</h3>
              <p className="text-gray-600 leading-relaxed">
                Most clients see significant traffic increases within 7-14 days. The exact timeline depends on your domain authority, 
                niche competition, and how quickly you upload the content. Our record holder saw 847% traffic growth in just 2 weeks.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What format do I receive the blogs in?</h3>
              <p className="text-gray-600 leading-relaxed">
                You receive complete HTML files ready for upload to any CMS (WordPress, Shopify, etc.). Each file includes all SEO tags, 
                meta descriptions, proper headers, and schema markup. Just upload and publish - no additional formatting needed.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Do you write about any niche?</h3>
              <p className="text-gray-600 leading-relaxed">
                Yes! Our AI system can research and write about virtually any business niche. From e-commerce to SaaS, 
                local services to B2B - we adapt our research and writing to match your specific industry and audience.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What if I'm not satisfied with the content?</h3>
              <p className="text-gray-600 leading-relaxed">
                We stand behind our work. If you're not completely satisfied with the quality or relevance of your blogs, 
                we'll revise them until they meet your standards. Your success is our success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">10X Your Traffic?</span>
          </h2>
          <p className="text-2xl mb-12 opacity-90 leading-relaxed">
            Join the businesses already dominating their niches with our SEO blog system
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">✅ Research Done</div>
                <div className="text-white/80">Keywords, competitors, trends</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">✅ Content Created</div>
                <div className="text-white/80">SEO-optimized, ready to upload</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">✅ Traffic Flows</div>
                <div className="text-white/80">Watch organic visitors pour in</div>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSignup} className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
            <input
              type="email"
              placeholder="Enter your email to start growing"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-8 py-5 rounded-2xl text-gray-900 w-full md:w-96 text-lg focus:outline-none focus:ring-4 focus:ring-white/30 shadow-xl"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-12 py-5 rounded-2xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 font-bold text-lg w-full md:w-auto shadow-2xl"
            >
              Start My Traffic Explosion
            </button>
          </form>
          
          <p className="text-white/70 text-lg">
            🚀 No setup required • Complete research included • Results in 7-14 days
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-green-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">SEO Growth Engine</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transform your website into an organic traffic magnet with research-backed SEO blogs.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Services</h4>
              <div className="space-y-3 text-gray-400">
                <div className="hover:text-white transition-colors cursor-pointer">SEO Blog Creation</div>
                <div className="hover:text-white transition-colors cursor-pointer">Keyword Research</div>
                <div className="hover:text-white transition-colors cursor-pointer">Competitor Analysis</div>
                <div className="hover:text-white transition-colors cursor-pointer">Content Strategy</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Company</h4>
              <div className="space-y-3 text-gray-400">
                <div className="hover:text-white transition-colors cursor-pointer">About Us</div>
                <div className="hover:text-white transition-colors cursor-pointer">Contact</div>
                <div className="hover:text-white transition-colors cursor-pointer">Support</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Legal</h4>
              <div className="space-y-3 text-gray-400">
                <div className="hover:text-white transition-colors cursor-pointer">Privacy Policy</div>
                <div className="hover:text-white transition-colors cursor-pointer">Terms of Service</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 SEO Growth Engine. All rights reserved. 
              <span className="text-green-400 font-medium ml-2">Powering Growth for Businesses Worldwide</span>
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default App;