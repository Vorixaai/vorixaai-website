import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { 
  Brain, 
  Zap, 
  Target, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Mail, 
  Phone, 
  MapPin,
  Menu,
  X,
  ChevronDown
} from 'lucide-react';
import './App.css';

// Import images
import abstractAi1 from './assets/images/abstract_ai_1.jpg';
import abstractAi2 from './assets/images/abstract_ai_2.jpg';
import abstractAi3 from './assets/images/abstract_ai_3.jpg';
import futuristicAi1 from './assets/images/futuristic_ai_1.png';
import futuristicAi2 from './assets/images/futuristic_ai_2.png';
import neuralNetwork1 from './assets/images/neural_network_1.jpg';
import vorixaAILogo from './assets/images/vorixa_ai_logo.png';
import indyctAILogo from './assets/images/indyctai_logo.png';
import indyctAIIcon from './assets/images/indyctai_logo_icon.png';
import indyctAITransparent from './assets/images/indyctai_logo_transparent.png';
import indyctAINoBg from './assets/images/indyctai_logo_no_bg.png';
import IndyctAILogo from './components/IndyctAILogo';
import indyctAIFinalLogo from './assets/images/indyctai_final_logo.png';
import indyctAISymbol from './assets/images/indyctai_symbol_only.png';
import indyctAINewLogo from './assets/images/indyctai_new_logo.png';
import newAiBackground from './assets/images/new_ai_background.jpg';

