import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import { Header, Footer, PageHero, Breadcrumbs, Callout } from '@/components/corporate'
import { serviceData, serviceLinks, type ServiceSlug } from '@/lib/site-data'

export function generateStaticParams() { return serviceLinks.map(({ slug }) => ({ slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const service = serviceData[slug as ServiceSlug]; return service ? { title: `${service.title} | AMINODO`, description: service.description } : {} }

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = serviceData[slug as ServiceSlug]
  if (!service) notFound()
  return <><Header /><main>
    <PageHero eyebrow={service.eyebrow} title={service.title} description={service.description} image={service.image}><Link href="/solicitar-presupuesto" className="button button-accent">Habla con un especialista <ArrowUpRight size={17} /></Link></PageHero>
    <div className="container"><Breadcrumbs items={[{ label: 'Servicios', href: '/servicios' }, { label: service.title }]} />
      <section className="section service-detail"><div className="service-detail-main"><div className="eyebrow"><span className="eyebrow-line" />El enfoque AMINODO</div><h2>{service.intro}</h2><p>{service.detail}</p><div className="detail-process"><h3>Cómo trabajamos</h3>{service.process.map((step, index) => <div className="process-step" key={step}><span>{String(index + 1).padStart(2, '0')}</span><p>{step}</p></div>)}</div></div><aside className="service-sidebar"><h3>¿Para quién?</h3><p>{service.audience}</p><Callout title="Respuesta a medida" text="Analizamos tu situación y proponemos el siguiente paso con claridad." /><Link className="button button-primary" href="/contacto">Resolver una duda <ArrowUpRight size={17} /></Link></aside></section>
      <section className="benefits-band"><div><span className="eyebrow light"><span className="eyebrow-line" />Lo que obtienes</span><h2>Más control.<br /><span>Menos incertidumbre.</span></h2></div><div className="benefit-list">{service.benefits.map((benefit) => <div key={benefit}><Check size={16} />{benefit}</div>)}</div></section>
      <section className="section faq-section"><div><div className="eyebrow"><span className="eyebrow-line" />Preguntas frecuentes</div><h2>Antes de empezar.</h2></div><div className="faq-list">{service.faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>
    </div>
  </main><Footer /></>
}
