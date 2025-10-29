"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, PhoneIcon, MailIcon, TvIcon } from "lucide-react"
import Link from "next/link"

import { ThemeToggle } from "@/components/theme-toggle"

export default function TransmisorTVPage() {
  const handleDownloadSpecs = () => {
    const link = document.createElement("a")
    link.href = "/ONDIAIR_ISDB-T_100W_Especificaciones.pdf"
    link.download = "ONDIAIR_ISDB-T_100W_Especificaciones.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 via-primary/5 to-background dark:from-[#27171B] dark:via-[#21171D] dark:to-[#1B1A1C]">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 dark:bg-[#191A1B]/95 dark:border-[#2A2B2D]">
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
              <ThemeToggle />
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
              className="mb-8 border-primary text-primary hover:bg-primary hover:text-white bg-transparent dark:border-primary/60"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden border-2 border-border dark:border-[#2F2025]">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ISDB-T1-uwtPUHmgHx3lkEmcUxClKuhKhlSGpY.jpeg"
                  alt="Transmisor TV Digital ISDB-T ONDIAIR - Vista frontal"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden border-2 border-border dark:border-[#2F2025]">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ISDB-T2-aibKJSepFlWXtWLAvAzKxzwxunV3oN.jpeg"
                  alt="Transmisor TV Digital ISDB-T ONDIAIR - Vista superior"
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
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                      Transmisor TV Digital ISDB-T 100W
                    </h1>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground">Transmisor de Televisión digital ISDB-T de 100 vatios</p>
              </div>

              <Card className="mb-6 dark:bg-[#23181C] dark:border-[#2F2025]">
                <CardHeader>
                  <CardTitle>Descripción del Producto</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Mosfet del Módulo amplificador Final: 2 x NXP BLF884P</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Filtro Notch 120 vatios UHF máscara no crítica</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Fuentes conmutadas marca Meanwell</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Modulador digital ISDB-T con 04 entradas tipo HDMI</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Sistema de enfriamiento con ventiladores de 48v dc. 80 cfm</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Pantalla de monitoreo tipo color TFT táctil de 3.5 pulgadas</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Button variant="default" size="lg" className="w-full" onClick={handleDownloadSpecs}>
                Descargar Especificaciones (PDF)
              </Button>
            </div>
          </div>

          {/* Technical Specifications */}
          <Card className="mb-12 dark:bg-[#23181C] dark:border-[#2F2025]">
            <CardHeader>
              <CardTitle className="text-2xl">Características Técnicas</CardTitle>
              <CardDescription>Especificaciones completas del transmisor ISDB-T de 100W</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Generales */}
                <div>
                  <h3 className="font-semibold text-lg mb-4 text-primary">GENERALES</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Potencia de transmisión RF:</span>
                      <span>100 vatios</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Tipo de Transmisión:</span>
                      <span>Televisión estándar ISDB-T</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Frecuencia de transmisión:</span>
                      <span>UHF</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Conector de salida RF:</span>
                      <span>DIN 7/8 / 50 Ohm</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Voltaje de alimentación:</span>
                      <span>AC 200 a 240V, 50/60Hz</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Dimensiones:</span>
                      <span>Rack estándar de 19"</span>
                    </li>
                  </ul>
                </div>

                {/* De la Modulación */}
                <div>
                  <h3 className="font-semibold text-lg mb-4 text-primary">DE LA MODULACIÓN</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">TIPO:</span>
                      <span>Multi-Canal HDMI</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Entradas:</span>
                      <span>4 HDMI</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Salida:</span>
                      <span>01 RF ISDB-T</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Video Codificación:</span>
                      <span>MPEG-4 AVC/H.264</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Max. Resolución:</span>
                      <span>1920×1080_60P, 60i</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Bit-rate Video:</span>
                      <span>1Mbps - 13Mbps</span>
                    </li>
                  </ul>
                </div>

                {/* Audio */}
                <div>
                  <h3 className="font-semibold text-lg mb-4 text-primary">AUDIO</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Codificación:</span>
                      <span>MPEG1 Layer2</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Frecuencia de muestreo:</span>
                      <span>44.1KHz y 48Khz</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Bit-rate:</span>
                      <span>64-384 kbps</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Resolución:</span>
                      <span>24-bit</span>
                    </li>
                  </ul>
                </div>

                {/* Estándar ISDB-T */}
                <div>
                  <h3 className="font-semibold text-lg mb-4 text-primary">ESTÁNDAR ISDB-T</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Estándar:</span>
                      <span>ARIB STD-B31</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Ancho de banda:</span>
                      <span>6M</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Constelación:</span>
                      <span>QPSK, 16QAM, 64QAM</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Intervalo de guardia:</span>
                      <span>1/32, 1/16, 1/8, 1/4</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Modo de transmisión:</span>
                      <span>2K</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">MER:</span>
                      <span>≥ 40dB</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Frecuencia de la RF:</span>
                      <span>470 a 760 MHz</span>
                    </li>
                  </ul>
                </div>

                {/* De la Etapa RF */}
                <div>
                  <h3 className="font-semibold text-lg mb-4 text-primary">DE LA ETAPA RF - AMPLIFICADOR</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Frecuencia de transmisión:</span>
                      <span>470 a 860 Mhz</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Potencia de salida:</span>
                      <span>100 Vatios ISDB-T</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Ganancia mínima:</span>
                      <span>39 dB</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Modelo:</span>
                      <span>2 x NXP BLF884P</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Voltaje de alimentación:</span>
                      <span>50 V dc</span>
                    </li>
                  </ul>
                </div>

                {/* Filtro Pasa Banda UHF */}
                <div>
                  <h3 className="font-semibold text-lg mb-4 text-primary">FILTRO PASA BANDA UHF</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Tipo:</span>
                      <span>Cavidad de 6 polos</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Máxima potencia:</span>
                      <span>120 vatios</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Altitud:</span>
                      <span>1,850 msnm</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Máscara:</span>
                      <span>No crítica (6 MHz)</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Pérdidas de inserción:</span>
                      <span>CF &lt; 1.36 dB</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Pérdidas de retorno:</span>
                      <span>&gt; 25 dB (1.12)</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium text-foreground">Atenuación armónicas:</span>
                      <span>&gt; 50 dB hasta 1.8 GHz</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="bg-primary/5 border-primary/20 dark:bg-[#23181C] dark:border-[#2F2025]">
            <CardHeader>
              <CardTitle className="text-2xl">Solicita Más Información</CardTitle>
              <CardDescription>
                Contacta con nuestros expertos para especificaciones completas y asesoramiento técnico
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-4 bg-background rounded-lg dark:bg-[#24181C] dark:border dark:border-[#2F2025]">
                  <PhoneIcon className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Teléfono</p>
                    <p className="text-muted-foreground">+51982821624</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-background rounded-lg dark:bg-[#24181C] dark:border dark:border-[#2F2025]">
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
      <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8 mt-12 dark:bg-[#393D40] dark:text-[#F8F9FB]">
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
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-60 dark:border-white/10">
            <p>&copy; 2025 ONDIAIR. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
