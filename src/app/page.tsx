"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Calendar, ExternalLink } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { LanguageSelector } from "@/components/LanguageSelector";

export default function Home() {
  const { t, language, isLoaded } = useLanguage();

  // Mostrar un loading mientras se carga el idioma
  if (!isLoaded) {
    return <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
  <p className="mt-4">{t.loading}</p>
      </div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header con foto principal */}
      <header className="relative bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 py-16 md:py-24">
          {/* Selector de idioma */}
          <div className="absolute top-4 right-4">
            <LanguageSelector />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img
                src="/oscarsimon-main.jpg"
                alt="Òscar Simón Gámez"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/20 shadow-lg"
              />
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">{t.name}</h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4">{t.title}</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl">{t.headerDescription}</p>
              <div className="flex justify-center md:justify-start">
                <Button variant="outline" size="lg" className="gap-2" asChild>
                  <a href="https://www.linkedin.com/in/%C3%B2scar-sim%C3%B3n-g%C3%A1mez-b024aa237/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    {t.linkedin}
                  </a>
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
                {t.languages}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">{t.spanish}</span>
                <Badge>{t.native}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">{t.catalan}</span>
                <Badge>{t.native}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">{t.english}</span>
                <Badge variant="secondary">B2 (Trinity College)</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">{t.german}</span>
                <Badge variant="secondary">C1 (Goethe Institut)</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Sección Sobre mí */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {t.aboutMe}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {t.aboutPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-base">{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Sección de Formación Académica */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center">{t.academicTraining}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {t.physiotherapyDegree}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground mb-2">{t.university}</p>
                <div className="flex items-center gap-2 text-base text-muted-foreground">
                  <span>{t.duration1}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {t.nutritionDegree}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground mb-2">{t.university}</p>
                <div className="flex items-center gap-2 text-base text-muted-foreground">
                  <span>{t.duration1}</span>
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
          <h2 className="text-4xl font-bold mb-8 text-center">{t.workExperience}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Experiencias ordenadas cronológicamente, más recientes primero */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Cosnou
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-2">{t.workPositions.cosnou}</p>
                <div className="flex items-center gap-2 text-base mb-2">
                  <span className="text-muted-foreground">09/2025</span>
                  <span>-</span>
                  <span className="text-blue-500 font-medium">{t.current}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {t.workPositions.domiciliary}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-2">{t.workPositions.domiciliaryDescription}</p>
                <div className="flex items-center gap-2 text-base mb-2">
                  <span className="text-muted-foreground">09/2025</span>
                  <span>-</span>
                  <span className="text-blue-500 font-medium">{t.current}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {language === 'de' ? 'Vilanova del Camí Fußballverein' : 'Club de Futbol Vilanova del Camí'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-2">{t.workPositions.vilanova}</p>
                <div className="flex items-center gap-2 text-base mb-2">
                  <span className="text-muted-foreground">08/2025</span>
                  <span>-</span>
                  <span className="text-blue-500 font-medium">{t.current}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  FREMAP
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-2">{t.workPositions.fremap}</p>
                <div className="flex items-center gap-2 text-base text-muted-foreground mb-2">
                  <span>07/2025 - 08/2025</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {language === 'de' ? 'Igualada Fußballverein' : 'Club de Futbol Igualada'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-2">{t.workPositions.igualada}</p>
                <div className="flex items-center gap-2 text-base text-muted-foreground mb-2">
                  <span>08/2025</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {t.practiceTitles.futsal}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-2">{t.workPositions.futsal}</p>
                <div className="flex items-center gap-2 text-base text-muted-foreground mb-2">
                  <span>01/2020 - 02/2022</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sección de Certificados y Seminarios */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center">{t.certificates}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t.certificatesTitles.googleAnalytics}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">Google - Coursera</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <span>100 h</span>
                  <span>•</span>
                  <span>07/2022 - 09/2022</span>
                </div>
                <div className="text-xs text-primary font-medium">
                  {t.certificatesNotes?.allEnglish}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t.certificatesTitles.dryNeedling}</CardTitle>
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
                <CardTitle className="text-lg">{t.certificatesTitles.shoulder}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">Gesundheitskonsortium von Anoia</p>
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
          <h2 className="text-4xl font-bold mb-8 text-center">{t.universityPractices}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t.practiceTitles.hospitalIgualada1}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground mb-2">{t.practices.hospitalIgualada1}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>105 h</span>
                  <span>•</span>
                  <span>02/2023</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t.practiceTitles.amavir}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground mb-2">{t.practices.amavir}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>105 h</span>
                  <span>•</span>
                  <span>06/2024</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t.practiceTitles.anoia}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground mb-2">{t.practices.anoia}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>105 h</span>
                  <span>•</span>
                  <span>06/2023</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t.practiceTitles.gessami}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground mb-2">{t.practices.gessami}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>105 h</span>
                  <span>•</span>
                  <span>11/2024</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t.practiceTitles.mips}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground mb-2">{t.practices.mips}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>105 h</span>
                  <span>•</span>
                  <span>12/2024</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t.practiceTitles.hospitalIgualada2}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground mb-2">{t.practices.hospitalIgualada2}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>105 h</span>
                  <span>•</span>
                  <span>01/2024</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t.practiceTitles.psychiatric}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground mb-2">{t.practices.psychiatric}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>350 h</span>
                  <span>•</span>
                  <span>01/2025 - 03/2025</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t.practiceTitles.meritem}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground mb-2">{t.practices.meritem}</p>
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
          <h2 className="text-4xl font-bold mb-8 text-center">{t.contact}</h2>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:ossimon02@gmail.com" className="hover:text-primary transition-colors text-base">
                    ossimon02@gmail.com
                  </a>
                </div>
                {/* Phone removed for privacy */}
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-base">{t.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <ExternalLink className="w-5 h-5 text-primary" />
                  <a 
                    href="https://www.linkedin.com/in/%C3%B2scar-sim%C3%B3n-g%C3%A1mez-b024aa237/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors text-base"
                  >
                    {t.linkedin}
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
            © {new Date().getFullYear()} Òscar Simón Gámez. {t.allRightsReserved}
          </p>
        </div>
      </footer>
    </div>
  );
}