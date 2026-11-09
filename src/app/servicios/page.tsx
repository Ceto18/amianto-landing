import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Header, Footer, PageHero, Breadcrumbs } from '@/components/corporate'
import { serviceLinks, serviceData, type ServiceSlug } from '@/lib/site-data'
export const metadata = { title: 'Servicios | AMINODO', description: 'Soluciones integrales para gestionar el amianto.' }
export default function Servicios() { return <><Header /><main><PageHero eyebrow="Nuestros servicios" title="Una plataforma. Todas las respuestas." description="Del diagnóstico a la retirada, reunimos la experiencia necesaria para avanzar con seguridad." /><div className="container"><Breadcrumbs items={[{label:'Servicios'}]} /><section className="section"><div className="catalog-grid">{serviceLinks.map(({slug,title}) => <Link href={`/servicios/${slug}`} className="catalog-card" key={slug}><span>{String(serviceLinks.findIndex((item)=>item.slug===slug)+1).padStart(2,'0')}</span><h2>{title}</h2><p>{serviceData[slug as ServiceSlug].description}</p><b>Ver servicio <ArrowUpRight size={16}/></b></Link>)}</div></section></div></main><Footer /></> }
