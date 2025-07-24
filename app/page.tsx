"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Clock,
  Droplets,
  Rocket,
  MapPin,
  Calendar,
  Users,
  Mail,
  ExternalLink,
  Menu,
  ChevronRight,
  Award,
  Target,
  Eye,
  Download,
  Play,
  Shield,
  Zap,
  Smartphone,
  Globe,
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
}

// Custom hook for scroll animations
function useScrollAnimation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  return { ref, isInView }
}

export default function Component() {
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, -150])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm backdrop-blur-sm bg-white/95"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center space-x-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer"
              >
                <img src="/favicon.ico" alt="" />
              </motion.div>
              <div>
                <h1 className="font-bold text-slate-800">Instituto Emiliani</h1>
                <p className="text-xs text-slate-500">Proyecto Salvador del Mundo</p>
              </div>
            </motion.div>

            <motion.nav
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="hidden md:flex items-center space-x-8"
            >
              {["Proyecto", "Historia", "Maqueta", "Equipo"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                  whileHover={{ y: -2 }}
                  className="text-slate-600 hover:text-slate-800 font-medium transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </motion.nav>

            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-gray-100 py-20 relative overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http://www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27%23f1f5f9%27%20fill-opacity%3D%270.4%27%3E%3Ccircle%20cx%3D%2730%27%20cy%3D%2730%27%20r%3D%271%27/%3E%3C/g%3E%3C/svg%3E')] opacity-50"
        />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge className="mb-6 bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">
                <Award className="w-3 h-3 mr-1" />
                Proyecto Académico 2025
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight"
            >
              Divino Salvador del Mundo
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="block text-slate-600 bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent"
              >
                Futurista
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Presentación de maqueta arquitectónica que integra patrimonio histórico con tecnología moderna para el
              futuro de San Salvador
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-3 gap-5 max-w-md mx-auto"
            >
              {[
                { number: "82", label: "Años de Historia" },
                { number: "18m", label: "Altura Total" },
                { number: "140x90cm", label: "Escala Maqueta" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-slate-800">{stat.number}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objetivos del Proyecto */}
      <ObjetivosSection />

      {/* Línea de Tiempo Histórica */}
      <HistoriaSection />

      {/* Sección de Maqueta */}
      <MaquetaSection />

      {/* Equipo del Proyecto */}
      <EquipoSection />

      {/* Footer */}
      <FooterSection />
    </div>
  )
}

function ObjetivosSection() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="proyecto" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3 md:mb-4">Objetivos del Proyecto</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Nuestro proyecto académico busca proponer una remodelación integral que respete el valor histórico mientras
            incorpora elementos de ciudad inteligente
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          {[
            {
              icon: Target,
              title: "Objetivo General",
              description: "Se diseña una maqueta de ciudad inteligente específicamente inspirada en la plaza El Divino Salvador del Mundo, incluyendo elementos tecnológicos, culturales y turísticos que promuevan el uso sostenible de la energía y aprovechen de manera eficiente el espacio.",
              features: [
                "Integración de tecnología moderna",
                "Preservación del patrimonio cultural",
                "Sostenibilidad energética",
                "Optimización del espacio público"
              ]
            },
            {
              icon: Eye,
              title: "Objetivos Específicos",
              description: "Diseñar una propuesta inteligente, tecnológica e innovadora para la plaza El Divino Salvador del Mundo, que combine sostenibilidad, cultura y urbanismo en El Salvador.",
              features: [
                "Implementar sensores de luz y movimiento con Arduino",
                "Optimizar el uso de energía",
                "Mejorar la experiencia turística",
                "Base giratoria activada por luz como símbolo de innovación"
              ]
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <Card className="border-slate-200 hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-12 h-12 flex-shrink-0 bg-${index === 0 ? 'blue' : 'purple'}-100 rounded-lg flex items-center justify-center`}
                    >
                      <item.icon className={`w-6 h-6 text-${index === 0 ? 'blue' : 'purple'}-600`} />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-slate-800 text-lg md:text-xl mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-sm md:text-base">{item.description}</p>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="mt-4"
                  >
                    <h4 className="font-medium text-slate-700 text-sm mb-2">Características principales:</h4>
                    <ul className="space-y-2">
                      {item.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ delay: 0.5 + index * 0.1 + featureIndex * 0.05 }}
                          className="flex items-start text-sm text-slate-600"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function HistoriaSection() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="historia" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Evolución Histórica</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Un recorrido por las tres etapas clave del Divino Salvador del Mundo
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* 1942 - Orígenes */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <motion.div
                    className="relative h-64 md:h-80 group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="/dsdm-1.jpg"
                      alt="Monumento original 1942"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                      className="absolute top-4 left-4"
                    >
                      <Badge className="bg-slate-700 text-white">
                        <Clock className="w-3 h-3 mr-1" />
                        1942
                      </Badge>
                    </motion.div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="p-8"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center"
                      >
                        <Clock className="w-5 h-5 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-slate-800">Orígenes Históricos</h3>
                    </div>
                    <p className="text-slate-600 mb-4">
                      Inaugurado el 26 de noviembre de 1942 por iniciativa del arzobispo Luis Chávez y González,
                      diseñado por el escultor italiano Ferrari Gazzigni.
                    </p>
                    <motion.div whileHover={{ scale: 1.02 }} className="bg-slate-100 p-4 rounded-lg mb-4">
                      <p className="text-sm text-slate-700">
                        <strong>Altura:</strong> 18 metros | <strong>Simbolismo:</strong> Jesús sobre el globo terráqueo
                      </p>
                    </motion.div>
                    <div className="flex items-center text-sm text-slate-500">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      IV Congreso Eucarístico Nacional
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* 2010 - Modernización */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="p-8 order-2 md:order-1"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center"
                      >
                        <Droplets className="w-5 h-5 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-slate-800">Modernización</h3>
                    </div>
                    <p className="text-slate-600 mb-4">
                      En 2010 se modernizó la plaza incorporando fuente iluminada y rediseño del espacio para mayor
                      accesibilidad e impacto visual.
                    </p>
                    <motion.div whileHover={{ scale: 1.02 }} className="bg-slate-100 p-4 rounded-lg mb-4">
                      <p className="text-sm text-slate-700">
                        <strong>Mejoras:</strong> Fuente iluminada, accesibilidad, punto de encuentro cultural
                      </p>
                    </motion.div>
                    <div className="flex items-center text-sm text-slate-500">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Espacio público renovado
                    </div>
                  </motion.div>
                  <motion.div
                    className="relative h-64 md:h-80 order-1 md:order-2 group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="/dsdm-2.jpg"
                      alt="Plaza modernizada 2010"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 }}
                      className="absolute top-4 right-4"
                    >
                      <Badge className="bg-slate-600 text-white">
                        <Droplets className="w-3 h-3 mr-1" />
                        2010
                      </Badge>
                    </motion.div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Futuro - Propuesta */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card className="border-slate-200 overflow-hidden bg-gradient-to-r from-slate-50 to-gray-50 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <motion.div
                    className="relative h-64 md:h-80 group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="/v-imagen-3.jpg"
                      alt="Propuesta futurista - Maqueta"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 }}
                      className="absolute top-4 left-4"
                    >
                      <Badge className="bg-slate-800 text-white">
                        <Rocket className="w-3 h-3 mr-1" />
                        Propuesta 2025
                      </Badge>
                    </motion.div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="p-8"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center"
                      >
                        <Rocket className="w-5 h-5 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-slate-800">Visión Futurista</h3>
                    </div>
                    <p className="text-slate-600 mb-4">
                      Nuestra propuesta integra tecnología inteligente: iluminación adaptativa, monitoreo sísmico y
                      sistemas de protección estructural avanzados.
                    </p>
                    <motion.div whileHover={{ scale: 1.02 }} className="bg-slate-100 p-4 rounded-lg mb-4">
                      <p className="text-sm text-slate-700">
                        <strong>Tecnologías:</strong> Sensores sísmicos, iluminación LED inteligente, pantallas
                        interactivas, aisladores elastoméricos
                      </p>
                    </motion.div>
                    <div className="flex items-center text-sm text-slate-500">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Ciudad inteligente y sostenible
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function MaquetaSection() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="maqueta" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Presentación de Maqueta</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Modelo arquitectónico a escala que representa nuestra propuesta de remodelación integral
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-slate-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2740%27%20height%3D%2740%27%20viewBox%3D%270%200%2040%2040%27%20xmlns%3D%27http://www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27%23cbd5e1%27%20fill-opacity%3D%270.3%27%3E%3Cpath%20d%3D%27M20%2020c0-5.5-4.5-10-10-10S0%2014.5%200%2020s4.5%2010%2010%2010%2010-4.5%2010-10zm10%200c0-5.5-4.5-10-10-10S10%2014.5%2010%2020s4.5%2010%2010%2010%2010-4.5%2010-10z%27/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

                  <video
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    controls
                    src="/video.mp4" // Cambia esta ruta por la correcta
                  />
                </motion.div>

                {/* Image Gallery */}
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  className="grid grid-cols-3 gap-2 md:gap-3"
                >
                  {[
                    { src: "/v-imagen-1.jpg", alt: "Vista frontal de la maqueta" },
                    { src: "/v-imagen-2.jpg", alt: "Detalle de la estructura" },
                    { src: "/v-imagen-3.jpg", alt: "Vista aérea de la maqueta" }
                  ].map((image, index) => (
                    <motion.div
                      key={index}
                      variants={scaleIn}
                      whileHover={{ scale: 1.05 }}
                      className="aspect-square relative rounded-md overflow-hidden cursor-pointer"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Características de la Maqueta</h3>
              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                className="space-y-4"
              >
                {[
                  { title: "Escala 140x90cm", description: "Representación detallada del monumento y su entorno" },
                  {
                    title: "Materiales Sostenibles",
                    description: "Construcción con materiales reciclables y eco-amigables",
                  },
                  { title: "Iluminación LED", description: "Sistema de iluminación que simula la propuesta real" },
                  {
                    title: "Elementos Interactivos",
                    description: "Componentes móviles que demuestran la funcionalidad",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    variants={fadeInLeft}
                    whileHover={{ x: 10, backgroundColor: "#f8fafc" }}
                    className="flex items-start gap-3 p-3 rounded-lg transition-colors"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="w-2 h-2 bg-slate-400 rounded-full mt-2"
                    />
                    <div>
                      <h4 className="font-semibold text-slate-700">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function EquipoSection() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="equipo" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Equipo del Proyecto</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Estudiantes comprometidos con la innovación y preservación patrimonial
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { "name": "Rodrigo André Gavidia Mendoza", "role": "Estudiante 8°B", "department": "" },
            { "name": "Dylan Omar González Martínez", "role": "Estudiante 8°B", "department": "" },
            { "name": "Zoe Valentina Guevara Hernández", "role": "Estudiante 8°B", "department": "" },
            { "name": "Helena Sofía Henríquez Barrera", "role": "Estudiante 8°B", "department": "" },
            { "name": "Angie Dayana Hernández Godoy", "role": "Estudiante 8°B", "department": "" },
            { "name": "Camila Valentina Hernández Martínez", "role": "Estudiante 8°B", "department": "" }
          ]
            .map((member, index) => (
              <motion.div
                key={member.name}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-slate-200 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-200 bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: "url('https://imgs.search.brave.com/2pODr3EgS5gALfXBmOAurXtyMGRVSrH5S4Kffrvx0XY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS8xNTAt/MTUwMzk0NV90cmFu/c3BhcmVudC11c2Vy/LXBuZy1kZWZhdWx0/LXVzZXItaW1hZ2Ut/cG5nLXBuZy5wbmc')"
                      }}
                    />
                    <h3 className="font-semibold text-slate-800 mb-1">{member.name}</h3>
                    <p className="text-slate-600 text-sm mb-2">{member.role}</p>
                    <p className="text-slate-500 text-xs">{member.department}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  )
}

function FooterSection() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8 }}
      className="bg-slate-800 text-white py-12"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="pt-5 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-slate-400 text-sm">
            © 2025 Instituto Emiliani. Proyecto académico con fines educativos.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-slate-400 text-sm flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              San Salvador, El Salvador
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400 text-sm">Web by Fantasma Digital</span>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
