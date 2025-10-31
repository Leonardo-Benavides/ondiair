import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PhoneIcon, MailIcon, TvIcon } from "lucide-react"
import Link from "next/link"

export default function OndiairHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 via-primary/5 to-background">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  src="/desktop.png"
                  alt="ONDIAIR Logo"
                  className="hidden md:block h-12"
                />
                <img
                  src="/mobile.png"
                  alt="ONDIAIR Logo"
                  className="md:hidden h-10"
                />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#inicio"
                  className="text-foreground hover:text-primary transition-all duration-200 hover:shadow-md px-2 py-1 rounded"
                >
                  Inicio
                </a>
                <a
                  href="#productos"
                  className="text-foreground hover:text-primary transition-all duration-200 hover:shadow-md px-2 py-1 rounded"
                >
                  Productos
                </a>
                <a
                  href="#direcciones"
                  className="text-foreground hover:text-primary transition-all duration-200 hover:shadow-md px-2 py-1 rounded"
                >
                  Direcciones
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" asChild>
                <a href="#contacto">Contacto</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8" id="inicio">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Potencia tu Transmisión con
            <span className="text-primary block">ONDIAIR</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Líderes en transmisores y antenas de alta calidad para radio y televisión. Tecnología confiable que conecta
            al mundo.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestros Productos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Equipos de transmisión profesionales diseñados para máximo rendimiento y confiabilidad
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">Transmisores TV</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Transmisor TV Analógico */}
              <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <TvIcon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Transmisor TV Analógico</CardTitle>
                  <CardDescription className="text-sm">Transmisor de televisión analógica profesional</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-3">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/transmisor%20Tv-hz2m4wj295ph26Yl4nv4VCJFXvrEgy.jpg"
                      alt="Transmisor TV Analógico ONDIAIR RTV 50 T"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                  <ul className="space-y-1 text-xs text-muted-foreground mb-3">
                    <li>• Tecnología analógica confiable</li>
                    <li>• Pantalla LCD de monitoreo</li>
                    <li>• Diseño rack estándar 19"</li>
                  </ul>
                  <Link href="/productos/transmisor-tv-analogico">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Ver Detalles
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Transmisor TV Digital ISDB-T */}
              <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
                <CardHeader className="pb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <TvIcon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Transmisor TV Digital ISDB-T</CardTitle>
                  <CardDescription className="text-sm">
                    Transmisor de Television digital ISDB-T de 100 vatios
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-3">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ISDB-T1-uwtPUHmgHx3lkEmcUxClKuhKhlSGpY.jpeg"
                      alt="Transmisor TV Digital ISDB-T 100W"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                  <ul className="space-y-1 text-xs text-muted-foreground mb-3">
                    <li>• Potencia de transmisión RF 100 vatios</li>
                    <li>• Voltaje de alimentación: AC 200 a 240V，50/60Hz</li>
                    <li>• Frecuencia de transmisión Televisión estándar ISDB-T</li>
                  </ul>
                  <Link href="/productos/transmisor-tv-isdb-t">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Ver Detalles
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Direcciones Section */}
      <section id="direcciones" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestras Direcciones</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Encuentre nuestras oficinas en Argentina y Perú
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Oficina Principal - Argentina */}
            <Card>
              <CardHeader>
                <CardTitle>Oficina Principal</CardTitle>
                <CardDescription>Córdoba, Argentina</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.13984841859!2d-64.27942742353902!3d-31.32751069196209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329c38399eaab1%3A0xc72a9d0cd5149abe!2sAgua%20de%20la%20Pilona%208136%2C%20X5022BFT%20C%C3%B3rdoba!5e0!3m2!1sen!2sar!4v1761934726929!5m2!1sen!2sar"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Sede Perú */}
            <Card>
              <CardHeader>
                <CardTitle>Sede en Perú</CardTitle>
                <CardDescription>Lince, Lima</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.373740927692!2d-77.03969062405004!3d-12.08654664264456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c85f6f928f13%3A0x94ef2a52701d5226!2sJr.%20Mariscal%20William%20Miller%202182%2C%20Lince%2015073%2C%20Peru!5e0!3m2!1sen!2sar!4v1761934606448!5m2!1sen!2sar"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">¿Listo para Potenciar tu Transmisión?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contacta con nuestros expertos para encontrar la solución perfecta para tu proyecto
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <PhoneIcon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Teléfono</h3>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <img src="https://flagcdn.com/w40/ar.png" alt="Argentina" className="w-6 h-4" />
                  <p className="text-muted-foreground">+54 9 351 552-8285</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <img src="https://flagcdn.com/w40/pe.png" alt="Peru" className="w-6 h-4" />
                  <p className="text-muted-foreground">+51982821624</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <MailIcon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">ondiair@hotmail.com</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
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
