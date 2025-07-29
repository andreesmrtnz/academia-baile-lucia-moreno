import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
  Instagram,
  Facebook,
  Youtube,
  Award,
  Users,
  Heart,
  Music,
  Crown,
  Sparkles,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AcademiaDanzaLuciaMoreno() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-flamenco-red-900/10">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Crown className="h-8 w-8 text-flamenco-red-900" />
              <h1 className="text-2xl font-serif font-bold text-flamenco-red-900">Academia Lucía Moreno</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#inicio" className="text-gray-800 hover:text-flamenco-red-900 transition-colors">
                Inicio
              </Link>
              <Link href="#academia" className="text-gray-800 hover:text-flamenco-red-900 transition-colors">
                Academia
              </Link>
              <Link href="#disciplinas" className="text-gray-800 hover:text-flamenco-red-900 transition-colors">
                Disciplinas
              </Link>
              <Link href="#profesorado" className="text-gray-800 hover:text-flamenco-red-900 transition-colors">
                Profesorado
              </Link>
              <Link href="#galeria" className="text-gray-800 hover:text-flamenco-red-900 transition-colors">
                Galería
              </Link>
              <Link href="#contacto" className="text-gray-800 hover:text-flamenco-red-900 transition-colors">
                Contacto
              </Link>
              <Button className="bg-flamenco-red-900 hover:bg-flamenco-red-800 text-white">Clase Gratuita</Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
        <Image
          src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Bailarina de flamenco en actuación"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight text-shadow">
            Pasión, Disciplina y Arte
            <span className="block text-3xl md:text-4xl text-andalusian-gold-300 mt-2">en cada paso</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Descubre el arte del flamenco y la danza española en el corazón de Almería
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-flamenco-red-900 hover:bg-flamenco-red-800 text-white px-8 py-4 text-lg flamenco-shadow">
              <Sparkles className="mr-2 h-5 w-5" />
              Clase de Prueba Gratuita
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-flamenco-red-900 px-8 py-4 text-lg bg-transparent"
            >
              Conoce Nuestra Academia
            </Button>
          </div>
        </div>
      </section>

      {/* Nuestra Academia */}
      <section id="academia" className="py-20 bg-gradient-to-b from-white to-flamenco-red-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-flamenco-red-900 mb-4">Nuestra Academia</h2>
            <div className="w-24 h-1 bg-andalusian-gold-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Un espacio donde el arte flamenco cobra vida, dirigido por la pasión y experiencia de Lucía Moreno
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Interior de la academia de danza"
                width={500}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-serif font-bold text-flamenco-red-900">Una Historia de Pasión</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                La Academia de Danza Lucía Moreno nace del sueño de crear un espacio donde el arte flamenco y la danza
                española se vivan con autenticidad y profesionalidad. Fundada en el corazón de Almería, nuestra academia
                se ha convertido en un referente de la formación artística integral.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Creemos en el crecimiento artístico y personal de nuestras alumnas, ofreciendo una formación que va más
                allá de la técnica, cultivando la expresión, la disciplina y el amor por nuestras tradiciones andaluzas.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="bg-flamenco-red-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <Users className="h-8 w-8" />
                  </div>
                  <p className="font-semibold text-flamenco-red-900">+200</p>
                  <p className="text-sm text-gray-600">Alumnas</p>
                </div>
                <div className="text-center">
                  <div className="bg-flamenco-red-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <Award className="h-8 w-8" />
                  </div>
                  <p className="font-semibold text-flamenco-red-900">15+</p>
                  <p className="text-sm text-gray-600">Años</p>
                </div>
                <div className="text-center">
                  <div className="bg-flamenco-red-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <Heart className="h-8 w-8" />
                  </div>
                  <p className="font-semibold text-flamenco-red-900">100%</p>
                  <p className="text-sm text-gray-600">Pasión</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disciplinas */}
      <section id="disciplinas" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-flamenco-red-900 mb-4">Nuestras Disciplinas</h2>
            <div className="w-24 h-1 bg-andalusian-gold-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ofrecemos una formación completa en las diferentes modalidades de la danza española y flamenca
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Flamenco",
                description: "La esencia del arte andaluz. Desde iniciación hasta nivel profesional.",
                image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                ages: "Desde 4 años",
                color: "bg-flamenco-red-900",
              },
              {
                title: "Danza Española",
                description: "Técnica clásica española con castañuelas, mantón y abanico.",
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                ages: "Desde 6 años",
                color: "bg-andalusian-gold-600",
              },
              {
                title: "Ballet",
                description: "Base técnica fundamental para todas las disciplinas de danza.",
                image: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                ages: "Desde 3 años",
                color: "bg-gray-800",
              },
              {
                title: "Sevillanas",
                description: "El baile popular andaluz por excelencia, tradición y alegría.",
                image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                ages: "Todas las edades",
                color: "bg-green-700",
              },
              {
                title: "Preparación Conservatorio",
                description: "Formación específica para acceso a conservatorios profesionales.",
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                ages: "10-18 años",
                color: "bg-purple-700",
              },
              {
                title: "Danza Contemporánea",
                description: "Expresión moderna fusionada con raíces flamencas.",
                image: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                ages: "Desde 8 años",
                color: "bg-blue-700",
              },
            ].map((disciplina, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={disciplina.image}
                    alt={disciplina.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <Badge className={`absolute top-4 right-4 ${disciplina.color} text-white`}>{disciplina.ages}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-flamenco-red-900">{disciplina.title}</CardTitle>
                  <CardDescription className="text-gray-700 text-base">{disciplina.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full border-flamenco-red-900 text-flamenco-red-900 hover:bg-flamenco-red-900 hover:text-white bg-transparent"
                  >
                    Más Información
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Profesorado */}
      <section id="profesorado" className="py-20 bg-gradient-to-b from-flamenco-red-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-flamenco-red-900 mb-4">Nuestro Profesorado</h2>
            <div className="w-24 h-1 bg-andalusian-gold-500 mx-auto mb-6"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-2xl">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Image
                    src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Lucía Moreno - Directora"
                    width={500}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="mb-6">
                    <h3 className="text-3xl font-serif font-bold text-flamenco-red-900 mb-2">Lucía Moreno</h3>
                    <p className="text-xl text-andalusian-gold-600 font-medium">Directora y Profesora Principal</p>
                  </div>

                  <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">
                      Bailarina y coreógrafa con más de 20 años de experiencia en el mundo del flamenco y la danza
                      española. Formada en los mejores conservatorios de Andalucía y con una trayectoria artística que
                      la ha llevado a escenarios nacionales e internacionales.
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-flamenco-red-900">Formación:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Título Superior en Danza Española - Conservatorio de Sevilla</li>
                        <li>• Especialización en Flamenco - Fundación Cristina Heeren</li>
                        <li>• Certificación en Pedagogía de la Danza</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-flamenco-red-900">Reconocimientos:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Premio Nacional de Danza Española (2018)</li>
                        <li>• Medalla al Mérito Artístico de Almería</li>
                        <li>• Colaboradora del Festival Internacional de Flamenco</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex space-x-4 mt-6">
                    <Button variant="outline" size="sm" className="border-flamenco-red-900 text-flamenco-red-900 bg-transparent">
                      <Instagram className="h-4 w-4 mr-2" />
                      @luciamoreno
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section id="galeria" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Galería</h2>
            <div className="w-24 h-1 bg-andalusian-gold-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Momentos únicos capturados en nuestras clases, actuaciones y eventos especiales
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            ].map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg aspect-square">
                <Image
                  src={image}
                  alt={`Galería imagen ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-flamenco-red-900 hover:bg-flamenco-red-800 text-white">
              <Instagram className="mr-2 h-5 w-5" />
              Ver más en Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* Opiniones */}
      <section className="py-20 bg-gradient-to-b from-white to-flamenco-red-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-flamenco-red-900 mb-4">
              Lo Que Dicen Nuestras Familias
            </h2>
            <div className="w-24 h-1 bg-andalusian-gold-500 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "María José García",
                role: "Madre de alumna",
                text: "Aquí mi hija encontró su segunda casa. La profesionalidad de Lucía y el ambiente familiar hacen que cada clase sea especial.",
                rating: 5,
              },
              {
                name: "Carmen Ruiz",
                role: "Alumna adulta",
                text: "Nunca pensé que podría aprender flamenco a los 45 años. Lucía me demostró que nunca es tarde para cumplir un sueño.",
                rating: 5,
              },
              {
                name: "Antonio Martínez",
                role: "Padre de alumna",
                text: "Una formación profesional y humana excepcional. Mi hija ha crecido como artista y como persona en esta academia.",
                rating: 5,
              },
            ].map((opinion, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(opinion.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-andalusian-gold-400 text-andalusian-gold-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic text-lg leading-relaxed">"{opinion.text}"</p>
                  <div>
                    <p className="font-semibold text-flamenco-red-900">{opinion.name}</p>
                    <p className="text-sm text-gray-600">{opinion.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto y Ubicación */}
      <section id="contacto" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-flamenco-red-900 mb-4">Contacto y Ubicación</h2>
            <div className="w-24 h-1 bg-andalusian-gold-500 mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-flamenco-red-900 mb-4">Información de Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-flamenco-red-900" />
                    <div>
                      <p className="font-semibold">Dirección</p>
                      <p className="text-gray-600">Calle del Arte, 15, 04001 Almería</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-flamenco-red-900" />
                    <div>
                      <p className="font-semibold">Teléfono</p>
                      <p className="text-gray-600">+34 950 123 456</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-flamenco-red-900" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">info@academialuciamoreno.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Clock className="h-6 w-6 text-flamenco-red-900" />
                    <div>
                      <p className="font-semibold">Horarios</p>
                      <p className="text-gray-600">Lunes a Viernes: 16:00 - 21:00</p>
                      <p className="text-gray-600">Sábados: 10:00 - 14:00</p>
                    </div>
                  </div>

                  <div className="pt-6">
                    <h4 className="font-semibold text-flamenco-red-900 mb-4">Síguenos en Redes Sociales</h4>
                    <div className="flex space-x-4">
                      <Button variant="outline" size="sm" className="border-flamenco-red-900 text-flamenco-red-900 bg-transparent">
                        <Instagram className="h-4 w-4 mr-2" />
                        Instagram
                      </Button>
                      <Button variant="outline" size="sm" className="border-flamenco-red-900 text-flamenco-red-900 bg-transparent">
                        <Facebook className="h-4 w-4 mr-2" />
                        Facebook
                      </Button>
                      <Button variant="outline" size="sm" className="border-flamenco-red-900 text-flamenco-red-900 bg-transparent">
                        <Youtube className="h-4 w-4 mr-2" />
                        YouTube
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-flamenco-red-900 mb-4">Solicita Información</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                        <Input placeholder="Tu nombre" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Apellidos</label>
                        <Input placeholder="Tus apellidos" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <Input type="email" placeholder="tu@email.com" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                      <Input type="tel" placeholder="+34 600 000 000" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Disciplina de Interés</label>
                      <select className="w-full p-3 border border-gray-300 rounded-md">
                        <option>Selecciona una disciplina</option>
                        <option>Flamenco</option>
                        <option>Danza Española</option>
                        <option>Ballet</option>
                        <option>Sevillanas</option>
                        <option>Preparación Conservatorio</option>
                        <option>Danza Contemporánea</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                      <Textarea placeholder="Cuéntanos sobre tu interés en la danza..." rows={4} />
                    </div>

                    <Button className="w-full bg-flamenco-red-900 hover:bg-flamenco-red-800 text-white py-3">Enviar Solicitud</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Mapa */}
          <div className="mt-12">
            <Card className="overflow-hidden">
              <div className="h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="h-12 w-12 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Mapa de Google Maps</p>
                  <p>Calle del Arte, 15, 04001 Almería</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Inscripción */}
      <section className="py-20 bg-gradient-to-b from-flamenco-red-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-flamenco-red-900 mb-4">Horarios e Inscripción</h2>
            <div className="w-24 h-1 bg-andalusian-gold-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Encuentra el horario perfecto para ti y comienza tu aventura en el mundo de la danza
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden">
              <CardHeader className="bg-flamenco-red-900 text-white text-center">
                <CardTitle className="text-2xl font-serif">Horarios por Disciplina y Edad</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold text-gray-900">Disciplina</th>
                        <th className="px-6 py-4 text-left font-semibold text-gray-900">Edad</th>
                        <th className="px-6 py-4 text-left font-semibold text-gray-900">Horario</th>
                        <th className="px-6 py-4 text-left font-semibold text-gray-900">Día</th>
                        <th className="px-6 py-4 text-left font-semibold text-gray-900">Precio/Mes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {[
                        {
                          disciplina: "Ballet Infantil",
                          edad: "3-5 años",
                          horario: "17:00-18:00",
                          dia: "Martes y Jueves",
                          precio: "45€",
                        },
                        {
                          disciplina: "Flamenco Iniciación",
                          edad: "6-8 años",
                          horario: "18:00-19:00",
                          dia: "Lunes y Miércoles",
                          precio: "50€",
                        },
                        {
                          disciplina: "Sevillanas",
                          edad: "Todas",
                          horario: "19:00-20:00",
                          dia: "Viernes",
                          precio: "35€",
                        },
                        {
                          disciplina: "Danza Española",
                          edad: "9-12 años",
                          horario: "17:30-18:30",
                          dia: "Martes y Jueves",
                          precio: "55€",
                        },
                        {
                          disciplina: "Flamenco Intermedio",
                          edad: "13-16 años",
                          horario: "19:00-20:30",
                          dia: "Lunes y Miércoles",
                          precio: "65€",
                        },
                        {
                          disciplina: "Preparación Conservatorio",
                          edad: "14-18 años",
                          horario: "20:30-22:00",
                          dia: "Lunes a Jueves",
                          precio: "85€",
                        },
                        {
                          disciplina: "Flamenco Adultos",
                          edad: "Adultos",
                          horario: "20:00-21:00",
                          dia: "Martes y Jueves",
                          precio: "60€",
                        },
                        {
                          disciplina: "Ballet Clásico",
                          edad: "8-12 años",
                          horario: "16:00-17:00",
                          dia: "Lunes y Miércoles",
                          precio: "50€",
                        },
                      ].map((clase, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium text-flamenco-red-900">{clase.disciplina}</td>
                          <td className="px-6 py-4 text-gray-700">{clase.edad}</td>
                          <td className="px-6 py-4 text-gray-700">{clase.horario}</td>
                          <td className="px-6 py-4 text-gray-700">{clase.dia}</td>
                          <td className="px-6 py-4 font-semibold text-green-600">{clase.precio}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-12 space-y-6">
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Button size="lg" className="bg-flamenco-red-900 hover:bg-flamenco-red-800 text-white py-4">
                  <Music className="mr-2 h-5 w-5" />
                  Descargar Formulario de Inscripción
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-flamenco-red-900 text-flamenco-red-900 hover:bg-flamenco-red-900 hover:text-white py-4 bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Llamar para Información
                </Button>
              </div>

              <div className="bg-andalusian-gold-50 border border-andalusian-gold-200 rounded-lg p-6 max-w-2xl mx-auto">
                <h4 className="font-semibold text-andalusian-gold-800 mb-2">🎁 Oferta Especial</h4>
                <p className="text-andalusian-gold-700">
                  <strong>Primera clase gratuita</strong> para nuevas alumnas. Descuento del 10% en la matrícula para
                  hermanas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Crown className="h-8 w-8 text-flamenco-red-500" />
                <h3 className="text-xl font-serif font-bold">Academia Lucía Moreno</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Pasión, disciplina y arte en cada paso. La mejor formación en danza española y flamenco en Almería.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-white hover:text-flamenco-red-500">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:text-flamenco-red-500">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:text-flamenco-red-500">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-flamenco-red-500">Disciplinas</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Flamenco
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Danza Española
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Ballet
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Sevillanas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Preparación Conservatorio
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-flamenco-red-500">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#academia" className="hover:text-white transition-colors">
                    Nuestra Academia
                  </Link>
                </li>
                <li>
                  <Link href="#profesorado" className="hover:text-white transition-colors">
                    Profesorado
                  </Link>
                </li>
                <li>
                  <Link href="#galeria" className="hover:text-white transition-colors">
                    Galería
                  </Link>
                </li>
                <li>
                  <Link href="#contacto" className="hover:text-white transition-colors">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Política de Privacidad
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-flamenco-red-500">Contacto</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Calle del Arte, 15, Almería
                </p>
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +34 950 123 456
                </p>
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  info@academialuciamoreno.com
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Academia de Danza Lucía Moreno. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg">
          <Phone className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
} 