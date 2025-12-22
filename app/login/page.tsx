"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, School, GraduationCap, BookOpen, Users } from "lucide-react"
import { useState } from "react"

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null)

  const roles = [
    {
      id: "admin",
      title: "Super Admin",
      description: "Full system access and management",
      icon: Shield,
    },
    {
      id: "school-admin",
      title: "School Admin",
      description: "Manage your school operations",
      icon: School,
    },
    {
      id: "teacher",
      title: "Teacher",
      description: "Access teaching and grading tools",
      icon: BookOpen,
    },
    {
      id: "student",
      title: "Student",
      description: "View courses, grades, and attendance",
      icon: GraduationCap,
    },
    {
      id: "parent",
      title: "Parent",
      description: "Monitor your child's progress",
      icon: Users,
    },
  ]

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId)
    // In a real application, this would redirect to the appropriate login page
    console.log(`Selected role: ${roleId}`)
    alert(`Redirecting to ${roleId} login page...`)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-accent py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center text-primary-foreground">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Login Portal</h1>
              <p className="text-lg md:text-xl opacity-90 text-pretty leading-relaxed">
                Select your role to access the digital portal
              </p>
            </div>
          </div>
        </section>

        {/* Login Options */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {roles.map((role) => (
                  <Card
                    key={role.id}
                    className={`group hover:shadow-lg transition-all cursor-pointer ${
                      selectedRole === role.id ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => handleRoleSelect(role.id)}
                  >
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <role.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{role.title}</CardTitle>
                      <CardDescription>{role.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-transparent" variant="outline">
                        Login as {role.title}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-center">Need Help?</h2>
                  <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
                  <p className="text-muted-foreground text-center mb-6 text-pretty">
                    If you're having trouble accessing your account or need login credentials, please contact your
                    school administrator or our support team.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="outline">Contact Support</Button>
                    <Button variant="outline">Forgot Password</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
