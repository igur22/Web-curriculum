"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Calendar, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header con foto principal */}
      <header className="relative bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img
                src="/oscarsimon-main.jpg"
                alt="Òscar Simón Gámez"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/20 shadow-lg"
              />
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">Òscar Simón Gámez</h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">Fisioterapeuta y Dietista-Nutricionista</h2>
              <div className="flex justify-center md:justify-start">
                <Button variant="outline" size="lg" className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Sección de idiomas y Sobre mí en paralelo */}
        <section className="grid md:grid-cols-2 gap-8">
          {/* Sección de Idiomas */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Idiomas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">Español</span>
                <Badge>Nativo</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">Catalán</span>
                <Badge>Nativo</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">Inglés</span>
                <Badge variant="secondary">B2 (Trinity College)</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">Alemán</span>
                <Badge variant="secondary">C1 (Goethe Institut)</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Sección Sobre mí */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Sobre mí
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base">Busco aprender de compañeros con más experiencia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base">Ambición por el rendimiento físico</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base">Pasión por el estudio autodidacta</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base">Facilidad de adaptación a nuevos equipos de trabajo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base">Hábitos de vida saludables</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Sección de Formación Académica */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center">Formación Académica</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Grado en Fisioterapia
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground mb-2">Universitat de Lleida</p>
                <div className="flex items-center gap-2 text-base text-muted-foreground">
                  <span>09/2020 - 07/2025</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Grado en Nutrición Humana y Dietética
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground mb-2">Universitat de Lleida</p>
                <div className="flex items-center gap-2 text-base text-muted-foreground">
                  <span>09/2020 - 07/2025</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Foto de graduación intercalada */}
        <div className="flex justify-center">
          <img
            src="/oscarsimon-graduation.jpg"
            alt="Òscar Simón Gámez - Graduación"
            className="max-w-full h-auto rounded-lg shadow-lg max-h-[288px] md:max-h-[576px] object-cover"
          />
        </div>

        {/* Sección de Experiencia Laboral */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center">Experiencia Laboral</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  FREMAP
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-2">Fisioterapeuta rehabilitador de accidentes laborales</p>
                <div className="flex items-center gap-2 text-base text-muted-foreground mb-2">
                  <span>07/2025 - 08/2025</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Club de Futbol Igualada
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-2">Fisioterapia deportiva</p>
                <div className="flex items-center gap-2 text-base text-muted-foreground mb-2">
                  <span>08/2025</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Club de Futbol Vilanova del Camí
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-2">Fisioterapia deportiva</p>
                <div className="flex items-center gap-2 text-base text-muted-foreground mb-2">
                  <span>08/2025 - Actualidad</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Cosnou
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-2">Fisioterapia en clínica privada</p>
                <div className="flex items-center gap-2 text-base text-muted-foreground mb-2">
                  <span>09/2025 - Actualidad</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Fisioterapia Domiciliaria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-2">Rehabilitación en casa</p>
                <div className="flex items-center gap-2 text-base text-muted-foreground mb-2">
                  <span>09/2025 - Actualidad</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Federación Catalana de Fútbol Sala
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-2">Árbitro de fútbol sala</p>
                <div className="flex items-center gap-2 text-base text-muted-foreground mb-2">
                  <span>01/2020 - 02/2022</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sección de Certificados y Seminarios */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center">Certificados y Seminarios</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Google Data Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">Google - Coursera</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <span>100 h</span>
                  <span>•</span>
                  <span>07/2022 - 09/2022</span>
                </div>
                <div className="text-xs text-primary font-medium">
                  100% en inglés
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Punción Seca y Tratamiento Conservador del Síndrome del Dolor Miofascial</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">Fisiofocus</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>60 h</span>
                  <span>•</span>
                  <span>06/2025 - 07/2025</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Abordaje del Dolor de Hombro con el Manguito de los Rotadores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">Consorci Sanitari de l'Anoia</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>5 h</span>
                  <span>•</span>
                  <span>10/2024</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Foto en uniforme intercalada */}
        <div className="flex justify-center">
          <img
            src="/oscarsimon-uniform.png"
            alt="Òscar Simón Gámez - Uniforme profesional"
            className="max-w-full h-auto rounded-lg shadow-lg max-h-[384px] md:max-h-[768px] object-cover"
          />
        </div>

        {/* Sección de Prácticas Universitarias */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center">Prácticas Universitarias</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Hospital Universitario de Igualada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground mb-2">Especialización en rehabilitación postoperatoria y diagnóstico por imagen</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>105 h</span>
                  <span>•</span>
                  <span>02/2023</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Residencia Amavir</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground mb-2">Especialización en fisioterapia geriátrica</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>105 h</span>
                  <span>•</span>
                  <span>06/2024</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Mutua Asistencial Anoia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground mb-2">Especialización en rehabilitación y drenaje linfático</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>105 h</span>
                  <span>•</span>
                  <span>06/2023</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Centro Privado Gessamí</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground mb-2">Especialización en fisioterapia deportiva y ecografía musculoesquelética</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>105 h</span>
                  <span>•</span>
                  <span>11/2024</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Mutua Mips</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground mb-2">Especialización en fisioterapia invasiva y rehabilitación</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>105 h</span>
                  <span>•</span>
                  <span>12/2024</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Hospital Universitario de Igualada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground mb-2">Especialización en fisioterapia respiratoria y cardíaca en pediatría, geriatría y unidad de cuidados intensivos</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>105 h</span>
                  <span>•</span>
                  <span>01/2024</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Hospital Psiquiátrico Santa Maria de Lleida</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground mb-2">Especialización en trastornos de la conducta alimentaria, con un enfoque basado en la terapia cognitivo-conductual e incorporación del ejercicio terapéutico como tratamiento</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>350 h</span>
                  <span>•</span>
                  <span>01/2025 - 03/2025</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Industria Alimentaria Grupo Meritem</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground mb-2">Especialización en seguridad y calidad alimentaria</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>350 h</span>
                  <span>•</span>
                  <span>03/2025 - 06/2025</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sección de Contacto */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center">Contacto</h2>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:ossimon02@gmail.com" className="hover:text-primary transition-colors text-base">
                    ossimon02@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+34628091638" className="hover:text-primary transition-colors text-base">
                    +34 628 091 638
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-base">Igualada, España</span>
                </div>
                <div className="flex items-center gap-3">
                  <ExternalLink className="w-5 h-5 text-primary" />
                  <a 
                    href="https://www.linkedin.com/in/%C3%B2scar-sim%C3%B3n-g%C3%A1mez-b024aa237/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors text-base"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-muted/50 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Òscar Simón Gámez. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}