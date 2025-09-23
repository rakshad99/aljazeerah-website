import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Wrench, 
  Zap, 
  Settings, 
  Shield, 
  Clock, 
  CheckCircle,
  Factory,
  Ship,
  Building,
  Truck,
  Menu,
  X,
  Award,
  Users,
  Calendar,
  Star,
  Download,
  FileText,
  Camera,
  Play,
  ArrowRight,
  Globe,
  Briefcase
} from 'lucide-react'
import './App.css'

// Import images
import logoImage from './assets/aljazeerah-logo.png'
import motorWorkshopImage from './assets/motor-repair-workshop.jpg'
import motorDiagramImage from './assets/motor-diagram.png'
import largeMotorImage from './assets/large-motor-repair.jpg'
import generatorMaintenanceImage from './assets/generator-maintenance.jpg'
import testingLabImage from './assets/testing-lab.jpg'
import highVoltageTestingImage from './assets/high-voltage-testing.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'equipment', 'industries', 'gallery', 'careers', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "AC & DC Electric Motors",
      description: "Complete repair, maintenance, and rewinding of all types of electric motors",
      image: motorDiagramImage,
      features: ["Motor Rewinding", "Bearing Replacement", "Performance Testing", "Efficiency Optimization"]
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Generator Services",
      description: "Comprehensive generator inspection, repair, and maintenance services",
      image: generatorMaintenanceImage,
      features: ["Generator Inspection", "Load Testing", "Control System Repair", "Preventive Maintenance"]
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Pump Systems",
      description: "Specialized services for vertical, horizontal, and irrigation pump systems",
      image: largeMotorImage,
      features: ["Pump Repair", "Impeller Balancing", "Seal Replacement", "Performance Analysis"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "HVAC Motors",
      description: "Expert HVAC motor repair and maintenance for optimal climate control",
      image: testingLabImage,
      features: ["Motor Diagnostics", "Energy Efficiency", "Variable Speed Drives", "System Integration"]
    }
  ]

  const industries = [
    { icon: <Ship className="h-6 w-6" />, name: "Marine & Shipping", count: "150+ Projects" },
    { icon: <Factory className="h-6 w-6" />, name: "Oil & Gas", count: "200+ Installations" },
    { icon: <Building className="h-6 w-6" />, name: "Manufacturing", count: "300+ Motors Serviced" },
    { icon: <Truck className="h-6 w-6" />, name: "Construction", count: "100+ Equipment" },
    { icon: <Globe className="h-6 w-6" />, name: "Utilities", count: "50+ Power Plants" },
    { icon: <Briefcase className="h-6 w-6" />, name: "Commercial", count: "400+ Buildings" }
  ]

  const equipment = [
    {
      name: "10 tons overhead crane / small cranes hoists 2 tons",
      category: "Heavy Lifting",
      image: motorWorkshopImage
    },
    {
      name: "Electronic controlled Electric Oven - 180° C",
      category: "Heat Treatment",
      image: testingLabImage
    },
    {
      name: "Vacuum Pressure Impregnation System",
      category: "Insulation",
      image: highVoltageTestingImage
    },
    {
      name: "Welding Machines MIG / TIG / ARC",
      category: "Fabrication",
      image: motorWorkshopImage
    },
    {
      name: "High Voltage Testing Machine - up to 50 KV",
      category: "Testing",
      image: highVoltageTestingImage
    },
    {
      name: "Coil Winding Machines",
      category: "Manufacturing",
      image: testingLabImage
    },
    {
      name: "Steam Cleaning Machine",
      category: "Cleaning",
      image: motorWorkshopImage
    },
    {
      name: "Vibration Analyzer",
      category: "Diagnostics",
      image: testingLabImage
    },
    {
      name: "Dynamic Balancing Equipment",
      category: "Precision",
      image: highVoltageTestingImage
    }
  ]

  const jobOpenings = [
    {
      title: "Senior Electrical Engineer",
      department: "Engineering",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead electrical motor design and repair projects"
    },
    {
      title: "Motor Technician",
      department: "Operations",
      type: "Full-time",
      experience: "3+ years",
      description: "Hands-on motor repair and maintenance specialist"
    },
    {
      title: "Quality Control Inspector",
      department: "Quality Assurance",
      type: "Full-time",
      experience: "2+ years",
      description: "Ensure quality standards in all repair work"
    },
    {
      title: "Field Service Engineer",
      department: "Field Services",
      type: "Full-time",
      experience: "4+ years",
      description: "On-site motor and generator services"
    }
  ]

  const galleryImages = [
    { src: motorWorkshopImage, title: "Modern Workshop Facility", category: "Facility" },
    { src: generatorMaintenanceImage, title: "Generator Maintenance", category: "Services" },
    { src: testingLabImage, title: "Testing Laboratory", category: "Equipment" },
    { src: highVoltageTestingImage, title: "High Voltage Testing", category: "Testing" },
    { src: largeMotorImage, title: "Large Motor Repair", category: "Services" },
    { src: motorDiagramImage, title: "Motor Components", category: "Technical" }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img src={logoImage} alt="Al Jazeerah Al Hamra Logo" className="w-16 h-16" />
              </div>
              <div className="ml-4">
                <h1 className="text-xl font-bold text-gray-900">Al Jazeerah Al Hamra</h1>
                <p className="text-sm text-gray-600">Electric Generators Maintenance</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['home', 'about', 'services', 'equipment', 'industries', 'gallery', 'careers', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors capitalize ${
                      activeSection === section 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {['home', 'about', 'services', 'equipment', 'industries', 'gallery', 'careers', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium capitalize w-full text-left"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <img src={logoImage} alt="Al Jazeerah Al Hamra Logo" className="w-20 h-20 mr-4" />
                <div>
                  <h1 className="text-2xl font-bold">Al Jazeerah Al Hamra</h1>
                  <p className="text-blue-200">Electric Generators Maintenance</p>
                </div>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Professional Electric Motor Services
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Since 2000, providing expert repair, maintenance, and rewinding services for all types of electric motors and generators across the UAE.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: 06 5422470
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                  <Mail className="mr-2 h-5 w-5" />
                  Get Quote
                </Button>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-yellow-400">24+</div>
                  <div className="text-sm text-blue-200">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">1000+</div>
                  <div className="text-sm text-blue-200">Motors Serviced</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">24/7</div>
                  <div className="text-sm text-blue-200">Emergency Service</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={motorWorkshopImage} 
                alt="Modern Motor Repair Workshop" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">24+ Years of Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Incepted in 2000, Al Jazeerah Al Hamra has acquired over two decades of service experience in the repairing and rewinding of electric motors and generators.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <img 
                src={testingLabImage} 
                alt="Professional Testing Laboratory" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Commitment to Quality</h3>
              <p className="text-lg text-gray-700 mb-6">
                We have professionally trained staff, state-of-the-art equipment, and the ability to perform all work with quality assurance at competitive rates. Our commitment to excellence drives our reputation as a trusted partner in electrical solutions.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700 font-medium">24/7 Emergency Service</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700 font-medium">Quality Assurance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700 font-medium">Competitive Rates</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700 font-medium">6 Months Warranty</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-0">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-blue-600 mb-2">24+</div>
                <div className="text-gray-700 font-medium">Years Experience</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 border-red-200">
              <CardContent className="p-0">
                <Settings className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-red-600 mb-2">1000+</div>
                <div className="text-gray-700 font-medium">Motors Serviced</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="p-0">
                <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-gray-700 font-medium">Service Available</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="p-0">
                <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-700 font-medium">Safety Record</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive electric motor and generator services with state-of-the-art equipment and professional expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-48 md:h-full">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center mb-3">
                        <div className="p-2 bg-blue-100 rounded-lg mr-3">
                          <div className="text-blue-600">{service.icon}</div>
                        </div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </div>
                      <CardDescription className="text-gray-600">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Wrench className="mr-3 h-6 w-6 text-blue-600" />
                  Specialized Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-3" />Electrical Testing & Troubleshooting</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-3" />Application Engineering - AC Drives/Vectors & DC Controls</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-3" />Predictive Maintenance Programs</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-3" />On Site Complete Motor Repair</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-3" />Motor Rewinding and Repair</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-3" />Generator Inspection & Testing</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-3" />Failure Analysis & Root Cause Investigation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Settings className="mr-3 h-6 w-6 text-red-600" />
                  Machine Shop Capabilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-3" />Fully Staffed Machine Shop</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-3" />10 Ton Plus Crane Capacity</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-3" />Lathes Up To 36" Swing Capacity</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-3" />Press-Capacity 100 Tons</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-3" />MIG, TIG & Arc Welding</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-3" />Dynamic Balancing Capability</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-600 mr-3" />Machining Of Commutator & Slip Rings</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section id="equipment" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">State-of-the-Art Equipment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our facility is equipped with the latest technology and machinery to handle all types of electric motor and generator services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                    {item.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-semibold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 font-medium">{item.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide specialized support for a broad array of business sectors across the UAE and Gulf region.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full w-fit">
                    <div className="text-blue-600">{industry.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-sm text-gray-600">{industry.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-blue-600 to-red-600 text-white p-8">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div>
                  <h3 className="text-xl font-bold mb-3">Marine & Shipping</h3>
                  <p className="text-sm opacity-90">Specialized motor services for marine vessels, offshore platforms, and shipping equipment with corrosion-resistant solutions.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Oil & Gas</h3>
                  <p className="text-sm opacity-90">Critical motor maintenance for oil field operations, refineries, and gas processing facilities with explosion-proof equipment.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Manufacturing</h3>
                  <p className="text-sm opacity-90">Industrial motor solutions for production lines, conveyor systems, and automated manufacturing equipment.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Healthcare</h3>
                  <p className="text-sm opacity-90">Reliable motor services for hospitals, medical facilities, and critical life support systems with zero downtime requirements.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at our modern facilities, advanced equipment, and professional work environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative h-64">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge className="mb-2 bg-blue-600">{image.category}</Badge>
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button size="sm" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of a growing company with over 24 years of excellence in electric motor services. We offer competitive packages and professional growth opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Users className="mr-3 h-6 w-6 text-blue-600" />
                  Why Work With Us?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <strong>Professional Growth:</strong> Continuous training and development programs
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <strong>Competitive Benefits:</strong> Health insurance, annual leave, and performance bonuses
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <strong>Modern Workplace:</strong> State-of-the-art equipment and safe working environment
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <strong>Team Culture:</strong> Collaborative environment with experienced professionals
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl">Current Openings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {jobOpenings.map((job, index) => (
                    <div key={index} className="border-l-4 border-blue-600 pl-4 py-2">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900">{job.title}</h4>
                        <Badge variant="outline">{job.type}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{job.department} • {job.experience}</p>
                      <p className="text-sm text-gray-700">{job.description}</p>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                  <FileText className="mr-2 h-4 w-4" />
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team for professional electric motor and generator services. We offer 24-hour time-bound service for pick-up and delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Get in Touch</CardTitle>
                  <CardDescription>Contact us for all your electric motor service needs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-blue-600 mr-4" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-600">06 5422470</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-blue-600 mr-4" />
                    <div>
                      <p className="font-semibold">Mobile</p>
                      <p className="text-gray-600">050 8699 259</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-blue-600 mr-4" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">info@aljazeerah-motors.ae</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-gray-600">P.O. Box: 97280<br />Sharjah - U.A.E.</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-green-600 mr-4" />
                    <div>
                      <p className="font-semibold text-green-600">24/7 Emergency Service Available</p>
                      <p className="text-gray-600">We offer 24-hour time-bound service for pick-up and delivery</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Request Service</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you promptly</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                        <input 
                          type="text" 
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                        <input 
                          type="tel" 
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                        <input 
                          type="email" 
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>Select a service</option>
                        <option>Motor Repair & Rewinding</option>
                        <option>Generator Service & Maintenance</option>
                        <option>Pump System Repair</option>
                        <option>HVAC Motor Service</option>
                        <option>Emergency Repair Service</option>
                        <option>Predictive Maintenance</option>
                        <option>On-site Service</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea 
                        rows="4" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                        placeholder="Please describe your requirements, motor specifications, or any specific issues..."
                      ></textarea>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-lg">
                      <ArrowRight className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <img src={logoImage} alt="Al Jazeerah Al Hamra Logo" className="w-12 h-12 mr-3" />
                <div>
                  <h3 className="text-xl font-bold">Al Jazeerah Al Hamra</h3>
                  <p className="text-sm text-gray-400">Electric Generators Maintenance</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Professional electric motor and generator services since 2000. Quality assurance, competitive rates, and 24/7 emergency service across the UAE.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white">
                  <Download className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white">
                  <FileText className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Motor Repair & Rewinding</li>
                <li className="hover:text-white transition-colors cursor-pointer">Generator Maintenance</li>
                <li className="hover:text-white transition-colors cursor-pointer">Pump Services</li>
                <li className="hover:text-white transition-colors cursor-pointer">HVAC Motor Repair</li>
                <li className="hover:text-white transition-colors cursor-pointer">Emergency Services</li>
                <li className="hover:text-white transition-colors cursor-pointer">Predictive Maintenance</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Industries</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Marine & Shipping</li>
                <li className="hover:text-white transition-colors cursor-pointer">Oil & Gas</li>
                <li className="hover:text-white transition-colors cursor-pointer">Manufacturing</li>
                <li className="hover:text-white transition-colors cursor-pointer">Construction</li>
                <li className="hover:text-white transition-colors cursor-pointer">Healthcare</li>
                <li className="hover:text-white transition-colors cursor-pointer">Utilities</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-4 text-gray-400">
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-3" />
                  06 5422470
                </p>
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-3" />
                  050 8699 259
                </p>
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-3" />
                  info@aljazeerah-motors.ae
                </p>
                <p className="flex items-start">
                  <MapPin className="h-4 w-4 mr-3 mt-1" />
                  P.O. Box: 97280, Sharjah - U.A.E.
                </p>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
            <p>&copy; 2024 Al Jazeerah Al Hamra Electric Generators Maintenance. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

