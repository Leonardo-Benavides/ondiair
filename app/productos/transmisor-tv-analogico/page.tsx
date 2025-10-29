import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, PhoneIcon, MailIcon, TvIcon } from "lucide-react"
import Link from "next/link"

export default function TransmisorTVAnalogicoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 via-primary/5 to-background">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/#inicio">
                  <h1 className="text-2xl font-bold text-primary cursor-pointer">ONDIAIR</h1>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  href="/#inicio"
                  className="text-foreground hover:text-primary transition-all duration-200 hover:shadow-md px-2 py-1 rounded"
                >
                  Inicio
                </Link>
                <Link
                  href="/#productos"
                  className="text-foreground hover:text-primary transition-all duration-200 hover:shadow-md px-2 py-1 rounded"
                >
                  Productos
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" asChild>
                <Link href="/#contacto">Contacto</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Product Detail Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/#productos">
            <Button
              variant="outline"
              className="mb-8 border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden border-2 border-border">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/transmisor%20Tv-hz2m4wj295ph26Yl4nv4VCJFXvrEgy.jpg"
                  alt="Transmisor TV Analógico ONDIAIR RTV 50 T - Vista frontal"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <TvIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Transmisores TV</p>
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground">Transmisor TV Analógico</h1>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground">
                  Transmisor de televisión analógica profesional ONDIAIR modelo RTV 50 T
                </p>
              </div>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Descripción del Producto</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Tecnología de transmisión analógica confiable y probada</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Pantalla LCD de monitoreo en tiempo real</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Diseño rack estándar de 19 pulgadas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Sistema de ventilación eficiente</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Controles frontales de fácil acceso</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Construcción robusta para uso profesional</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Technical Specifications */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Características Técnicas</CardTitle>
              <CardDescription>Especificaciones completas del transmisor TV analógico</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4 text-primary">Características Generales</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Modelo:</span>
                      <span>RTV 50 T</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Tipo de Transmisión:</span>
                      <span>Televisión Analógica</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Diseño:</span>
                      <span>Rack 19"</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Pantalla:</span>
                      <span>LCD</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-4 text-primary">Aplicaciones</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Estaciones de televisión locales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Canales comunitarios</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Transmisión de eventos especiales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Sistemas de televisión cerrada</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Solicita Más Información</CardTitle>
              <CardDescription>
                Contacta con nuestros expertos para especificaciones completas y asesoramiento técnico
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-4 bg-background rounded-lg">
                  <PhoneIcon className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Teléfono</p>
                    <p className="text-muted-foreground">+51982821624</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-background rounded-lg">
                  <MailIcon className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">ondiair@hotmail.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">ONDIAIR</h3>
              <p className="text-sm opacity-80">
                Líderes en equipos de transmisión profesional para radio y televisión.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Productos</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Transmisor TV Analógico</li>
                <li>Transmisor TV Digital ISDB-T</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+51982821624</li>
                <li>ondiair@hotmail.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-60">
            <p>&copy; 2025 ONDIAIR. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
