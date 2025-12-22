"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  GraduationCap,
  Users,
  School,
  BarChartBig as ChartBar,
  BookOpen,
  MessageSquare,
  FileText,
  Calendar,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = ['/1st.jpg', '/banner.jpg']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { value: "15", label: "Schools Digitized" },
    { value: "8,500+", label: "Students Enrolled" },
    { value: "450+", label: "Teachers Empowered" },
    { value: "100%", label: "Digital Coverage" },
  ]

  const features = [
    {
      icon: ChartBar,
      title: "Smart School Management",
      description: "Streamlined administration and resource management for efficient operations.",
    },
    {
      icon: Calendar,
      title: "Digital Attendance",
      description: "Real-time attendance tracking for students and staff with instant notifications.",
    },
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Comprehensive academic tracking, grading, and performance analytics.",
    },
    {
      icon: MessageSquare,
      title: "Communication Hub",
      description: "Seamless communication between teachers, students, and parents.",
    },
    {
      icon: FileText,
      title: "Reports & Analytics",
      description: "Data-driven insights and detailed reports for informed decision-making.",
    },
    {
      icon: Users,
      title: "Parent Portal",
      description: "Keep parents engaged with their child's educational journey.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-accent to-primary py-48 md:py-72 overflow-hidden">
          {/* Background Images */}
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
          ))}
          <div className={`absolute inset-0 transition-opacity duration-1000 ${
            currentImage === 0 ? 'opacity-100 bg-black/40' : 'opacity-0'
          }`}></div>
          <div className={`absolute inset-0 transition-opacity duration-1000 ${
            currentImage === 1 ? 'opacity-100' : 'opacity-0'
          }`}></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-primary-foreground">
              {currentImage === 0 && (
                <>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Inspire • Connect • Ignite</h1>
                  <p className="text-2xl md:text-3xl lg:text-4xl mb-8 font-medium text-balance leading-relaxed">A welcoming community that inspires possibilities, connects people, and ignites learning!</p>
                </>
              )}
              <div className={`flex flex-col sm:flex-row gap-6 justify-center ${
                currentImage === 1 ? 'mt-32' : ''
              }`}>
                <Link href="/schools">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                    <School className="mr-3 h-6 w-6" />
                    Explore Schools
                  </Button>
                </Link>
                <Link href="/login">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto px-8 py-4 text-lg font-semibold rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                  >
                    <GraduationCap className="mr-3 h-6 w-6" />
                    Access Digital Portal
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Transforming Education Through Technology
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
                The Budgam School Digitization Initiative represents a bold step forward in educational excellence. By
                integrating modern digital tools across 15 schools, we're creating an ecosystem where students thrive,
                teachers innovate, and administrators can focus on what matters most—quality education.
              </p>
              <Link href="/about">
                <Button variant="default">
                  Learn More About Our Mission
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Navigation Features Section */}
        <section className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {/* Enrollment */}
            <div className="bg-green-100 py-12 px-4 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 mb-4">
                <svg className="w-full h-full text-blue-900 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0z" />
                </svg>
              </div>
              <span className="font-bold text-blue-900">Enrollment</span>
            </div>
            
            {/* Calendar */}
            <div className="bg-yellow-100 py-12 px-4 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 mb-4">
                <svg className="w-full h-full text-blue-900 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <span className="font-bold text-blue-900">Calendar</span>
            </div>
            
            {/* Schools */}
            <div className="bg-green-200 py-12 px-4 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 mb-4">
                <svg className="w-full h-full text-blue-900 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
              </div>
              <span className="font-bold text-blue-900">Schools</span>
            </div>
            
            {/* Resources */}
            <div className="bg-purple-100 py-12 px-4 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 mb-4">
                <svg className="w-full h-full text-blue-900 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
              </div>
              <span className="font-bold text-blue-900">Resources</span>
            </div>
            
            {/* Board */}
            <div className="bg-amber-50 py-12 px-4 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 mb-4">
                <svg className="w-full h-full text-blue-900 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <span className="font-bold text-blue-900">Board</span>
            </div>
            
            {/* Announcements */}
            <div className="bg-blue-100 py-12 px-4 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 mb-4">
                <svg className="w-full h-full text-blue-900 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <span className="font-bold text-blue-900">Announcements</span>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Digital Features</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Comprehensive digital tools designed to enhance every aspect of the educational experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const cardColors = [
                  "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100",
                  "bg-gradient-to-br from-green-50 to-emerald-50 border-green-100",
                  "bg-gradient-to-br from-purple-50 to-violet-50 border-purple-100",
                  "bg-gradient-to-br from-orange-50 to-amber-50 border-orange-100",
                  "bg-gradient-to-br from-pink-50 to-rose-50 border-pink-100",
                  "bg-gradient-to-br from-cyan-50 to-teal-50 border-cyan-100"
                ]
                return (
                <Card key={index} className={`group hover:shadow-lg transition-shadow ${cardColors[index]}`}>
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )})}
            </div>

            <div className="text-center mt-12">
              <Link href="/features">
                <Button variant="outline" size="lg">
                  View All Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Excellence Section */}
        <section className="py-6 md:py-10 bg-teal-800 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M15 10h2v8h-2V10zm8 0h2v8h-2V10zm8 0h2v8h-2V10zm-16 12h2v8h-2v-8zm8 0h2v8h-2v-8zm8 0h2v8h-2v-8zm-16 12h2v8h-2v-8zm8 0h2v8h-2v-8zm8 0h2v8h-2v-8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat'
            }}></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-white rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Column - Text */}
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-teal-800 mb-6 leading-tight">
                    Achieving excellence by<br />nurturing a love of learning!
                  </h2>
                  <div className="w-24 h-1 bg-teal-600 mb-6"></div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    A district where all students are welcomed, valued, engaged and excited about learning. Students graduate with excellence in critical thinking, a love of learning and are prepared to move successfully in the world and life. Every staff member, working as a team, helps to create a community of continuous learning, equity and opportunity for all.
                  </p>
                </div>
                
                {/* Right Column - Image */}
                <div>
                  <img 
                    src="/2nd.jpg" 
                    alt="Teacher interacting with students in classroom" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