import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [contactType, setContactType] = useState('personal');
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // Set document title
  useEffect(() => {
    document.title = 'IndyctAI - Uw Partner in Artificiële Intelligentie';
  }, []);

  // Smooth scroll function with epic animation
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      // Add multiple epic effects to the button
      const button = document.querySelector('.services-button');
      if (button) {
        // Create a ripple effect
        button.style.transform = 'scale(0.95)';
        button.style.boxShadow = '0 0 30px rgba(6, 182, 212, 0.8), 0 0 60px rgba(59, 130, 246, 0.4)';
        
        setTimeout(() => {
          button.style.transform = 'scale(1)';
          button.style.boxShadow = '';
        }, 200);
        
        // Add a temporary glow effect
        button.classList.add('animate-pulse');
        setTimeout(() => button.classList.remove('animate-pulse'), 600);
      }
      
      // Smooth scroll with easing
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Add a subtle shake effect to the services section when reached
      setTimeout(() => {
        servicesSection.style.animation = 'subtle-bounce 0.6s ease-out';
        setTimeout(() => {
          servicesSection.style.animation = '';
        }, 600);
      }, 800);
    }
  };

  // Navigation items
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Diensten', href: '#services' },
    { name: 'Over IndyctAI', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  // Services data
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Strategie & Advies",
      description: "Ontwikkel een heldere AI-strategie inclusief implementatieplan, systeemintegratie en adoptie-roadmap die direct leidt tot meetbare verbeteringen in uw bedrijfsprestaties.",
      features: ["Strategische roadmap", "Systeemintegratie", "Adoptie-begeleiding"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Machine Learning Ontwikkeling",
      description: "Implementeer geavanceerde ML-modellen die de nauwkeurigheid van voorspellingen met 25% verbeteren en handmatige taken met 50% verminderen.",
      features: ["25% betere voorspellingen", "50% minder handmatige taken", "Snellere besluitvorming"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "AI-gestuurde Automatisering",
      description: "Automatiseer repetitieve processen en realiseer een kostenbesparing van gemiddeld 30% binnen zes maanden.",
      features: ["30% kostenbesparing", "2x snellere processen", "Foutreductie tot 90%"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Data Wetenschap & Analyse",
      description: "Transformeer ruwe data in bruikbare inzichten die leiden tot 15% hogere omzet en geoptimaliseerde marketingcampagnes.",
      features: ["15% omzetgroei", "Gerichte marketing", "Diepgaande klantinzichten"]
    }
  ];

  // Stats data
  const stats = [
    { number: "30%+", label: "Kostenbesparing" },
    { number: "2x", label: "Snellere Processen" },
    { number: "90%", label: "Foutreductie" },
    { number: "100%", label: "Tevredenheid" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center">
                  <img src={indyctAINewLogo} alt="IndyctAI Logo" className="h-8 w-8 mr-2" />
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    IndyctAI
                  </h1>
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-white p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-slate-800/95 backdrop-blur-md"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
          <img
            src={newAiBackground}
            alt="AI Background"
            className="w-full h-full object-cover opacity-30"
          />
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Verhoog Uw Winst met
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Direct Meetbare AI
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              IndyctAI transformeert uw bedrijfsprocessen met op maat gemaakte AI-oplossingen die aantoonbaar leiden tot 
              gemiddeld 30% kostenbesparing en 2x snellere operationele efficiëntie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <Button 
                  size="lg" 
                  onClick={scrollToServices}
                  className="services-button relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 overflow-hidden border-2 border-transparent hover:border-cyan-400/50 transition-all duration-500"
                >
                  {/* Animated background layers */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Scanning line effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Particle effect corners */}
                  <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse delay-100"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse delay-200"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse delay-300"></div>
                  
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-md bg-gradient-to-r from-cyan-400/50 to-blue-400/50 blur-sm"></div>
                  </div>
                  
                  {/* Text with special effects */}
                  <span className="relative z-10 flex items-center font-semibold tracking-wide">
                    <motion.span
                      className="mr-2"
                      animate={{
                        textShadow: [
                          "0 0 0px rgba(6, 182, 212, 0)",
                          "0 0 10px rgba(6, 182, 212, 0.5)",
                          "0 0 0px rgba(6, 182, 212, 0)"
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    >
                      Plan jouw gratis AI Quickscan nu – binnen 24 uur contact
                    </motion.span>
                    
                    {/* Animated arrow with trail effect */}
                    <motion.div className="relative">
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      <motion.div
                        className="absolute inset-0"
                        animate={{
                          x: [0, 8, 0],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 0.5
                        }}
                      >
                        <ArrowRight className="w-5 h-5 text-cyan-300" />
                      </motion.div>
                    </motion.div>
                  </span>
                  
                  {/* Holographic effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut"
                    }}
                  />
                </Button>
              </motion.div>
              <Dialog open={isContactFormOpen} onOpenChange={setIsContactFormOpen}>
                <DialogTrigger asChild>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group"
                  >
                    <Button 
                      size="lg" 
                      className="contact-button relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 overflow-hidden border-2 border-transparent hover:border-pink-400/50 transition-all duration-500"
                    >
                      {/* Animated background layers */}
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Scanning line effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          repeatDelay: 4,
                          ease: "easeInOut"
                        }}
                      />
                      
                      {/* Particle effect corners */}
                      <div className="absolute top-0 left-0 w-2 h-2 bg-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                      <div className="absolute top-0 right-0 w-2 h-2 bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse delay-100"></div>
                      <div className="absolute bottom-0 left-0 w-2 h-2 bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse delay-200"></div>
                      <div className="absolute bottom-0 right-0 w-2 h-2 bg-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse delay-300"></div>
                      
                      {/* Glowing border effect */}
                      <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 rounded-md bg-gradient-to-r from-pink-400/50 to-purple-400/50 blur-sm"></div>
                      </div>
                      
                      {/* Text with special effects */}
                      <span className="relative z-10 flex items-center font-semibold tracking-wide">
                        <motion.span
                          className="mr-2"
                          animate={{
                            textShadow: [
                              "0 0 0px rgba(236, 72, 153, 0)",
                              "0 0 10px rgba(236, 72, 153, 0.5)",
                              "0 0 0px rgba(236, 72, 153, 0)"
                            ]
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            repeatDelay: 1.5
                          }}
                        >
                          Start vandaag – ontvang binnen 14 dagen uw AI-oplossing
                        </motion.span>
                        
                        {/* Animated mail icon with pulse effect */}
                        <motion.div className="relative">
                          <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                          <motion.div
                            className="absolute inset-0"
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0, 0.8, 0]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 1
                            }}
                          >
                            <Mail className="w-5 h-5 text-pink-300" />
                          </motion.div>
                        </motion.div>
                      </span>
                      
                      {/* Holographic effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400/10 to-transparent opacity-0 group-hover:opacity-100"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: "easeInOut"
                        }}
                      />
                    </Button>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto bg-slate-800 border-slate-700 text-white">
                  <DialogHeader>
                    <DialogTitle>Neem Contact Op</DialogTitle>
                    <DialogDescription>
                      Vul het onderstaande formulier in en we nemen zo snel mogelijk contact met u op.
                    </DialogDescription>
                  </DialogHeader>
                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.target);
                      const name = formData.get('name');
                      const email = formData.get('email');
                      const message = formData.get('message');
                      const companyName = formData.get('companyName');
                      
                      // Validate fields
                      if (!name || !email || !message) {
                        alert('Vul alstublieft alle velden in.');
                        return;
                      }
                      
                      // Validate company name if business is selected
                      if (contactType === 'bedrijf' && !companyName) {
                        alert('Vul alstublieft de bedrijfsnaam in.');
                        return;
                      }
                      
                      // Create mailto link with form data
                      const subject = contactType === 'bedrijf' 
                        ? `Bedrijfscontact van ${companyName} via IndyctAI website`
                        : `Contact van ${name} via IndyctAI website`;
                      
                      let body = `Type: ${contactType === 'bedrijf' ? 'Bedrijf' : 'Persoonlijk'}\n`;
                      if (contactType === 'bedrijf') {
                        body += `Bedrijfsnaam: ${companyName}\nContactpersoon: ${name}\n`;
                      } else {
                        body += `Naam: ${name}\n`;
                      }
                      body += `E-mail: ${email}\n\nBericht:\n${message}`;
                      
                      const mailtoLink = `mailto:indyctai@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                      
                      // Open email client
                      window.location.href = mailtoLink;
                      
                      // Show confirmation and close form
                      alert('Uw e-mailclient wordt geopend om het bericht te versturen. Als dit niet werkt, stuur dan direct een e-mail naar indyctai@gmail.com');
                      setIsContactFormOpen(false);
                      e.target.reset();
                    }}
                  >
                    <div className="grid gap-4 py-4">
                      {/* Contact Type Selection */}
                      <div className="grid grid-cols-4 items-center gap-4">
                        <label className="text-right text-sm">
                          Type
                        </label>
                        <div className="col-span-3 flex gap-4">
                          <label className="flex items-center gap-2 text-sm">
                            <input
                              type="radio"
                              name="contactType"
                              value="persoonlijk"
                              checked={contactType === 'persoonlijk'}
                              onChange={(e) => setContactType(e.target.value)}
                              className="text-blue-600"
                            />
                            Persoonlijk
                          </label>
                          <label className="flex items-center gap-2 text-sm">
                            <input
                              type="radio"
                              name="contactType"
                              value="bedrijf"
                              checked={contactType === 'bedrijf'}
                              onChange={(e) => setContactType(e.target.value)}
                              className="text-blue-600"
                            />
                            Bedrijf
                          </label>
                        </div>
                      </div>

                      {/* Company Name Field - Only show when "bedrijf" is selected */}
                      {contactType === 'bedrijf' && (
                        <div className="grid grid-cols-4 items-center gap-4">
                          <label htmlFor="companyName" className="text-right text-sm">
                            Bedrijfsnaam
                          </label>
                          <Input 
                            id="companyName" 
                            name="companyName" 
                            required={contactType === 'bedrijf'}
                            className="col-span-3 bg-slate-700 border-slate-600" 
                            placeholder="Naam van uw bedrijf"
                          />
                        </div>
                      )}

                      <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="name" className="text-right text-sm">
                          {contactType === 'bedrijf' ? 'Contactpersoon' : 'Naam'}
                        </label>
                        <Input id="name" name="name" required className="col-span-3 bg-slate-700 border-slate-600" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="email" className="text-right text-sm">
                          Email
                        </label>
                        <Input id="email" name="email" type="email" required className="col-span-3 bg-slate-700 border-slate-600" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="message" className="text-right text-sm">
                          Bericht
                        </label>
                        <Textarea id="message" name="message" required className="col-span-3 bg-slate-700 border-slate-600" />
                      </div>
                    </div>
                    
                    {/* Suggestions Section - Compact for mobile */}
                    <div className="mt-4 p-3 bg-slate-700/50 rounded-lg border border-slate-600">
                      <h4 className="text-white font-semibold mb-2 flex items-center text-sm">
                        <span className="mr-2">💡</span>
                        Niet zeker wat u nodig heeft? Klik op een idee:
                      </h4>
                      <div className="grid grid-cols-1 gap-1 text-xs">
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.01, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                          className="text-left p-2 rounded text-slate-300 hover:text-white transition-colors"
                          onClick={() => {
                            const messageField = document.getElementById('message');
                            messageField.value = "Ik wil graag weten hoe AI mijn bedrijfsprocessen kan automatiseren en efficiënter kan maken.";
                          }}
                        >
                          🤖 "Hoe kan AI mijn bedrijfsprocessen automatiseren?"
                        </motion.button>
                        
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.01, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                          className="text-left p-2 rounded text-slate-300 hover:text-white transition-colors"
                          onClick={() => {
                            const messageField = document.getElementById('message');
                            messageField.value = "Ik heb veel data maar weet niet hoe ik hier waardevolle inzichten uit kan halen. Kunnen jullie helpen?";
                          }}
                        >
                          📊 "Ik heb veel data maar geen inzichten"
                        </motion.button>
                        
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.01, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                          className="text-left p-2 rounded text-slate-300 hover:text-white transition-colors"
                          onClick={() => {
                            const messageField = document.getElementById('message');
                            messageField.value = "Ik wil een chatbot of AI-assistent voor mijn website/bedrijf. Wat zijn de mogelijkheden?";
                          }}
                        >
                          💬 "Ik wil een AI-chatbot voor mijn website"
                        </motion.button>
                        
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.01, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                          className="text-left p-2 rounded text-slate-300 hover:text-white transition-colors"
                          onClick={() => {
                            const messageField = document.getElementById('message');
                            messageField.value = "Ik wil graag een gratis AI-strategie gesprek om te bespreken wat de mogelijkheden zijn voor mijn bedrijf.";
                          }}
                        >
                          🎯 "Ik wil een gratis strategiegesprek"
                        </motion.button>
                      </div>
                    </div>
                    
                    <DialogFooter>
                      <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Verstuur</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-slate-400" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-300 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative overflow-hidden">
        {/* Background animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-cyan-900/10"></div>
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Onze <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Diensten</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Van AI-strategie en systeemintegratie tot teamtraining en adoptie-begeleiding. IndyctAI levert niet alleen 
              technologie, maar ook de expertise om uw organisatie succesvol te transformeren naar een AI-gedreven bedrijf.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.03, 
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group perspective-1000"
              >
                <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-500 h-full relative overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardHeader className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div 
                        className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg text-white group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {service.icon}
                      </motion.div>
                      <CardTitle className="text-white text-xl group-hover:text-blue-300 transition-colors duration-300">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-slate-300 text-base group-hover:text-slate-200 transition-colors duration-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div 
                          key={featureIndex} 
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.2) + (featureIndex * 0.1) + 0.5 }}
                        >
                          <CheckCircle className="w-4 h-4 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
                          <span className="text-slate-300 text-sm group-hover:text-slate-200 transition-colors duration-300">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Waarom <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">IndyctAI</span>
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                Terwijl standaard AI-tools en no-code platformen generieke oplossingen bieden, specialiseert IndyctAI zich in 
                volledig op maat gemaakte AI-systemen die naadloos integreren met uw bestaande infrastructuur en processen. 
                Wij zijn geen leverancier van kant-en-klare tools, maar uw strategische partner in AI-transformatie.
              </p>
              <p className="text-lg text-slate-300 mb-6">
                Onze aanpak gaat verder dan implementatie. We begeleiden uw organisatie door de volledige AI-adoptie cyclus: 
                van strategische planning en systeemintegratie tot teamtraining en change management. IndyctAI zorgt ervoor 
                dat uw medewerkers de nieuwe AI-tools effectief kunnen gebruiken en dat uw bedrijf maximaal profiteert van 
                de technologische investering.
              </p>
              <p className="text-lg text-slate-300 mb-8">
                Als uw toekomstbestendige AI-partner ontwikkelen we niet alleen de technologie, maar ook de strategie voor 
                langetermijn succes. Van initiële implementatie tot continue optimalisatie en schaalbaarheid - IndyctAI 
                zorgt ervoor dat uw AI-oplossingen meegroeien met uw bedrijf en blijven presteren in een snel veranderende 
                digitale wereld.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={futuristicAi1}
                  alt="AI Technology"
                  className="rounded-lg shadow-2xl"
                />
                <img
                  src={neuralNetwork1}
                  alt="Neural Network"
                  className="rounded-lg shadow-2xl mt-8"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Neem <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Contact</span> Op
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Bent u klaar om de toekomst van uw bedrijf te transformeren met artificiële intelligentie? 
              Laten we de mogelijkheden bespreken.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Contactgegevens</CardTitle>
                  <CardDescription className="text-slate-300">
                    IndyctAI staat klaar om uw vragen te beantwoorden
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">E-mail</p>
                      <p className="text-slate-300">indyctai@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Telefoon</p>
                      <p className="text-slate-300">+31 6 20 70 92 56</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Adres</p>
                      <p className="text-slate-300">
                        Leidsestraatweg 237<br />
                        3443BT Utrecht<br />
                        Nederland
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={futuristicAi2}
                alt="Contact AI"
                className="rounded-lg shadow-2xl w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src={indyctAINewLogo} alt="IndyctAI Logo" className="h-8 w-8 mr-2" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  IndyctAI
                </h3>
              </div>
              <p className="text-slate-300 mb-4">
                Uw partner in artificiële intelligentie. Transformeer uw bedrijf met geavanceerde AI-oplossingen.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Diensten</h4>
              <ul className="space-y-2 text-slate-300">
                <li>AI Strategie & Advies</li>
                <li>Machine Learning Ontwikkeling</li>
                <li>AI-gestuurde Automatisering</li>
                <li>Data Wetenschap & Analyse</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-300">
                <li>indyctai@gmail.com</li>
                <li>+31 6 20 70 92 56</li>
                <li>Utrecht, Nederland</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400">
              © 2025 IndyctAI. Alle rechten voorbehouden.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;



      {/* Case Study/Demo Section */}
      <section id="cases" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Onze <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Resultaten</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ontdek hoe IndyctAI bedrijven zoals het uwe heeft geholpen om concrete resultaten te behalen met AI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Case Study: Efficiëntieboost bij E-commerce Gigant</CardTitle>
                  <CardDescription className="text-slate-300">
                    Implementatie van een AI-gestuurd voorraadbeheersysteem.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-slate-300">
                    Een toonaangevende e-commerce speler kampte met inefficiënte voorraadprocessen, wat leidde tot overschotten en tekorten. IndyctAI ontwikkelde en implementeerde een geavanceerd AI-systeem dat vraagvoorspelling en voorraadoptimalisatie automatiseerde.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-slate-300">20% reductie in voorraadkosten</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-slate-300">15% snellere orderverwerking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-slate-300">95% nauwkeurigheid in vraagvoorspelling</span>
                    </div>
                  </div>
                  <blockquote className="text-slate-400 italic border-l-4 border-blue-500 pl-4">
                    "De AI-oplossing van IndyctAI heeft onze supply chain volledig getransformeerd. We zien nu al een aanzienlijke verbetering in onze operationele efficiëntie en een directe impact op onze winstgevendheid."
                    <footer className="mt-2 text-white">— Sarah Jansen, COO van E-commerce Gigant</footer>
                  </blockquote>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={futuristicAi1}
                alt="Case Study AI"
                className="rounded-lg shadow-2xl w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Klaar voor <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Transformatie?</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Start vandaag nog met uw AI-reis. Ontvang binnen 14 dagen een volledig op maat gemaakte AI-oplossing 
              die direct impact heeft op uw bedrijfsresultaten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3"
                    >
                      Plan jouw gratis AI Quickscan nu – binnen 24 uur contact
                    </Button>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-slate-800 border-slate-700 text-white">
                  <DialogHeader>
                    <DialogTitle>Plan Uw Gratis AI-Quickscan</DialogTitle>
                    <DialogDescription>
                      Ontdek binnen 30 minuten de AI-mogelijkheden voor uw bedrijf.
                    </DialogDescription>
                  </DialogHeader>
                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.target);
                      const name = formData.get('name');
                      const email = formData.get('email');
                      const company = formData.get('company');
                      
                      const subject = `AI-Quickscan aanvraag van ${company}`;
                      const body = `Naam: ${name}\nE-mail: ${email}\nBedrijf: ${company}\n\nIk wil graag een gratis AI-quickscan plannen om de mogelijkheden voor mijn bedrijf te bespreken.`;
                      
                      const mailtoLink = `mailto:indyctai@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                      window.location.href = mailtoLink;
                      
                      alert('Uw e-mailclient wordt geopend om de AI-quickscan aan te vragen.');
                    }}
                  >
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="name" className="text-right text-sm">Naam</label>
                        <Input id="name" name="name" required className="col-span-3 bg-slate-700 border-slate-600" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="email" className="text-right text-sm">Email</label>
                        <Input id="email" name="email" type="email" required className="col-span-3 bg-slate-700 border-slate-600" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="company" className="text-right text-sm">Bedrijf</label>
                        <Input id="company" name="company" required className="col-span-3 bg-slate-700 border-slate-600" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Plan Quickscan</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Meer Informatie
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study/Demo Section */}


      {/* Another Case Study/Demo Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={futuristicAi2}
                alt="Case Study AI 2"
                className="rounded-lg shadow-2xl w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-teal-600/20 rounded-lg" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Case Study: 40% Tijdsbesparing bij Klantenservice</CardTitle>
                  <CardDescription className="text-slate-300">
                    Implementatie van een AI-gestuurde chatbot voor klantenservice.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-slate-300">
                    Een middelgroot bedrijf had moeite met de hoge werkdruk op hun klantenserviceafdeling, wat resulteerde in lange wachttijden en lagere klanttevredenheid. IndyctAI ontwikkelde en implementeerde een intelligente AI-chatbot die de meest voorkomende vragen zelfstandig afhandelt.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-slate-300">40% tijdsbesparing op klantenservice</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-slate-300">24/7 beschikbaarheid voor klanten</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-slate-300">Verbeterde klanttevredenheid met 20%</span>
                    </div>
                  </div>
                  <blockquote className="text-slate-400 italic border-l-4 border-green-500 pl-4">
                    "De chatbot van IndyctAI heeft onze klantenservice revolutionair veranderd. Onze medewerkers kunnen zich nu richten op complexere vraagstukken, en onze klanten krijgen direct antwoord. Een absolute game-changer!"
                    <footer className="mt-2 text-white">— Mark de Vries, Manager Klantenservice</footer>
                  </blockquote>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}


